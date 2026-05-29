import React from 'react'

const PressSection = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-lg text-3xl font-black leading-snug text-gray-900 sm:text-4xl">Invest Lagos 3.0 Press Conference Forecasts Over <span className="text-[#007B5E]">N4 Trillion</span> In Investment Opportunities</h2>
          <p className="mt-6 leading-7 text-gray-600">The summit, scheduled for June 8–10, 2026, will bring together global investors, policymakers, and industry leaders to explore structured opportunities across priority sectors including technology, infrastructure, manufacturing, and the creative economy.</p>
          <a href="#" className="mt-8 inline-flex w-fit items-center gap-2 rounded bg-[#007B5E] px-6 py-3 text-sm font-bold text-white hover:bg-[#005f48] transition">Read Full Statement →</a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-sm shadow-lg"><img src="/business_day.png" alt="Business Day press conference coverage" className="w-full object-cover" /></div>
          <div className="overflow-hidden rounded-sm shadow-lg"><img src="/investment_deal.png" alt="Lagos Investment Deal Book" className="w-full object-cover" /></div>
        </div>
      </div>
    </section>
  )
}

export default PressSection