'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Code2, Clock3, BadgeDollarSign, Headphones, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react'

const features = [
  { icon: BadgeDollarSign, title: 'Affordable Excellence', desc: 'High-quality, skillfully curated services at efficient prices.' },
  { icon: Clock3, title: 'Time Efficiency', desc: 'We respect your time and deliver on schedule, every time.' },
  { icon: Sparkles, title: 'Client-First Commitment', desc: 'Whatever your business needs, we find a way—no challenge too big.' },
  { icon: Code2, title: 'Custom Solutions', desc: 'Websites, apps, software, and portals tailored to your workflow.' },
  { icon: Headphones, title: 'Tech Support & Maintenance', desc: 'Reliable support to keep your systems running smoothly.' },
  { icon: ShieldCheck, title: 'Quality & Reliability', desc: 'Professional delivery with practical, business-ready results.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative w-full">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20" />
              <div className="relative card-bg rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                  alt="Fleektech team collaboration"
                  className="w-full h-96 object-cover"
                  width={900}
                  height={384}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Your Complete IT Partner</div>
                      <div className="text-gray text-sm">Moi Avenue, Stanbank Building, Nairobi</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 card-bg rounded-2xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text">Custom</div>
                  <div className="text-xs text-gray">Any Project Size</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 card-bg rounded-2xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-black gradient-text">Lower</div>
                  <div className="text-xs text-gray">Affordable Pricing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 lg:order-2">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Fleektech</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              Technology That <span className="gradient-text">Works for You</span>
            </h2>
            <p className="text-gray text-lg mb-6 leading-relaxed">
              Fleektech is a Nairobi-based IT solutions company dedicated to helping businesses grow through technology. From our office at <span className="text-light font-medium">Moi Avenue, Stanbank Building, 3rd Floor, Room 10</span>, we serve startups, SMEs, and established organizations.
            </p>
            <p className="text-gray text-lg mb-8 leading-relaxed">
              We build websites, mobile apps, custom software, and business portals, and we provide comprehensive IT support and maintenance. No matter how custom your project is, our skilled team focuses on affordable excellence, fast delivery, and solutions that fit what you actually need.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 card-bg rounded-xl hover:bg-white/5 transition-colors border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Work With Fleektech
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
