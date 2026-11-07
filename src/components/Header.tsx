'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#team', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Scrollspy - detect active section
      const sections = ['home', 'about', 'services', 'pricing', 'team', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = saved ? saved === 'dark' : prefersDark
    setIsDarkMode(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  const toggleDarkMode = () => {
    const newDark = !isDarkMode
    setIsDarkMode(newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newDark)
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/98 backdrop-blur-xl py-3 shadow-lg border-b border-white/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="w-full">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 overflow-hidden">
                <Image src="/fleek-logo.jpeg" alt="Fleektech Logo" width={48} height={48} />
              </div>
              <div className="leading-tight">
                <span className="block text-2xl font-black gradient-text">Fleektech</span>
                <span className="hidden sm:block text-[11px] text-gray tracking-wide">IT Solutions • Nairobi</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`font-medium transition-colors relative group ${
                      isActive ? 'text-accent' : 'text-light/80 hover:text-accent'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 gradient-bg transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                )
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-light"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a href="tel:+254758175057" className="flex items-center gap-2 text-gray hover:text-light transition-colors">
                <Phone size={16} />
                <span className="text-sm font-medium">+254 758 175 057</span>
              </a>
              <Link
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="btn-primary px-6 py-3 rounded-full font-bold"
              >
                Get a Quote
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-light p-2"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-light/80 hover:text-accent font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 border-t border-white/10 mt-2 pt-4">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 text-light p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
              <div className="flex items-center gap-4 py-2 border-t border-white/10 mt-2 pt-4">
                <a href="tel:+254758175057" className="flex items-center gap-2 text-gray">
                  <Phone size={16} />
                  <span className="text-sm">+254 758 175 057</span>
                </a>
              </div>
              <Link
                href="#contact"
                onClick={() => scrollToSection('#contact')}
                className="btn-primary px-6 py-3 rounded-full font-bold text-center mt-2"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
