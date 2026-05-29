import React from 'react'

const PlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
)

const SpeakersCTA = () => {
  return (
    <section className="border-t border-slate-100 bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2">

        {/* Left — text */}
        <div>
          <div className="flex items-center gap-3">
            <span className="block h-5 w-px bg-green100" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-green100">
              Welcome to the Future
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-black100 sm:text-4xl">
            Secure your place<br />
            at <span className="text-green100">Invest Lagos 3.0</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
            Engage with world-class investors, government leaders and innovators
            defining the future of business and investment.
          </p>
        </div>

        {/* Right — buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">

          {/* Register Now — dark */}
          <button className="group flex items-center justify-between gap-6 rounded-sm bg-black100 pl-6 pr-2 py-2 text-sm font-bold text-white transition hover:opacity-90">
            <span>Register Now</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/15 transition-transform group-hover:translate-x-0.5">
              <PlayIcon />
            </span>
          </button>

          {/* View Agenda — yellow */}
          <button className="group flex items-center justify-between gap-6 rounded-sm bg-yellow pl-6 pr-2 py-2 text-sm font-bold text-black100 transition hover:opacity-90">
            <span>View Agenda</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-black/10 transition-transform group-hover:translate-x-0.5">
              <PlayIcon />
            </span>
          </button>

          {/* View LIVE Dashboard — green */}
          <button className="group flex items-center justify-between gap-6 rounded-sm bg-green100 pl-5 pr-2 py-2 text-sm font-bold text-white transition hover:opacity-90">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white" />
              View LIVE Dashboard
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/15 transition-transform group-hover:translate-x-0.5">
              <PlayIcon />
            </span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default SpeakersCTA
