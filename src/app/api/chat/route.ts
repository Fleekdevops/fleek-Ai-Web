import { NextRequest, NextResponse } from 'next/server'

const systemPrompt = `You are the Fleektech assistant for a Nairobi-based IT solutions company.
Fleektech builds websites, mobile apps, custom software, and business portals, and provides IT support and maintenance.
Office: Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi, Kenya.
Phone: +254 758 175 057.
Emails: fleektechinc@gmail.com, FleekTechInc@proton.me, Fleektechinc@outlook.com.
Key value propositions: affordable excellence, time efficiency, skilled team, client-first commitment, and custom solutions at lower prices no matter how custom the project is.
Pricing guidance (starting points): websites from KES 18,000; business packages around KES 35,000–65,000; apps/software/portals/custom work quoted based on requirements.
Be helpful, professional, concise, and guide users to request a quote or contact Fleektech when appropriate.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const fallbackResponses = [
  {
    keywords: ['price', 'cost', 'pricing', 'budget', 'how much', 'kes'],
    response: "Fleektech offers affordable, custom pricing. Websites start from KES 18,000, business packages are commonly around KES 35,000–65,000, and apps/software/portals are quoted based on your requirements. Share your project details and we’ll give you a fair quote."
  },
  {
    keywords: ['website', 'web', 'site', 'landing'],
    response: "We design and develop professional websites that are mobile-friendly, fast, and built to help your business get results. We can also handle updates and maintenance after launch."
  },
  {
    keywords: ['app', 'mobile', 'android', 'ios'],
    response: "Fleektech builds custom mobile apps for Android and iOS. Tell us what the app should do, and we’ll recommend an affordable, practical solution."
  },
  {
    keywords: ['software', 'system', 'portal', 'custom'],
    response: "We build custom software and business portals tailored to your workflow—no matter how custom the project is. We focus on quality, efficiency, and lower pricing."
  },
  {
    keywords: ['support', 'maintenance', 'fix', 'repair', 'update'],
    response: "Yes—Fleektech provides IT support and maintenance, including troubleshooting, updates, fixes, performance checks, and ongoing improvements."
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk', 'location', 'office', 'where'],
    response: "You can reach Fleektech at +254 758 175 057 or email fleektechinc@gmail.com. Our office is at Moi Avenue, Stanbank Building, 3rd Floor, Room 10, Nairobi."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hi! I’m the Fleektech assistant. I can help with websites, apps, custom software, portals, IT support, and maintenance. What would you like to build or fix?"
  },
  {
    keywords: ['help', 'what can you do', 'services'],
    response: "Fleektech can help with:\n\n• Website Design & Development\n• Mobile Apps\n• Custom Software\n• Business Portals/Web Apps\n• IT Support & Maintenance\n• Upgrades and improvements\n\nWhat do you need?"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! If you share your project details, I can help you figure out the best next step and a suitable quote range."
  }
]

function getSmartFallback(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  for (const item of fallbackResponses) {
    if (item.keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return item.response
    }
  }

  const defaultResponses = [
    "Fleektech can help with websites, apps, custom software, portals, IT support, and maintenance. Share a bit about your project and I’ll point you in the right direction.",
    "We build affordable, custom IT solutions for businesses in Nairobi and beyond. Tell me what you need, and I’ll help you get a quote.",
    "No matter how custom your project is, Fleektech can help you build it at a fair price. What are you looking to create or improve?",
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
