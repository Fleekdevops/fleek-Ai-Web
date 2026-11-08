'use client'

import { useState } from 'react'
import { Send, Bot, Loader2, Copy, Check } from 'lucide-react'

export default function ChatTool() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm the Fleektech Assistant. Ask about websites, apps, custom software, portals, IT support, or service-specific pricing." },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return

    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: next }),
      })
      const data = await response.json().catch(() => ({}))
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response || 'Sorry, I could not respond right now.' }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I’m having trouble right now. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const copyResponse = async (content: string, i: number) => {
    await navigator.clipboard.writeText(content)
    setCopiedIndex(i)
    setTimeout(() => setCopiedIndex(null), 1800)
  }

  return (
    <div className="card-bg rounded-3xl p-6 h-[500px] flex flex-col border border-white/8">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center"><Bot className="w-5 h-5 text-darker" /></div>
        <div>
          <h3 className="font-bold">Fleektech Assistant</h3>
          <p className="text-xs text-gray">Service-specific guidance</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'gradient-bg text-white' : 'bg-white/5 text-light border border-white/6'}`}>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && (
                <button type="button" onClick={() => copyResponse(msg.content, i)} className="mt-2 text-xs text-gray hover:text-primary flex items-center gap-1">
                  {copiedIndex === i ? <Check size={12} /> : <Copy size={12} />}
                  {copiedIndex === i ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start"><div className="bg-white/5 border border-white/6 px-4 py-3 rounded-2xl flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-primary" /><span className="text-sm text-gray">Thinking...</span></div></div>
        )}
      </div>

      <div className="flex gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about scope, timeline, or pricing..." className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm" />
        <button type="button" onClick={handleSend} disabled={!input.trim() || isLoading} className="btn-primary px-4 py-3 rounded-xl disabled:opacity-50" aria-label="Send"><Send size={18} className="text-darker" /></button>
      </div>
    </div>
  )
}
