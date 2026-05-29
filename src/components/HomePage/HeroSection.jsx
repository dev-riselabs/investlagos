import React from 'react'

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center text-white lg:py-36" style={{ backgroundImage: 'url(/bg_third_mainland_bridge.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#06120e]/75" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[800px] -translate-x-1/2 rounded-full bg-[#007B5E]/25 blur-[100px]" />
      <div className="relative z-10 max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F4C430]">June 8 – 10, 2026 · Lagos, Nigeria</p>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">Invest Lagos <span className="text-[#F4C430]">3.0</span></h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">The flagship investment engagement summit connecting global capital with the opportunities shaping Africa&apos;s most dynamic economy.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#stream" className="flex items-center gap-3 rounded bg-[#007B5E] px-8 py-4 text-sm font-bold text-white hover:bg-[#005f48] transition"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">▶</span>Watch Online</a>
          <a href="#speakers" className="rounded border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition">View Speakers</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white"><path d="M0,60 C360,0 1080,60 1440,10 L1440,60 Z" /></svg>
      </div>
    </section>
  )
}

export default HeroSection