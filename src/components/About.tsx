'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Code2, Clock3, BadgeDollarSign, Headphones, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import Reveal from '@/components/motion/Reveal'

const features = [
  { icon: BadgeDollarSign, title: 'Fair, Scoped Pricing', desc: 'Quotes reflect the service, timeline, and customization involved.' },
  { icon: Clock3, title: 'Time-Aware Delivery', desc: 'Clear planning and efficient execution for the scope you need.' },
  { icon: Sparkles, title: 'Client-First Thinking', desc: 'Solutions shaped around goals, constraints, and real users.' },
  { icon: Code2, title: 'Custom Builds', desc: 'Websites, apps, software, and portals tailored to your workflow.' },
  { icon: Headphones, title: 'Support & Maintenance', desc: 'Reliable help to keep systems useful after launch.' },
  { icon: ShieldCheck, title: 'Quality & Reliability', desc: 'Professional delivery with practical, business-ready results.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative w-full overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <motion.div whileHover={{ scale: 1.01 }} className="relative">
              <div className="absolute inset-0 gradient-bg rounded-[1.8rem] blur-2xl opacity-20" />
              <div className="relative card-bg interactive-card rounded-[1.8rem] overflow-hidden border border-white/10">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="Fleektech team collaboration" className="w-full h-[26rem] object-cover" width={900} height={416} />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/15 to-transparent" />
                <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/10">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shrink-0"><Code2 className="w-7 h-7 text-white" /></div>
                    <div>
                      <div className="font-bold text-lg">Your complete IT partner</div>
                      <div className="text-gray text-sm">Moi Avenue, Stanbank Building, Nairobi</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute -top-4 -right-2 sm:-right-4 card-bg rounded-2xl p-4 border border-white/10 shadow-glow">
                <div className="text-center"><div className="text-xl font-black font-display gradient-text">Custom</div><div className="text-xs text-gray">Any Scope</div></div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6.2, repeat: Infinity }} className="absolute -bottom-4 -left-2 sm:-left-4 card-bg rounded-2xl p-4 border border-white/10">
                <div className="text-center"><div className="text-xl font-black font-display gradient-text">Scoped</div><div className="text-xs text-gray">Fair Quotes</div></div>
              </motion.div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.06} className="order-1 lg:order-2">
            <SectionHeading align="left" className="mb-6" eyebrow="About Fleektech" words={['Technology that works for your business', 'A Nairobi team built for practical delivery', 'Custom solutions with ongoing support']} />
            <p className="text-gray text-lg mb-5 leading-relaxed">Fleektech is a Nairobi-based IT solutions company helping businesses launch, improve, and maintain the technology they rely on—from our office at <span className="text-light font-medium">Moi Avenue, Stanbank Building, 3rd Floor, Room 10</span>.</p>
            <p className="text-gray text-lg mb-8 leading-relaxed">We build websites, mobile apps, custom software, and portals, and provide IT support and maintenance. Pricing depends on the service, timeline, and level of customization, so each project gets a fair, relevant estimate.</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} whileHover={{ y: -4 }} className="flex items-start gap-3 p-4 card-bg interactive-card rounded-xl border border-white/6">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0"><feature.icon className="w-5 h-5 text-white" /></div>
                  <div><h4 className="font-bold text-sm mb-1">{feature.title}</h4><p className="text-xs text-gray leading-relaxed">{feature.desc}</p></div>
                </motion.div>
              ))}
            </div>
            <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 motion-sheen">Work With Fleektech <ArrowRight size={20} /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
