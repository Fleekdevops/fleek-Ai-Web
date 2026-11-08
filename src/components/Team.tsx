'use client'

import { Mail, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

const teamMembers = [
  {
    name: 'Nelson Maina',
    role: 'Chief Executive Officer (CEO)',
    bio: 'Leads Fleektech with a client-first vision—clear communication, dependable delivery, and practical solutions.',
    image: 'https://i.ibb.co/nq7jr7hn/gody.jpg',
    linkedin: '#',
    email: 'fleektechinc@gmail.com',
  },
  {
    name: 'Carlos Koilai',
    role: 'CTO & Lead Software Engineer',
    bio: 'Architects websites, apps, software, and portals with secure, scalable systems tailored to each scope.',
    image: 'https://i.ibb.co/TMHswFdF/Whats-App-Image-2026-04-13-at-16-38-29.jpg',
    linkedin: 'https://linkedin.com/in/carlos-koilai',
    email: 'FleekTechInc@proton.me',
  },
  {
    name: 'James Odhiambo',
    role: 'Managing Director (MD)',
    bio: 'Oversees delivery and operations so projects land clearly, with support and maintenance that lasts.',
    image: 'https://i.ibb.co/dXPtBZ7/PHOTO-2026-04-11-08-18-18.jpg',
    linkedin: '#',
    email: 'Fleektechinc@outlook.com',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 relative w-full">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership"
          words={['The people behind Fleektech', 'Focused leadership, skilled delivery', 'A team built for reliable execution']}
          lead="A small, accountable team delivering custom IT solutions with clear scope, practical pricing, and ongoing support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group card-bg interactive-card motion-sheen rounded-[1.7rem] p-7 border border-white/8 text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="team-avatar-ring">
                  <motion.div
                    whileHover={{ scale: 1.045, rotate: 1.5 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="relative h-[8.5rem] w-[8.5rem] sm:h-[9rem] sm:w-[9rem] rounded-full overflow-hidden bg-dark ring-4 ring-darker/70"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darker/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold">{member.name}</h3>
              <p className="text-accent text-sm font-semibold mt-1">{member.role}</p>
              <p className="text-gray text-sm mt-4 leading-relaxed">{member.bio}</p>

              <div className="flex items-center justify-center gap-2.5 mt-6">
                {member.email && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/8 flex items-center justify-center hover:bg-primary hover:text-darker hover:border-primary transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                  </motion.a>
                )}
                {member.linkedin && member.linkedin !== '#' && (
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/8 flex items-center justify-center hover:bg-secondary hover:text-darker hover:border-secondary transition-colors duration-300"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
