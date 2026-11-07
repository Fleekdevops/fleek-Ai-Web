'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Business Client',
    role: 'Operations Manager',
    company: 'Nairobi SME',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    content: 'Fleektech delivered exactly what we needed—a clean website and reliable support after launch. The team was fast, professional, and very affordable.',
    rating: 5,
  },
  {
    name: 'Project Partner',
    role: 'Founder',
    company: 'Startup Client',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'We needed a custom system with specific features, and Fleektech made it happen without overcomplicating the process. Great communication and on-time delivery.',
    rating: 5,
  },
  {
    name: 'Organization Lead',
    role: 'Administrator',
    company: 'Service Organization',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Their IT support and maintenance has been dependable. Whenever we need updates or fixes, Fleektech responds quickly and gets it done.',
    rating: 5,
  },
  {
    name: 'Returning Client',
    role: 'Business Owner',
    company: 'Local Enterprise',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    content: 'From website improvements to custom features, Fleektech has been a reliable tech partner. Quality work at a fair price.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  return (
    <section className="py-24 relative bg-darker/50 w-full">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Businesses choose Fleektech for affordable, skilled, and dependable IT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onClick={() => setCurrentIndex(index)}
              className={`card-bg rounded-3xl p-8 cursor-pointer hover:bg-white/5 transition-all animate-fade-in ${
                currentIndex === index ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-gray mb-6 leading-relaxed line-clamp-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  width={56}
                  height={56}
                />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray">
                      {testimonial.role}, <span className="text-primary">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
