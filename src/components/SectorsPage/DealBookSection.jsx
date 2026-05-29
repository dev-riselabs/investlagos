import React from 'react'

const DealBookSection = () => {
  return (
   <section className="bg-gray-50 py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/investment_deal.png"
            alt="Lagos Investment Deal Book"
            className="w-full rounded-md shadow-xl ring-1 ring-black/10"
          />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
            Download Our<br /><span className="text-[#007B5E]">Investment Deal Book</span>
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Access our compendium of de-risked, investment-ready projects across priority sectors of the Lagos economy.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 rounded bg-[#C0392B] px-6 py-3 text-sm font-bold text-white hover:bg-[#a52e1f] transition"
          >
            Download
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">▶</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DealBookSection