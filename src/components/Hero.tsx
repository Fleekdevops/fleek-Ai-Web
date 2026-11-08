'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Cpu, ChevronDown, MousePointer, Wrench, ShieldCheck, Timer, BadgeCheck, Sparkles } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Typewriter from '@/components/Typewriter'

const stats = [
  { number: 'Scoped', label: 'By Service' },
  { number: 'On Time', label: 'Delivery Focus' },
  { number: 'Custom', label: 'Built to Fit' },
  { number: 'Support', label: 'After Launch' },
]

const signals = ['Tech Support & Maintenance', 'Websites, Apps & Portals', 'Custom Software', 'Service-Specific Pricing']

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, reduce ? 0 : 90])
  const opacity = useTransform(scrollY, [0, 380], [1, reduce ? 1 : 0.35])

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(false), 3800)
    return () => clearTimeout(timer)
  }, [])

  const fade = (delay = 0) => reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] } }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute -top-20 -left-24 h-[34rem] w-[34rem] rounded-full bg-primary/18 blur-3xl" animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute top-[18%] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-secondary/16 blur-3xl" animate={reduce ? undefined : { x: [0, -24, 0], y: [0, 26, 0], scale: [1, 1.1, 1] }} transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-[-8rem] left-[28%] h-[24rem] w-[24rem] rounded-full bg-[#8ea2ff]/12 blur-3xl" animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -18, 0] }} transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute inset-0" style={{ y, opacity }} aria-hidden="true">
          <div className="absolute left-[8%] top-[24%] h-px w-40 bg-gradient-to-r from-transparent via-primary/35 to-transparent rotate-[18deg]" />
          <div className="absolute right-[12%] top-[36%] h-px w-48 bg-gradient-to-r from-transparent via-secondary/35 to-transparent -rotate-[14deg]" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
        <div className="container pt-32 pb-20">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-14 items-center min-h-[72vh]">
            <div>
              <motion.div {...fade(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] text-primary border border-primary/20 mb-6 shadow-glow">
                <BadgeCheck size={16} />
                <span className="font-semibold text-sm">Nairobi IT partner for businesses that need reliable delivery</span>
              </motion.div>

              <motion.h1 {...fade(0.05)} className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 leading-[1.01] tracking-[-0.03em]">
                Build the right digital solution
              </motion.h1>
              <motion.div {...fade(0.11)} className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.08] min-h-[2.45em] sm:min-h-[1.4em]">
                <Typewriter words={['Websites that convert and build trust', 'Mobile apps shaped to your workflow', 'Custom software and portals that scale', 'IT support that keeps systems moving']} className="gradient-text" />
              </motion.div>

              <motion.p {...fade(0.17)} className="text-lg sm:text-xl text-gray max-w-2xl mb-8 leading-relaxed">
                Fleektech builds websites, apps, software, and portals, then supports them after launch. Pricing is scoped by service, timeline, and customization—so you get a realistic quote, not a generic rate card.
              </motion.p>

              <motion.div {...fade(0.23)} className="flex flex-wrap gap-2.5 mb-8">
                {signals.map((item, i) => (
                  <motion.span key={item} initial={reduce ? false : { opacity: 0, y: 10 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 0.28 + i * 0.05 }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.035] border border-white/10 text-sm text-light/90 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.08] hover:-translate-y-1">
                    <ShieldCheck size={14} className="text-accent" />
                    {item}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="#contact" className="btn-primary px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-lg motion-sheen">Request a Quote <ArrowRight size={20} /></Link>
                <Link href="#solutions" className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 text-lg"><Sparkles size={18} className="text-accent" /> Estimate by Scope</Link>
              </motion.div>

              <motion.div {...fade(0.36)} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} whileHover={reduce ? undefined : { y: -6, scale: 1.02 }} className="card-bg interactive-card rounded-2xl px-4 py-3.5 border border-white/6">
                    <div className="font-display text-xl sm:text-2xl font-bold text-light">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div className="relative hidden lg:block" initial={reduce ? false : { opacity: 0, x: 28 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div className="relative" animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 0.35, 0] }} transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/22 via-transparent to-secondary/22 blur-2xl" />
                <div className="relative card-bg rounded-[1.8rem] p-7 border border-white/10 shadow-glow interactive-card">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary/80" /><span className="w-2.5 h-2.5 rounded-full bg-accent/80" /><span className="w-2.5 h-2.5 rounded-full bg-secondary/80" /></div>
                    <span className="text-gray text-sm">scoping-engine.fleektech</span>
                  </div>
                  <div className="space-y-3 font-mono text-[13px]">
                    <div className="flex items-center gap-2 text-gray"><Cpu className="text-accent" size={16} /><span>service + timeline + customization</span></div>
                    <div className="h-px bg-white/10" />
                    <motion.div animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }} transition={{ duration: 3.2, repeat: Infinity }} className="text-secondary">quote = match(service)</motion.div>
                    <div className="text-primary pl-4">.scope(features, roles, pages)</div>
                    <div className="text-primary pl-4">.timeline(priority)</div>
                    <div className="text-accent pl-4">.customization(level)</div>
                    <div className="h-px bg-white/10" />
                    <div className="text-light/82 flex items-center gap-2"><Timer size={14} className="text-accent" /> realistic range, clear next steps</div>
                    <div className="text-light/82 flex items-center gap-2"><Wrench size={14} className="text-secondary" /> build, launch, and maintain</div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[{ t: 'Build', d: 'sites & apps', c: 'text-primary' }, { t: 'Systems', d: 'software & portals', c: 'text-accent' }, { t: 'Care', d: 'support plans', c: 'text-secondary' }].map((x) => (
                      <motion.div key={x.t} whileHover={reduce ? undefined : { y: -4 }} className="rounded-xl bg-white/[0.03] border border-white/7 p-3 text-center transition-colors duration-300 hover:border-primary/25">
                        <div className={`font-display font-bold ${x.c}`}>{x.t}</div>
                        <div className="text-[11px] text-gray mt-0.5">{x.d}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray/65 animate-bounce-subtle" role="button" tabIndex={0} aria-label="Scroll to explore" onKeyDown={(e) => e.key === 'Enter' && document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <MousePointer className="w-5 h-5" />
          <ChevronDown className="w-4 h-4" />
          <span className="text-xs">Explore</span>
        </motion.div>
      )}
    </section>
  )
}
