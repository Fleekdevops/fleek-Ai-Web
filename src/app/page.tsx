'use client'

import { useState, useEffect } from 'react'
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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ErrorBoundary>
      <main className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Particles />
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
      </main>
    </ErrorBoundary>
  )
}
