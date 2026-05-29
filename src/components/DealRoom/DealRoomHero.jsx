import React from 'react'

const DealRoomHero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/bg_third_mainland_bridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-green200/85" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-20 lg:py-24">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Invest in Lagos 3.0 <span className="text-yellow">Deal Room</span>
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-sm leading-7 text-white/80 sm:text-[15px]">
            The Invest Lagos 3.0 Deal Room presents you with a curated portfolio
            of investment-ready projects, businesses and government-backed
            initiatives. Explore opportunities, engage with sector experts, and
            become part of the projects transforming Africa&apos;s most dynamic
            city.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DealRoomHero
