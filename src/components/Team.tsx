'use client'

import { Mail, Linkedin } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Nelson Maina',
    role: 'Chief Executive Officer (CEO)',
    bio: 'Leads Fleektech with a client-first vision—delivering affordable, high-quality digital solutions and dependable partnerships for businesses across Kenya and beyond.',
    image: 'https://i.ibb.co/nq7jr7hn/gody.jpg',
    linkedin: '#',
    email: 'nelson@fleektech.co.ke',
  },
  {
    name: 'Carlos Koilai',
    role: 'CTO & Lead Software Engineer',
    bio: 'Drives technical excellence across web, mobile, portals, and custom software—building secure, scalable systems tailored to each client’s needs.',
    image: 'https://i.ibb.co/TMHswFdF/Whats-App-Image-2026-04-13-at-16-38-29.jpg',
    linkedin: 'https://linkedin.com/in/carlos-koilai',
    email: 'carlos@fleektech.co.ke',
  },
  {
    name: 'James Odhiambo',
    role: 'Managing Director (MD)',
    bio: 'Oversees operations and delivery, ensuring projects are completed efficiently, on time, and aligned with business goals—no matter how custom the requirements.',
    image: 'https://i.ibb.co/dXPtBZ7/PHOTO-2026-04-11-08-18-18.jpg',
    linkedin: '#',
    email: 'james@fleektech.co.ke',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 relative bg-darker/50 w-full">
      <div className="container">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
            Meet the <span className="gradient-text">Fleektech Team</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            A focused leadership team committed to affordable excellence, fast delivery, and solutions built around your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="card-bg rounded-3xl overflow-hidden card-hover group hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                 <Image
                   src={member.image}
                   alt={member.name}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   width={400}
                   height={256}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <span className="text-accent text-sm font-semibold">{member.role}</span>
                <p className="text-gray text-sm mt-3 mb-4 line-clamp-2">{member.bio}</p>

                <div className="flex items-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
