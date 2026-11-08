'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Minimize2, Maximize2, Send, MessageSquare, Loader2 } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const quickActions = ['Website quote', 'App or software scope', 'Portal/system pricing', 'IT support plan', 'Contact Fleektech']

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm the Fleektech assistant. Tell me what you need—website, app, software, portal, or IT support—and I’ll help you understand the right scope and pricing range.", timestamp: new Date() },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const handleSend = async (value = input) => {
    const text = value.trim()
    if (!text) return
    const nextUser: Message = { role: 'user', content: text, timestamp: new Date() }
    const history = messages
    setMessages((prev) => [...prev, nextUser])
    setInput('')
    setIsTyping(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })
      const data = await response.json().catch(() => ({}))
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response || 'Please contact Fleektech at +254 758 175 057 or fleektechinc@gmail.com.', timestamp: new Date() }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: "I couldn't connect right now. Please contact Fleektech at +254 758 175 057 or fleektechinc@gmail.com.", timestamp: new Date() }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 14, scale: 0.97 }}
            className={`card-bg rounded-[1.6rem] overflow-hidden border border-white/10 shadow-2xl mb-3 ${isFullscreen ? 'w-[min(96vw,72rem)] h-[82vh]' : 'w-[min(92vw,400px)] h-[600px] max-h-[78vh]'}`}
          >
            <div className="gradient-bg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="font-bold text-white">Fleektech Assistant</div>
                  <div className="text-xs text-white/80 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" /> Online</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setIsFullscreen(!isFullscreen)} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}>{isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}</button>
                <button type="button" onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Close chat"><X size={16} /></button>
              </div>
            </div>

            <div className="h-[calc(100%-72px)] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <motion.div key={index} initial={reduce ? false : { opacity: 0, y: 8 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[84%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${message.role === 'user' ? 'gradient-bg text-white rounded-br-md' : 'bg-white/[0.05] text-light rounded-bl-md border border-white/6'}`}>{message.content}</div>
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex justify-start"><div className="bg-white/[0.05] border border-white/6 px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin text-primary" /><span className="text-gray text-sm">Typing...</span></div></div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-white/10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickActions.map((action) => (
                    <button key={action} type="button" onClick={() => { setInput(action); handleSend(action) }} className="text-xs px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-primary/15 border border-white/8 text-gray hover:text-light transition-all">{action}</button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())} placeholder="Ask about websites, apps, software, portals, or support..." className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 focus:border-primary outline-none text-sm" />
                  <button type="button" onClick={() => handleSend()} disabled={!input.trim() || isTyping} className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center disabled:opacity-50"><Send size={17} className="text-darker" /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button type="button" whileHover={reduce ? undefined : { scale: 1.06, y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }} onClick={() => setIsOpen(true)} className="w-15 h-15 w-[3.75rem] h-[3.75rem] rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse-glow border border-white/10" aria-label="Open chat">
          <MessageSquare className="w-7 h-7 text-darker" />
        </motion.button>
      )}
    </div>
  )
}
