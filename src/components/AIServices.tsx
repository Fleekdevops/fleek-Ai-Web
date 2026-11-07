'use client'

import { 
  Globe, Smartphone, Code2, LayoutDashboard, Wrench, Headphones,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description: 'Professional, fast, and mobile-friendly websites that help your business stand out and convert visitors into customers.',
    features: ['Business Websites', 'Landing Pages', 'E-commerce', 'SEO-Ready Builds'],
    price: 'From KES 18,000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Custom Android and iOS apps designed for performance, usability, and real business needs.',
    features: ['Android & iOS Apps', 'Business Apps', 'Customer Portals', 'App Support'],
    price: 'Affordable custom pricing',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions that automate workflows and solve your unique operational challenges.',
    features: ['Business Systems', 'Automation Tools', 'Integrations', 'Custom Features'],
    price: 'No matter how custom',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Portals & Web Apps',
    description: 'Secure portals and web applications for customers, staff, schools, and organizations.',
    features: ['Client Portals', 'Admin Dashboards', 'Management Systems', 'Role-Based Access'],
    price: 'Lower price, high value',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Headphones,
    title: 'IT Support & Maintenance',
    description: 'Reliable technical support to keep your systems, websites, and apps running smoothly.',
    features: ['Troubleshooting', 'Updates & Fixes', 'Performance Checks', 'Ongoing Support'],
    price: 'Flexible support plans',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Wrench,
    title: 'System Upgrades & Improvements',
    description: 'Improve existing websites, software, and portals with modern features, better speed, and stronger reliability.',
    features: ['Feature Enhancements', 'Bug Fixes', 'Redesigns', 'Optimization'],
    price: 'Cost-effective upgrades',
    color: 'from-teal-500 to-cyan-500',
  },
]

export default function AIServices() {
  return (
    <section id="services" className="py-24 relative bg-darker/50 w-full">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            Complete <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-gray text-lg max-w-3xl mx-auto">
            Fleektech builds websites, apps, software, and portals—and provides dependable IT support and maintenance. We deliver affordable, custom solutions with a skilled team that gets it done on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-bg rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-white/5 hover:border-primary/20"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-gray">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm text-gray">Pricing</span>
                <span className="text-sm sm:text-base font-bold gradient-text text-right">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card-bg rounded-3xl p-6 sm:p-8 border border-primary/15 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Affordable Excellence for Any Custom Project</h3>
              <p className="text-gray max-w-2xl">
                Whether you need a simple website, a complex portal, or a fully custom app or software system, Fleektech delivers quality work at a lower price—without compromising reliability.
              </p>
            </div>
            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 shrink-0"
            >
              Discuss Your Project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
