'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
      const sections = ['home', 'services', 'about', 'pricing', 'team', 'contact']
      const pos = window.scrollY + 120
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = saved ? saved === 'dark' : prefersDark
    setIsDarkMode(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  const toggleDarkMode = () => {
    const next = !isDarkMode
    setIsDarkMode(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
  }

  const scrollToSection = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2.5' : 'py-4'}`}>
      <motion.div className="absolute top-0 left-0 h-[2px] gradient-bg origin-left z-[60]" style={{ scaleX: reduce ? 0 : progress }} />
      <div className="container">
        <div className={`flex items-center justify-between gap-4 rounded-2xl px-4 sm:px-5 transition-all duration-500 ${isScrolled ? 'glass py-2.5 shadow-glow border border-white/10' : 'bg-transparent py-1 border border-transparent'}`}>
          <Link href="/" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}>
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 overflow-hidden shadow-glow p-1">
              <Image src="/fleek-logo.png" alt="Fleektech logo" width={40} height={40} className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block text-xl sm:text-2xl font-black font-display gradient-text">Fleektech</span>
              <span className="hidden sm:block text-[11px] text-gray tracking-wide">Web • Apps • Software • Support</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '')
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className={`relative px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${active ? 'text-light' : 'text-light/72 hover:text-light'}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {active && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/[0.07] border border-white/10" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                  <span className="relative">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 transition-all text-light hover:-translate-y-0.5" aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="tel:+254758175057" className="flex items-center gap-2 text-sm text-gray hover:text-light transition-colors px-2">
              <Phone size={15} />
              <span className="font-medium">+254 758 175 057</span>
            </a>
            <Link href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact') }} className="btn-primary px-5 py-2.5 rounded-full font-bold inline-flex items-center gap-1.5 text-sm motion-sheen">
              Get a Quote <ArrowUpRight size={16} />
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-light p-2 rounded-xl bg-white/[0.04] border border-white/8" aria-expanded={isMobileMenuOpen} aria-controls="mobile-menu" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div id="mobile-menu" initial={reduce ? false : { opacity: 0, y: -8 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} className="lg:hidden container mt-2">
            <div className="glass rounded-2xl border border-white/10 p-4 shadow-glow">
              <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => scrollToSection(link.href)} className={`px-4 py-3 rounded-xl font-medium transition-all ${activeSection === link.href.replace('#', '') ? 'bg-white/[0.07] text-accent' : 'text-light/80 hover:bg-white/[0.04] hover:text-light'}`}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
                  <button onClick={toggleDarkMode} className="flex items-center gap-2 text-light px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                  </button>
                  <a href="tel:+254758175057" className="flex items-center gap-2 text-gray text-sm px-2"><Phone size={16} /> Call</a>
                </div>
                <Link href="#contact" onClick={() => scrollToSection('#contact')} className="btn-primary px-6 py-3 rounded-xl font-bold text-center mt-3">Get a Quote</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
