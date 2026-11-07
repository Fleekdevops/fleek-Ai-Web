'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, LayoutDashboard, Wrench } from 'lucide-react'

const solutions = [
  {
    title: 'Business Websites',
    icon: Globe,
    description: 'Professional websites designed to build trust, showcase services, and generate inquiries.',
    points: ['Mobile-friendly design', 'Fast loading pages', 'Contact & WhatsApp integration', 'Affordable packages'],
  },
  {
    title: 'Mobile Apps',
    icon: Smartphone,
    description: 'Custom mobile app solutions for customer engagement, operations, and business growth.',
    points: ['Android/iOS solutions', 'User-friendly interfaces', 'Custom features', 'Post-launch support'],
  },
  {
    title: 'Software & Portals',
    icon: LayoutDashboard,
    description: 'Tailored systems and portals that streamline workflows and fit your exact requirements.',
    points: ['Custom workflows', 'Admin dashboards', 'Secure access roles', 'Scalable architecture'],
  },
  {
    title: 'IT Support & Maintenance',
    icon: Wrench,
    description: 'Reliable technical support to keep your digital systems stable, secure, and up to date.',
    points: ['Troubleshooting & fixes', 'Updates and improvements', 'Performance checks', 'Ongoing maintenance'],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative bg-darker/50 w-full">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Solutions</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            Built Around <span className="gradient-text">Your Needs</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            From simple websites to fully custom software and portals, Fleektech delivers practical solutions at a lower price—with support you can count on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className="card-bg rounded-3xl p-8 border border-white/10 hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray mb-5 leading-relaxed">{item.description}</p>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-gray bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            Request a Custom Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
