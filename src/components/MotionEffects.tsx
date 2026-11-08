'use client'

import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function MotionEffects() {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.('.interactive-card') as HTMLElement | null
      if (!target) return
      const rect = target.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / Math.max(rect.width, 1)) * 100
      const y = ((e.clientY - rect.top) / Math.max(rect.height, 1)) * 100
      target.style.setProperty('--mx', `${x}%`)
      target.style.setProperty('--my', `${y}%`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce])

  return null
}