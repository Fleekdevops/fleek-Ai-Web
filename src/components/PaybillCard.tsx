'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

export default function PaybillCard() {
  return (
    <section className="py-16 relative overflow-hidden w-full">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-bg interactive-card rounded-[1.7rem] border border-white/8 p-6 sm:p-8">
          <SectionHeading align="left" className="mb-6" eyebrow="Payments" words={['Convenient payment options', 'Simple ways to get projects moving', 'Clear payment details for clients']} lead="Use the payment details below when settling invoices or project milestones with Fleektech." />
          <div className="relative overflow-hidden rounded-2xl bg-darker/40 border border-white/6">
            <div className="paybill-marquee-track flex w-max items-center py-4">
              {[0, 1].map((n) => (
                <div className="px-6" key={n} aria-hidden={n === 1}>
                  <Image src="/paybill_card.jpeg" alt={n === 0 ? 'Fleektech payment details' : ''} className="h-28 sm:h-36 w-auto rounded-xl shadow-lg ring-1 ring-white/10" width={420} height={220} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
