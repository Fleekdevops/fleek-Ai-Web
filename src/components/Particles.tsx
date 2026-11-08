'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

type Particle = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number }

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let t = 0
    const pointer = { x: -9999, y: -9999 }
    const colors = ['#ff7a45', '#22c6a3', '#ffd166', '#8ea2ff']
    const particles: Particle[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(72, Math.max(34, Math.floor((w * h) / 32000)))
      particles.length = 0
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.6,
          c: colors[i % colors.length],
          a: Math.random() * 0.35 + 0.12,
        })
      }
    }

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const draw = () => {
      t += 0.0035
      ctx.clearRect(0, 0, w, h)
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, `rgba(255,122,69,${0.03 + Math.sin(t) * 0.01})`)
      g.addColorStop(1, `rgba(34,198,163,${0.03 + Math.cos(t) * 0.01})`)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = pointer.x - p.x
        const dy = pointer.y - p.y
        const d = Math.hypot(dx, dy)
        if (d < 130 && d > 0.01) {
          p.vx -= (dx / d) * 0.003
          p.vy -= (dy / d) * 0.003
        }
        p.x += p.vx + Math.sin(t + i) * 0.06
        p.y += p.vy + Math.cos(t + i) * 0.06
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c
        ctx.globalAlpha = p.a
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = dx * dx + dy * dy
          if (dist < 15625) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = '#8ea2ff'
            ctx.globalAlpha = 0.055 * (1 - dist / 15625)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [reduce])

  if (reduce) return null
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.62 }} aria-hidden="true" />
}
