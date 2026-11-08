'use client'

import Image from 'next/image'
import { ArrowRight, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SectionHeading from '@/components/SectionHeading'

const blogPosts = [
  { title: 'Why every Nairobi business needs a professional website', excerpt: 'A clear, credible website helps customers trust your business, find your services, and contact you quickly.', category: 'Web Development', date: 'Jan 15, 2025', author: 'Nelson Maina', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', slug: 'professional-website-nairobi-business' },
  { title: 'Custom software vs off-the-shelf tools: what fits your business?', excerpt: 'Learn when a tailored system can save time, reduce manual work, and support your unique workflow.', category: 'Custom Software', date: 'Jan 10, 2025', author: 'Carlos Koilai', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80', slug: 'custom-software-vs-off-the-shelf' },
  { title: 'The value of IT support and maintenance after launch', excerpt: 'Ongoing support keeps your website, app, or system secure, updated, and reliable as your business grows.', category: 'IT Support', date: 'Jan 5, 2025', author: 'James Odhiambo', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', slug: 'it-support-and-maintenance-value' },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading eyebrow="Insights" words={['Practical tech insights for growing teams', 'Ideas on websites, systems, and support', 'Guidance before you build or upgrade']} lead="Helpful articles on websites, apps, software, and IT support for businesses planning their next step." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -8 }} className="group card-bg interactive-card rounded-[1.7rem] overflow-hidden border border-white/7">
              <div className="relative h-52 overflow-hidden">
                <Image src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={600} height={400} />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/85 via-darker/10 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-darker text-xs font-bold">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray mb-3">
                  <span className="flex items-center gap-1"><Clock size={14} />{post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} />{post.author}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray text-sm mb-5 line-clamp-3">{post.excerpt}</p>
                <button type="button" onClick={() => toast('Full article pages are coming soon.')} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">Read More <ArrowRight size={16} /></button>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-12">
          <button type="button" onClick={() => toast('More articles are coming soon.')} className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">View All Posts <ArrowRight size={20} /></button>
        </div>
      </div>
    </section>
  )
}
