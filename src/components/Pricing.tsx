'use client'

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Clock3, Layers, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { pricingPlans, customServiceRanges } from '@/lib/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          words={['Pricing shaped by service and scope', 'Websites, apps, software priced differently', 'Time and customization set the range']}
          lead="Every service has different delivery drivers. Websites are not priced like portals, mobile apps, custom software, or support—your quote reflects scope, timeline, and customization."
        />

        <div className="grid lg:grid-cols-3 gap-7">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.key}
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`card-bg interactive-card motion-sheen rounded-[1.7rem] p-7 relative border ${plan.featured ? 'border-primary/35 shadow-glow lg:-translate-y-2' : 'border-white/8'}`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-darker text-xs font-bold inline-flex items-center gap-1 animate-pulse-glow">
                  <Sparkles size={12} /> Most requested
                </div>
              )}

              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <div className="font-display text-3xl font-extrabold gradient-text mt-3">{plan.from}</div>
              <div className="text-sm text-accent/90 mt-1 inline-flex items-center gap-1.5"><Clock3 size={14} />{plan.timeline}</div>
              <p className="text-gray mt-4 leading-relaxed">{plan.description}</p>

              <div className="mt-5 rounded-2xl bg-white/[0.03] border border-white/7 p-4">
                <div className="text-sm font-semibold flex items-center gap-2 mb-2"><Layers size={15} className="text-primary" /> What changes the price</div>
                <ul className="space-y-1.5">
                  {plan.factors.map((f) => (
                    <li key={f} className="text-sm text-gray">• {f}</li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-3 mt-5 mb-7">
                {plan.deliverables.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-light/88">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={`w-full py-3.5 rounded-xl font-bold text-center block ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                Request a scoped quote
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid sm:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {customServiceRanges.map((item, i) => (
            <div key={item.name} className="card-bg interactive-card rounded-2xl p-5 border border-white/7" style={{ '--d': `${i * 0.05}s` } as CSSProperties}>
              <div className="text-sm text-accent font-semibold">{item.range}</div>
              <h3 className="font-display text-lg font-bold mt-1">{item.name}</h3>
              <p className="text-sm text-gray mt-2 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 card-bg interactive-card rounded-2xl p-5 sm:p-6 border border-white/7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-gray"><span className="text-light font-semibold">No copy-paste pricing.</span> A website, app, portal, custom software, and support plan are estimated using different scope, timeline, and customization factors.</p>
          <Link href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors shrink-0">
            Get the right quote <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
