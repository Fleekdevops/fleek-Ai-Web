'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter Website',
    price: 'KES 18,000',
    description: 'Best for small businesses that need a professional online presence',
    features: [
      'Modern responsive website',
      'Mobile-friendly design',
      'Basic SEO setup',
      'Contact/WhatsApp integration',
      'Fast turnaround',
      'Post-launch support',
    ],
    popular: false,
  },
  {
    name: 'Business Package',
    price: 'KES 35,000',
    description: 'Ideal for growing businesses that need more features and flexibility',
    features: [
      'Everything in Starter',
      'More pages/sections',
      'Lead capture & forms',
      'Performance optimization',
      'Content guidance',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Custom App / Software',
    price: 'Custom Quote',
    description: 'For portals, apps, software systems, and fully custom requirements',
    features: [
      'Custom websites, apps, software & portals',
      'Tailored features and integrations',
      'Scalable architecture',
      'IT support & maintenance options',
      'Affordable pricing for custom work',
      'Delivered on time—no matter the challenge',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative w-full">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            Affordable <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Clear starting packages for common needs, plus custom quotes for apps, software, portals, and IT support—at a lower price without compromising quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-bg rounded-3xl p-8 relative animate-fade-in hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black gradient-text mb-2">{plan.price}</div>
                {plan.price !== 'Custom Quote' && (
                  <div className="text-gray text-sm">starting price</div>
                )}
                <p className="text-gray mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.price === 'Custom Quote' ? 'Request Custom Quote' : 'Get Started'}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray mb-4">Need IT support, maintenance, or a highly custom solution?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Talk to Fleektech
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
