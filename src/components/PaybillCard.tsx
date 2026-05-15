'use client'

import Image from 'next/image'

export default function PaybillCard() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="animate-slide-horizontal-end-to-end">
            <Image
              src="/paybill_card.jpeg"
              alt="Paybill Card"
              className="max-w-[300px] w-full rounded-2xl shadow-2xl"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
