'use client'

import Link from 'next/link'
import { Globe, Smartphone, Code2, LayoutDashboard, Wrench, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/motion/Reveal'

const capabilities = [
  { name: 'Websites & Business Portals', detail: 'Clear structure, fast performance, and easy management' },
  { name: 'Mobile Apps & Custom Software', detail: 'Built around your workflow, users, and growth plans' },
  { name: 'IT Support & Maintenance', detail: 'Reliable care that keeps systems stable after launch' },
  { name: 'Scoped, Service-Specific Pricing', detail: 'Time and customization considered for each service' },
]

const strengths = [
  { icon: Globe, title: 'Websites', desc: 'Professional sites that build trust and generate leads.' },
  { icon: Smartphone, title: 'Apps', desc: 'Mobile experiences for customers and operations.' },
  { icon: Code2, title: 'Software', desc: 'Custom systems that automate and connect work.' },
  { icon: LayoutDashboard, title: 'Portals', desc: 'Dashboards and secure access for teams and clients.' },
  { icon: Headphones, title: 'Support', desc: 'Responsive help when technical issues appear.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Updates, fixes, and improvements over time.' },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 relative w-full">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionHeading align="left" className="mb-8" eyebrow="Why Fleektech" words={['Practical IT delivery, done with care', 'Built to match your scope and timeline', 'Technology that stays useful after launch']} lead="We listen, scope clearly, build what fits, and support it after launch. Custom work is priced by the service and complexity involved—not by a one-size-fits-all template." />
            <div className="space-y-4 mb-8">
              {capabilities.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 p-4 card-bg interactive-card rounded-xl border border-white/6">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray">{item.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 motion-sheen">Get a Free Consultation <ArrowRight size={20} /></Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card-bg interactive-card rounded-[1.7rem] p-8 border border-white/8">
              <h3 className="font-display text-xl font-bold mb-6">What We Deliver</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {strengths.map((item, i) => (
                  <motion.div key={item.title} whileHover={{ y: -6, scale: 1.01 }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="p-4 bg-white/[0.03] rounded-xl hover:bg-white/[0.055] transition-colors border border-white/6">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3"><item.icon className="w-5 h-5 text-white" /></div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-xs text-gray leading-relaxed">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {[['Skilled', 'Expert Team'], ['Clear', 'Scoped Quotes'], ['Reliable', 'Ongoing Care']].map(([v, l]) => (
                  <div key={v} className="text-center"><div className="text-xl font-black font-display gradient-text mb-1">{v}</div><div className="text-xs text-gray">{l}</div></div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
