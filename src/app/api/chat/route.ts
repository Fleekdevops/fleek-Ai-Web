import { NextRequest, NextResponse } from 'next/server'

const systemPrompt = `You are the Fleektech assistant for a Nairobi-based IT solutions company.
Fleektech builds websites, mobile apps, custom software, and business portals, and provides IT support and maintenance.
Office: Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi, Kenya.
Phone: +254 758 175 057.
Emails: fleektechinc@gmail.com, FleekTechInc@proton.me, Fleektechinc@outlook.com.
Key value propositions: clear scoping, practical recommendations, skilled delivery, client-first communication, and reliable support after launch.
Pricing is service-specific and depends on timeline and customization (do NOT use one flat price across services):
- Websites & landing pages: from KES 18,000 (scope by pages, content, forms, SEO, design).
- Portals / business systems: from KES 55,000 (scope by roles, workflows, data, integrations).
- Mobile apps: from KES 120,000 (scope by platform, features, APIs, release needs).
- Custom software: from KES 85,000 (scope by workflow complexity, integrations, reporting).
- IT support: from KES 4,500 per request or plan-based by urgency and environment.
- Maintenance: from KES 8,000/month based on system size and care level.
Always explain that final quotes depend on service type, timeline, and customization, then guide users to request a scoped quote.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const fallbackResponses = [
  {
    keywords: ['price', 'cost', 'pricing', 'budget', 'how much', 'kes', 'quote', 'estimate'],
    response:
      'Fleektech prices each service differently based on scope, timeline, and customization. Typical starting points: websites from KES 18,000; portals/business systems from KES 55,000; mobile apps from KES 120,000; custom software from KES 85,000; IT support from KES 4,500; maintenance from KES 8,000/month. Share the service, timeline, and what you need customized for a scoped quote.',
  },
  {
    keywords: ['website', 'web', 'site', 'landing'],
    response:
      'We design and develop professional websites that are mobile-friendly, fast, and built to generate inquiries. Website pricing starts from KES 18,000 and changes with page count, content, forms, SEO, and design/custom features.',
  },
  {
    keywords: ['app', 'mobile', 'android', 'ios'],
    response:
      'Fleektech builds custom mobile apps for Android and iOS. Mobile app pricing starts from KES 120,000 and depends on platform(s), features, APIs/integrations, authentication, and timeline—not website pricing.',
  },
  {
    keywords: ['software', 'system', 'custom', 'automation'],
    response:
      'We build custom software tailored to your workflow. Custom software pricing starts from KES 85,000 and is scoped by process complexity, integrations, reporting, users, and delivery timeline.',
  },
  {
    keywords: ['portal', 'dashboard', 'web app', 'admin'],
    response:
      'We build business portals and web apps with dashboards, roles, and workflows. Portal/system pricing starts from KES 55,000 and depends on user roles, data flows, integrations, and customization.',
  },
  {
    keywords: ['support', 'maintenance', 'fix', 'repair', 'update', 'care'],
    response:
      'Yes—Fleektech provides IT support and maintenance. Support starts from KES 4,500 (request/plan) and maintenance from KES 8,000/month, depending on system size, urgency, response needs, and scope of care.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk', 'location', 'office', 'where'],
    response:
      'You can reach Fleektech at +254 758 175 057 or email fleektechinc@gmail.com / FleekTechInc@proton.me / Fleektechinc@outlook.com. Office: Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response:
      'Hi! I’m the Fleektech assistant. I can help with websites, apps, custom software, portals, IT support, and maintenance. Which service and timeline are you considering?',
  },
  {
    keywords: ['help', 'what can you do', 'services'],
    response:
      'Fleektech can help with:\n\n• Website Design & Development\n• Mobile Apps\n• Custom Software\n• Portals & Business Systems\n• IT Support\n• Maintenance & Improvements\n\nTell me the service you need and how custom/time-sensitive it is for a relevant estimate.',
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response:
      "You're welcome! If you share the service, timeline, and customization level, I can help you narrow the right starting range.",
  },
]

function getSmartFallback(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  for (const item of fallbackResponses) {
    if (item.keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return item.response
    }
  }

  const defaultResponses = [
    'Fleektech can help with websites, apps, custom software, portals, IT support, and maintenance. Share the service, timeline, and customization level for a service-specific estimate.',
    'We scope projects by service type, time, and customization—not one flat price for everything. Tell me what you want to build or improve.',
    'If you share your goal, deadline, and how custom it needs to be, I can suggest the right Fleektech service and starting price range.',
  ]

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

async function chatWithOpenRouter(messages: { role: string; content: string }[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY
  const openaiKey = process.env.OPENAI_API_KEY

  let endpoint = 'https://openrouter.ai/api/v1/chat/completions'
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  const body: Record<string, unknown> = {
    model: 'meta-llama/llama-3.2-3b-instruct:free',
    messages,
    max_tokens: 500,
    temperature: 0.7,
  }

  if (apiKey && apiKey !== 'your-openai-api-key') {
    headers['Authorization'] = `Bearer ${apiKey}`
  } else if (openaiKey && openaiKey !== 'demo-key' && openaiKey !== 'your-openai-api-key') {
    endpoint = 'https://api.openai.com/v1/chat/completions'
    headers['Authorization'] = `Bearer ${openaiKey}`
    body.model = 'gpt-3.5-turbo'
  } else {
    throw new Error('No API key available')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', response.status, errorText)
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || getSmartFallback('')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, history } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const cleanMessage = message.trim()
    if (cleanMessage.length === 0) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 })
    }

    const hasApiKey =
      (process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY !== 'your-openai-api-key') ||
      (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'demo-key' && process.env.OPENAI_API_KEY !== 'your-openai-api-key')

    if (hasApiKey) {
      const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
        { role: 'system', content: systemPrompt },
        ...(history || []).slice(-10).map((msg: Message) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
        { role: 'user', content: cleanMessage },
      ]

      const response = await chatWithOpenRouter(messages)
      return NextResponse.json({ response })
    }

    await new Promise((resolve) => setTimeout(resolve, 250))
    const response = getSmartFallback(cleanMessage)
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    const response = getSmartFallback('')
    return NextResponse.json({ response })
  }
}
