'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    title: 'Why Every Nairobi Business Needs a Professional Website',
    excerpt: 'A clear, credible website helps customers trust your business, find your services, and contact you quickly.',
    category: 'Web Development',
    date: 'Jan 15, 2025',
    author: 'Nelson Maina',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    slug: 'professional-website-nairobi-business',
  },
  {
    title: 'Custom Software vs Off-the-Shelf Tools: What Fits Your Business?',
    excerpt: 'Learn when a tailored system can save time, reduce manual work, and support your unique workflow.',
    category: 'Custom Software',
    date: 'Jan 10, 2025',
    author: 'Carlos Koilai',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    slug: 'custom-software-vs-off-the-shelf',
  },
  {
    title: 'The Value of IT Support and Maintenance After Launch',
    excerpt: 'Ongoing support keeps your website, app, or system secure, updated, and reliable as your business grows.',
    category: 'IT Support',
    date: 'Jan 5, 2025',
    author: 'James Odhiambo',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    slug: 'it-support-and-maintenance-value',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative w-full">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Insights</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Practical <span className="gradient-text">Tech Insights</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Helpful articles on websites, apps, software, and IT support for growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group card-bg rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <button
                  onClick={() => alert('Blog page coming soon!')}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                >
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => alert('More blog posts coming soon!')}
            className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
