'use client'

import type { CSSProperties } from 'react'
import { Globe, Smartphone, Code2, LayoutDashboard, Wrench, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const services = [
  { icon: Globe, title: 'Website Design & Development', description: 'Fast, credible websites that help your business get found, earn trust, and convert visitors.', features: ['Business websites', 'Landing pages', 'E-commerce', 'SEO-ready builds'], pricing: 'From KES 18,000', note: 'Scoped by pages, content, and features', color: 'from-blue-500 to-cyan-500' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Android and iOS apps designed around real workflows, performance, and maintainability.', features: ['Android & iOS', 'Customer or internal apps', 'API integrations', 'Launch support'], pricing: 'From KES 120,000', note: 'Scoped by platform, features, and integrations', color: 'from-orange-500 to-amber-500' },
  { icon: Code2, title: 'Custom Software Development', description: 'Tailor-made systems that automate operations, connect tools, and fit how your team works.', features: ['Business systems', 'Automation', 'Integrations', 'Custom reporting'], pricing: 'From KES 85,000', note: 'Scoped by workflow complexity and customization', color: 'from-purple-500 to-pink-500' },
  { icon: LayoutDashboard, title: 'Business Portals & Web Apps', description: 'Secure portals and dashboards for customers, staff, schools, and organizations.', features: ['Client portals', 'Admin dashboards', 'Role-based access', 'Data workflows'], pricing: 'From KES 55,000', note: 'Scoped by roles, data, and process depth', color: 'from-green-500 to-emerald-500' },
  { icon: Headphones, title: 'IT Support & Helpdesk', description: 'Responsive technical support for websites, apps, software, devices, and day-to-day issues.', features: ['Troubleshooting', 'Fixes and guidance', 'Performance checks', 'Flexible support plans'], pricing: 'From KES 4,500', note: 'Per request or support plan, based on urgency', color: 'from-indigo-500 to-violet-500' },
  { icon: Wrench, title: 'Maintenance & System Care', description: 'Updates, improvements, and ongoing care so your digital systems stay stable after launch.', features: ['Updates & fixes', 'Feature improvements', 'Monitoring as scoped', 'Optimization'], pricing: 'From KES 8,000 / month', note: 'Scoped by system size and care plan', color: 'from-teal-500 to-cyan-500' },
]

export default function AIServices() {
  return (
    <section id="services" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          words={['Services built for real business needs', 'Different solutions, different pricing drivers', 'Web, apps, software, portals, and IT care']}
          lead="Fleektech delivers the service that fits the problem. Each offer is scoped by timeline and customization—so a website is not priced like an app, portal, or support retainer."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group card-bg interactive-card motion-sheen rounded-[1.7rem] p-7 border border-white/7"
              style={{ '--i': index } as CSSProperties}
            >
              <div className={`w-15 h-15 w-[3.75rem] h-[3.75rem] rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-black/25`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray mb-5 leading-relaxed">{service.description}</p>

              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray">
                    <CheckCircle2 size={16} className="text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-end justify-between gap-3">
                  <span className="text-xs uppercase tracking-wide text-gray">Pricing</span>
                  <span className="font-display text-base sm:text-lg font-bold gradient-text text-right">{service.pricing}</span>
                </div>
                <p className="text-xs text-gray mt-1.5 text-right">{service.note}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 card-bg interactive-card rounded-[1.7rem] p-6 sm:p-8 border border-primary/15">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">Custom work, scoped fairly</h3>
              <p className="text-gray max-w-2xl">Simple websites, complex portals, mobile apps, custom software, and ongoing support all have different delivery requirements. Share your goal and timeline—we’ll scope it clearly.</p>
            </div>
            <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 shrink-0 motion-sheen">Discuss Your Project <ArrowRight size={20} /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
