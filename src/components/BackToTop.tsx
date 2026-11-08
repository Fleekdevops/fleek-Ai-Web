'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
        {isVisible && (
          <motion.button
            type="button"
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.9 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.9 }}
            whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 border border-white/10"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-darker" />
          </motion.button>
        )}
    </AnimatePresence>
  )
}
