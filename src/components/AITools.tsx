'use client'

import { Headphones, Wrench, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const supportServices = [
  { icon: Headphones, title: 'Tech Support', description: 'Responsive help for websites, apps, software, and system issues when your business needs it.', color: 'from-blue-500 to-cyan-500', pricing: 'From KES 4,500' },
  { icon: Wrench, title: 'Maintenance', description: 'Routine updates, fixes, and checks that keep your digital solutions stable and healthy.', color: 'from-green-500 to-emerald-500', pricing: 'From KES 8,000 / month' },
  { icon: RefreshCw, title: 'Upgrades & Improvements', description: 'Add features, improve workflows, and modernize existing systems without starting over.', color: 'from-purple-500 to-pink-500', pricing: 'Scoped by change size' },
  { icon: ShieldCheck, title: 'Reliable Care', description: 'Practical support plans focused on continuity, response, and long-term performance.', color: 'from-orange-500 to-amber-500', pricing: 'Plan-based pricing' },
]

export default function AITools() {
  return (
    <section id="support" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading
          eyebrow="Support & Maintenance"
          words={['We build it, then help it stay strong', 'Support priced by urgency and system size', 'Ongoing care for websites, apps, and software']}
          lead="Launch is only the start. Fleektech provides IT support and maintenance with pricing based on response needs, system complexity, and the level of care required."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportServices.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }} className="card-bg interactive-card rounded-[1.5rem] p-6 text-left border border-white/7">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}><item.icon className="w-7 h-7 text-white" /></div>
              <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="text-sm font-semibold text-accent">{item.pricing}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-bg interactive-card motion-sheen rounded-[1.7rem] p-8 text-center border border-white/8">
          <h3 className="font-display text-2xl font-bold mb-4">Need ongoing IT support?</h3>
          <p className="text-gray mb-6 max-w-xl mx-auto">Choose a one-off fix, a support plan, or a maintenance retainer. We’ll recommend the right level of care based on your systems and response expectations.</p>
          <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">Request Support <ArrowRight size={20} /></Link>
        </motion.div>
      </div>
    </section>
  )
}
