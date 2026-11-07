'use client'

import Link from 'next/link'
import { Globe, Smartphone, Code2, LayoutDashboard, Wrench, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'

const capabilities = [
  { name: 'Websites & Business Portals', detail: 'Fast, professional, and easy to manage' },
  { name: 'Mobile Apps & Custom Software', detail: 'Built around your exact workflow' },
  { name: 'IT Support & Maintenance', detail: 'Reliable help to keep systems running' },
  { name: 'Affordable Custom Delivery', detail: 'Lower pricing, no matter how custom' },
]

const strengths = [
  { icon: Globe, title: 'Websites', desc: 'Modern sites that build trust and generate leads.' },
  { icon: Smartphone, title: 'Apps', desc: 'Mobile experiences for customers and operations.' },
  { icon: Code2, title: 'Software', desc: 'Custom systems that automate and scale your business.' },
  { icon: LayoutDashboard, title: 'Portals', desc: 'Secure portals and dashboards for teams and clients.' },
  { icon: Headphones, title: 'Tech Support', desc: 'Responsive support when you need it most.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Updates, fixes, and improvements over time.' },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 relative w-full">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Fleektech</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              Practical IT Solutions, <span className="gradient-text">Done Right</span>
            </h2>
            <p className="text-gray text-lg mb-8 leading-relaxed">
              We help businesses build and maintain the technology they need—websites, apps, software, and portals. Our approach is simple: listen carefully, build what you need, deliver on time, and support you after launch. Even highly custom projects are priced affordably.
            </p>

            <div className="space-y-4 mb-8">
              {capabilities.map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-4 card-bg rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Get a Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-bg rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">What We Deliver</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {strengths.map((item) => (
                  <div key={item.title} className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/5">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-xs text-gray leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">Skilled</div>
                  <div className="text-xs text-gray">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">Fast</div>
                  <div className="text-xs text-gray">Time Efficient</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">Fair</div>
                  <div className="text-xs text-gray">Lower Prices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
