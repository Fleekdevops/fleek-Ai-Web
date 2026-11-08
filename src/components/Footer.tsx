'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Typewriter from '@/components/Typewriter'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

const techServices = [
  { href: '#services', label: 'Website Development' },
  { href: '#services', label: 'Mobile Apps' },
  { href: '#services', label: 'Custom Software' },
  { href: '#services', label: 'Business Portals' },
  { href: '#support', label: 'IT Support & Maintenance' },
  { href: '#contact', label: 'Get a Quote' },
]

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 border-t border-white/6 w-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center font-display font-black text-darker group-hover:scale-105 transition-transform">F</div>
              <span className="text-2xl font-black font-display gradient-text">Fleektech</span>
            </Link>
            <div className="font-display text-lg font-bold leading-snug mb-4 min-h-[3.2rem]">
              <Typewriter words={['Build smart.', 'Launch clearly.', 'Support reliably.', 'Scale with confidence.']} className="text-light" typingSpeed={55} deletingSpeed={28} />
            </div>
            <p className="text-gray mb-6 leading-relaxed text-sm">Websites, apps, custom software, portals, and IT support—scoped by service, timeline, and customization.</p>
            <div className="flex flex-wrap gap-2.5">
              {[{ I: Facebook, href: 'https://www.facebook.com/profile.php?id=61580949866406', label: 'Facebook' }, { I: Twitter, href: 'https://x.com/inc_fleek', label: 'X' }, { I: Linkedin, href: 'https://www.linkedin.com/in/fleektech-incorporation-961095384', label: 'LinkedIn' }, { I: Instagram, href: 'https://www.instagram.com/fleektechinc/', label: 'Instagram' }].map(({ I, href, label }) => (
                <motion.a key={label} whileHover={{ y: -3 }} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center hover:bg-primary hover:text-darker hover:border-primary transition-colors" aria-label={label}>
                  <I size={17} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-gray hover:text-accent transition-colors inline-flex items-center gap-1 group">{link.label}<ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {techServices.map((service) => (
                <li key={service.label}><Link href={service.href} className="text-gray hover:text-accent transition-colors">{service.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-gray">Moi Avenue, Stanbank Building, 3rd Floor, Room 10<br />Nairobi, Kenya</span></li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary shrink-0" /><a href="tel:+254758175057" className="text-gray hover:text-accent transition-colors">+254 758 175 057</a></li>
              <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div className="space-y-1"><a href="mailto:fleektechinc@gmail.com" className="block text-gray hover:text-accent transition-colors">fleektechinc@gmail.com</a><a href="mailto:FleekTechInc@proton.me" className="block text-gray hover:text-accent transition-colors">FleekTechInc@proton.me</a></div></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray">© {new Date().getFullYear()} Fleektech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-gray hover:text-accent transition-colors">Privacy</Link>
            <Link href="#" className="text-gray hover:text-accent transition-colors">Terms</Link>
            <Link href="#" className="text-gray hover:text-accent transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
