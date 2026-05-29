import React from 'react'

const SpeakersHero = () => {
  return (
    <section className="relative overflow-hidden bg-green100 px-6 pt-16 pb-0 lg:pt-20">
      {/* subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green100 via-green100 to-green200/40" />

      <div className="relative mx-auto max-w-[1240px] text-center">
        <span className="inline-block rounded-sm bg-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-yellow">
          Featured Speakers
        </span>

        <h1 className="mt-6 mx-auto max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
          Meet the Leaders Shaping <br className="hidden sm:block" />
          <span className="text-yellow">Africa&apos;s Investment Decade</span>
        </h1>

        <p className="mt-5 mx-auto max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
          Heads of state, ministers, captains of industry and global investors gathering in Lagos for
          three days of high-level conversations, deal-making and partnerships.
        </p>

        {/* Featured keynote speaker */}
        <div className="mt-12 mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-md shadow-2xl ring-1 ring-black/10">
            <img
              src="/speakers/MR_Babajide_Olusola_Sanwo_Olu.png"
              alt="H.E. Governor Babajide Sanwo-Olu"
              className="h-[420px] w-full object-cover object-top sm:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green200 via-green200/85 to-transparent p-6 text-left text-white">
              <span className="inline-flex items-center gap-2 rounded-sm bg-yellow px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-green200">
                Keynote
              </span>
              <h3 className="mt-3 text-xl font-black sm:text-2xl">H.E. Gov. Babajide Sanwo-Olu</h3>
              <p className="mt-1 text-xs text-white/80 sm:text-sm">Executive Governor, Lagos State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeakersHero
