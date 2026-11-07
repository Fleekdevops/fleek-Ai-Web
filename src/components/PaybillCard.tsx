'use client'

import Image from 'next/image'

export default function PaybillCard() {
  return (
    <section className="py-10 relative overflow-hidden w-full">
      <div className="container">
        <div className="card-bg rounded-3xl border border-white/10 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Payments</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Convenient Payment Options</h3>
            </div>
            <span className="hidden sm:inline-flex text-xs text-gray px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Secure & easy
            </span>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-darker/40 border border-white/5">
            <div className="animate-paybill-marquee flex w-max items-center py-4">
              <div className="px-6">
                <Image
                  src="/paybill_card.jpeg"
                  alt="Fleektech payment details"
                  className="h-28 sm:h-36 w-auto rounded-xl shadow-lg ring-1 ring-white/10"
                  width={420}
                  height={220}
                  priority={false}
                />
              </div>
              <div className="px-6" aria-hidden="true">
                <Image
                  src="/paybill_card.jpeg"
                  alt=""
                  className="h-28 sm:h-36 w-auto rounded-xl shadow-lg ring-1 ring-white/10 opacity-90"
                  width={420}
                  height={220}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
