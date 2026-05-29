import React from 'react'

const DealRoomIntro = () => {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2">
        {/* Left — copy */}
        <div>
          <h2 className="text-2xl font-black text-black100 sm:text-3xl">
            Investment Hub (Deal Room)
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
            Welcome to Lagos&apos;s investment digital experience &mdash; where
            you can explore live, deal-room ready opportunities and engage
            directly with project sponsors.
          </p>
        </div>

        {/* Right — thumbnail */}
        <div className="lg:justify-self-end">
          <div className="relative overflow-hidden rounded-lg shadow-lg ring-1 ring-black/10">
            <img
              src="/bg_third_mainland_bridge.png"
              alt="Invest Lagos Deal Room preview"
              className="block h-48 w-full max-w-md object-cover lg:h-56"
            />
            <div className="absolute inset-0 bg-green200/55" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealRoomIntro
