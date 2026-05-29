import React from 'react'

const StreamSummitBanner = () => {
  return (
   <section className="bg-[#099567] px-6 pt-16 pb-10 text-white">
      <div className="mx-auto max-w-[1240px] text-center">
        <h3 className="text-2xl font-medium sm:text-3xl">Stream the Summit Live</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85">
          Join Invest Lagos 3.0 live and experience keynote sessions, investor showcases and landmark
          partnerships shaping the future of investment in Lagos.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-3 rounded bg-[#ED212B] px-10 py-3 text-sm font-bold text-white hover:bg-[#a52e1f] transition"
        >
          
          Watch Online
          <span className="flex h-7 w-7 items-center justify-center rounded bg-white/20">▶</span>
        </a>
      </div>
    </section>
  )
}

export default StreamSummitBanner