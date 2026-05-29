import React from 'react'

const PrioritySectorsHero = () => {
  return (
     <section
      className="relative overflow-hidden bg-[#0d1f17] px-6 py-16 text-white lg:py-20"
      style={{ backgroundImage: 'url(/sector_hero_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120e]/10 via-[#06120e]/40 to-[#06120e]/10" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className='border-l-4 border-[#F4C430] py-4 pl-3.5'>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">Priority Sectors</p>
        </div>
        <h1 className="mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          Where Opportunity Meets <span className="text-[#F4C430]">Infrastructure</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
       Lagos offers diverse investment opportunities across infrastructure, technology, financial services, manufacturing, healthcare, education, energy, real estate, logistics and the creative economy. This Summit highlights sectors driving growth, competitiveness and long-term economic transformation.
        </p>
      </div>
    </section>
  )
}

export default PrioritySectorsHero