import React from 'react'

const StreamSection = () => {
  return (
    <section id="stream" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">Live Broadcast</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">Stream the Summit Live</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">Join Invest Lagos 3.0 live and experience keynote sessions, investor showcases, strategic conversations and landmark partnerships shaping the future of investment and economic transformation in Lagos.</p>
        <a href="#" className="mt-8 inline-flex items-center gap-3 rounded bg-[#007B5E] px-8 py-4 text-sm font-bold text-white hover:bg-[#005f48] transition">Watch Online<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">→</span></a>
      </div>
    </section>
  )
}

export default StreamSection