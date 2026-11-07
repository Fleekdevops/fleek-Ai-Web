'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Cpu, Zap, ChevronDown, MousePointer, Wrench, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: 'Fast', label: 'On-Time Delivery' },
  { number: 'Custom', label: 'Tailored Solutions' },
  { number: '24/7', label: 'Support Mindset' },
]

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold text-sm">Your Complete IT Partner in Nairobi</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                Websites, Apps & Software
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                Built for Your Business
              </h1>

              <p className="text-xl text-gray max-w-2xl mb-8 leading-relaxed">
                Fleektech builds custom websites, mobile apps, software, and business portals—plus reliable IT support and maintenance. We deliver affordable, high-quality solutions on time, no matter how custom your project is.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Tech Support & Maintenance', 'Affordable Pricing', 'Skilled Team', 'Custom-Built Solutions'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-light/90">
                    <ShieldCheck size={15} className="text-accent" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#contact"
                  className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
                >
                  Get a Free Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
                >
                  View Services
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20 transform rotate-6" />
                <div className="relative card-bg rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray text-sm ml-2">fleektech-solution.ts</span>
                  </div>
                  
                      <div className="space-y-4 font-mono text-sm">
                        <div className="flex items-center gap-2">
                          <Cpu className="text-accent" size={20} />
                          <span className="text-gray">{'// Custom solution for your business'}</span>
                        </div>
                        <div className="h-px bg-white/10" />
                        <div className="text-green-400">{'const project = new FleektechBuild()'}</div>
                        <div className="text-primary pl-4">{'.websiteOrApp()'}</div>
                        <div className="text-primary pl-4">{'.customSoftware()'}</div>
                        <div className="text-primary pl-4">{'.portalIntegration()'}</div>
                        <div className="text-primary pl-4">{'.supportAndMaintenance()'}</div>
                        <div className="text-accent pl-4">{'.deliverOnTime();'}</div>
                        <div className="h-px bg-white/10" />
                        <div className="text-green-400">{'// Affordable • Skilled • Reliable'}</div>
                        <div className="text-secondary flex items-center gap-2"><Wrench size={14} />{' Ready for any challenge'}</div>
                      </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="text-accent" size={16} />
                      <span className="text-sm font-semibold text-accent">What We Build</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="text-xs">
                        <div className="text-primary font-bold">Websites</div>
                        <div className="text-gray">& Portals</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-accent font-bold">Apps</div>
                        <div className="text-gray">& Software</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-secondary font-bold">IT Support</div>
                        <div className="text-gray">& Maintenance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="container">
            <p className="text-gray text-sm text-center mb-6">Trusted for practical, business-ready technology solutions</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-70">
              {['Websites', 'Mobile Apps', 'Custom Software', 'Business Portals', 'IT Support', 'Maintenance'].map((item) => (
                <span key={item} className="text-sm sm:text-base font-semibold text-gray hover:text-light transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray/60 animate-bounce-subtle"
          role="button"
          tabIndex={0}
          aria-label="Scroll to explore"
          onKeyDown={(e) => e.key === 'Enter' && document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <MousePointer className="w-6 h-6" />
          <ChevronDown className="w-5 h-5" />
          <span className="text-xs font-medium">Explore</span>
        </motion.div>
      )}
    </section>
  )
}
