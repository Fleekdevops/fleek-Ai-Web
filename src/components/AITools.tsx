'use client'

import { Headphones, Wrench, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const supportServices = [
  {
    icon: Headphones,
    title: 'Tech Support',
    description: 'Responsive help for website, app, software, and system issues when your business needs it.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Routine updates, fixes, and performance checks to keep your digital solutions running smoothly.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: RefreshCw,
    title: 'Upgrades & Improvements',
    description: 'Add features, improve workflows, and modernize existing systems without starting over.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Care',
    description: 'Practical, affordable support plans focused on stability, speed, and business continuity.',
    color: 'from-orange-500 to-amber-500',
  },
]

export default function AITools() {
  return (
    <section id="support" className="py-24 relative w-full">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Support & Maintenance</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            We Don&apos;t Just Build — <span className="gradient-text">We Support</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Fleektech provides dependable IT support and maintenance for websites, apps, software, and portals, so your business keeps moving.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportServices.map((item, index) => (
            <div
              key={item.title}
              className="card-bg rounded-3xl p-6 text-left hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-white/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="card-bg rounded-3xl p-8 text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Need Ongoing IT Support?</h3>
          <p className="text-gray mb-6 max-w-xl mx-auto">
            Get a flexible support and maintenance plan that fits your needs and budget—whether it&apos;s a quick fix or continuous care.
          </p>
          <Link href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
            Request Support
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
