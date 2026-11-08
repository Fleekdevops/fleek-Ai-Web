'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, LayoutDashboard, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const solutions = [
  { title: 'Business Websites', icon: Globe, description: 'Credible websites designed to present services clearly and generate inquiries.', points: ['Responsive design', 'Fast loading', 'Contact & lead capture', 'Scoped from KES 18,000'] },
  { title: 'Mobile Apps', icon: Smartphone, description: 'Custom mobile experiences for customers, teams, and business operations.', points: ['Android/iOS scope', 'User-friendly flows', 'Integrations as needed', 'Scoped from KES 120,000'] },
  { title: 'Software & Portals', icon: LayoutDashboard, description: 'Tailored systems that streamline workflows and fit exact requirements.', points: ['Custom workflows', 'Roles & dashboards', 'Data/process design', 'Scoped by complexity'] },
  { title: 'IT Support & Maintenance', icon: Wrench, description: 'Technical care that keeps digital systems stable, updated, and useful.', points: ['Troubleshooting & fixes', 'Updates and improvements', 'Response plans', 'Separate support pricing'] },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading eyebrow="Solutions" words={['Solutions shaped around your goals', 'From simple builds to complex systems', 'Every project scoped on its own terms']} lead="Fleektech handles focused website projects, advanced portals, mobile apps, custom software, and ongoing support—each with pricing that matches the work involved." />
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }} className="card-bg interactive-card rounded-[1.7rem] p-8 border border-white/8">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5"><item.icon className="w-7 h-7 text-white" /></div>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray mb-5 leading-relaxed">{item.description}</p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-gray bg-white/[0.035] rounded-lg px-3 py-2 border border-white/6">{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 motion-sheen">Request a Custom Quote <ArrowRight size={20} /></Link>
        </div>
      </div>
    </section>
  )
}
