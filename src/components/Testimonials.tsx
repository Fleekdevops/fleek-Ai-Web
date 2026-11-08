'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const testimonials = [
  { name: 'Business Client', role: 'Operations Manager', company: 'Nairobi SME', image: 'https://randomuser.me/api/portraits/men/45.jpg', content: 'Fleektech delivered exactly what we needed—a clean website and reliable support after launch. The team was fast, clear, and practical about scope.', rating: 5 },
  { name: 'Project Partner', role: 'Founder', company: 'Startup Client', image: 'https://randomuser.me/api/portraits/women/44.jpg', content: 'We needed a custom system with specific features, and Fleektech scoped it properly. Communication was clear and delivery stayed on track.', rating: 5 },
  { name: 'Organization Lead', role: 'Administrator', company: 'Service Organization', image: 'https://randomuser.me/api/portraits/men/32.jpg', content: 'Their IT support and maintenance has been dependable. When we need updates or fixes, Fleektech responds quickly and gets it done.', rating: 5 },
  { name: 'Returning Client', role: 'Business Owner', company: 'Local Enterprise', image: 'https://randomuser.me/api/portraits/women/33.jpg', content: 'From website improvements to custom features, Fleektech has been a reliable tech partner. The recommendations always match the real need.', rating: 5 },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  return (
    <section className="py-24 relative w-full">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" words={['What clients value in the work', 'Clear scope, reliable delivery, ongoing support', 'Feedback from businesses we’ve helped']} lead="Clients come to Fleektech for practical solutions, clear communication, and support that continues after launch." />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="card-bg interactive-card rounded-[1.7rem] p-7 sm:p-8 border border-white/8 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div key={current.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                <div className="flex gap-1 mb-4">{[...Array(current.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}</div>
                <Quote className="w-9 h-9 text-primary/35 mb-4" />
                <p className="text-light/90 text-lg leading-relaxed mb-8">&ldquo;{current.content}&rdquo;</p>
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <Image src={current.image} alt={current.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/40" width={56} height={56} />
                  <div>
                    <div className="font-bold">{current.name}</div>
                    <div className="text-sm text-gray">{current.role}, <span className="text-primary">{current.company}</span></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.button key={testimonial.name} type="button" onClick={() => setCurrentIndex(index)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} whileHover={{ y: -5 }} className={`text-left card-bg rounded-2xl p-5 border transition-all ${currentIndex === index ? 'border-primary/40 shadow-glow' : 'border-white/7 hover:border-white/14'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <Image src={testimonial.image} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover" width={44} height={44} />
                  <div><div className="font-semibold text-sm">{testimonial.name}</div><div className="text-xs text-gray">{testimonial.company}</div></div>
                </div>
                <p className="text-sm text-gray leading-relaxed line-clamp-3">&ldquo;{testimonial.content}&rdquo;</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
