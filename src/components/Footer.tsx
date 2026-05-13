'use client'

import Link from 'next/link'
import { Bot, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const RedditIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
    <path d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.09 9.09A3 3 0 0 0 7.73 10.56a4.47 4.47 0 0 0-.28 1.3l-.01.02c-.26.73-.25 1.53.13 2.2.4.67 1.19 1.08 2.07 1.08h.01c1.16-.01 2.1-.75 2.44-1.79l.01-.01a3.75 3.75 0 0 0 .33-1.19 3.75 3.75 0 0 0-1.07-3.25zM20.71 5.29a2 2 0 0 0-2.83-.01l-.84.84a4.47 4.47 0 0 0-1.3.28l-.02.01c-.73.26-1.53.25-2.2-.13a6.96 6.96 0 0 1-1.08-2.07V5a2 2 0 0 0-2-2h-.01c-.01 1.16-.75 2.1-1.79 2.44l-.01.01a3.75 3.75 0 0 0-1.19.33 3.75 3.75 0 0 0-3.25-1.07zM10.56 14.91a3 3 0 0 0 1.44-2.37 4.47 4.47 0 0 0 .28-1.3l.02-.01c.73-.26 1.53-.25 2.2.13a6.96 6.96 0 0 1 2.07 1.08v.01c-.01 1.16.75 2.1 1.79 2.44l.01-.01a3.75 3.75 0 0 0 1.19-.33 3.75 3.75 0 0 0 3.25 1.07zM5.29 20.71a2 2 0 0 0 .01 2.83l.84.84a4.47 4.47 0 0 0 1.3-.28l.01-.02c.26-.73.25-1.53-.13-2.2a6.96 6.96 0 0 1 1.08 2.07v.01c0 1.16.75 2.1 1.79 2.44l.01.01a3.75 3.75 0 0 0 1.19-.33 3.75 3.75 0 0 0 3.25 1.07z"/>
  </svg>
)

const GlobeIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12a8 8 0 0 0 8-8v8zM12 4a8 8 0 0 1 8 8h-8z"/>
  </svg>
)

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#tools', label: 'AI Tools' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact Us' },
]

const aiServices = [
  { href: '#', label: 'AI Chatbots' },
  { href: '#', label: 'Machine Learning' },
  { href: '#', label: 'Process Automation' },
  { href: '#', label: 'AI Analytics' },
  { href: '#', label: 'Computer Vision' },
]

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black gradient-text">FleekTech AI Solutions</span>
            </Link>
            <p className="text-gray mb-6 leading-relaxed">
              The Best AI Company in Africa. Located in Nairobi, Kenya. We have the finest team of AI experts, state-of-the-art research lab, and premium AI services to transform your business.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href={[
                    "https://www.facebook.com/profile.php?id=61580949866406",
                    "https://x.com/inc_fleek",
                    "www.linkedin.com/in/fleektech-incorporation-961095384",
                    "https://www.instagram.com/fleektechinc/"
                  ][index]}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
              {/* Additional social media links */}
              <a href="https://www.reddit.com/user/According-Use-9007/" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <RedditIcon />
              </a>
              <a href="https://www.tiktok.com/@fleektechinc" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <TikTokIcon />
              </a>
              <a href="https://fleektech.co.ke" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <GlobeIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">AI Services</h4>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-gray hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray">Nairobi, Kenya</span>
                </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:FleekTechInc@proton.me" className="text-gray hover:text-accent transition-colors text-xs">
                    FleekTechInc@proton.me
                  </a>
                  <a href="mailto:Fleektechinc@gmail.com" className="text-gray hover:text-accent transition-colors text-xs">
                    Fleektechinc@gmail.com
                  </a>
                  <a href="mailto:Fleektechinc@outlook.com" className="text-gray hover:text-accent transition-colors text-xs">
                    Fleektechinc@outlook.com
                  </a>
                </div>
              </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div className="space-y-2">
                    <a href="mailto:FleekTechInc@proton.me" className="text-gray hover:text-accent transition-colors">
                      FleekTechInc@proton.me
                    </a>
                    <a href="mailto:Fleektechinc@gmail.com" className="text-gray hover:text-accent transition-colors">
                      Fleektechinc@gmail.com
                    </a>
                    <a href="mailto:Fleektechinc@outlook.com" className="text-gray hover:text-accent transition-colors">
                      Fleektechinc@outlook.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray text-sm">
                © {new Date().getFullYear()} FleekTech AI Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray hover:text-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
