'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AIServices from '@/components/AIServices'
import WhatWeDo from '@/components/WhatWeDo'
import About from '@/components/About'
import AITools from '@/components/AITools'
import Pricing from '@/components/Pricing'
import SolutionsFinder from '@/components/SolutionsFinder'
import CaseStudies from '@/components/CaseStudies'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import PaybillCard from '@/components/PaybillCard'
import Footer from '@/components/Footer'
import AIChatbot from '@/components/AIChatbot'
import BackToTop from '@/components/BackToTop'
import Particles from '@/components/Particles'
import ErrorBoundary from '@/components/ErrorBoundary'
import MotionEffects from '@/components/MotionEffects'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen"
          >
            <Particles />
            <MotionEffects />
            <Header />
            <Hero />
            <AIServices />
            <WhatWeDo />
            <About />
            <AITools />
            <Pricing />
            <SolutionsFinder />
            <CaseStudies />
            <Team />
            <Testimonials />
            <Blog />
            <PaybillCard />
            <Contact />
            <Footer />
            <AIChatbot />
            <BackToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  )
}
