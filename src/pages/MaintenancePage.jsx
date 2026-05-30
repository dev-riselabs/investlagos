import { useEffect, useMemo, useState } from 'react'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { LuConstruction, LuClock, LuShieldCheck } from 'react-icons/lu'
import { Reveal, Spotlight } from '../lib/animations'

/* ─────────────────── COUNTDOWN ─────────────────── */

function useCountdown(target) {
  const targetMs = useMemo(() => new Date(target).getTime(), [target])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = Math.max(0, targetMs - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, done: diff === 0 }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-sm sm:px-6 sm:py-4">
      <span className="text-2xl font-black text-white tabular-nums sm:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

/* ─────────────────── MAIN ─────────────────── */

export default function MaintenancePage() {
  // Default: 24 hours from first mount. Adjust the date to a fixed go-live
  // window when an exact ETA is known.
  const target = useMemo(() => {
    const d = new Date()
    d.setHours(d.getHours() + 24)
    return d.toISOString()
  }, [])
  const { days, hours, minutes, seconds } = useCountdown(target)

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  function handleNotify(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <Spotlight color="rgba(253, 236, 63, 0.18)" size={620}>
      <section
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#04191D] px-6 py-16 text-white"
        style={{
          backgroundImage: 'url(/bg_third_mainland_bridge.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#04191D]/95 via-[#04191D]/85 to-[#0d5539]/70" />

        <div className="relative mx-auto w-full max-w-[1100px]">
          <Reveal direction="fade" duration={900}>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Invest Lagos" className="h-10 w-auto" />
            </div>
          </Reveal>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* ─── Copy ─── */}
            <div>
              <Reveal direction="up" delay={80}>
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow ring-1 ring-yellow/30">
                  <LuConstruction className="h-3.5 w-3.5" />
                  Scheduled Maintenance
                </span>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  We&apos;ll be back <span className="text-green50">shortly</span>.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={200}>
                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-200 sm:text-base">
                  Invest Lagos is undergoing scheduled upgrades to bring you a faster,
                  more secure experience. Thank you for your patience — we&apos;ll be
                  online again soon.
                </p>
              </Reveal>

              <Reveal direction="up" delay={260}>
                <ul className="mt-8 space-y-3 text-sm text-gray-200">
                  <li className="flex items-start gap-3">
                    <LuShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green50" />
                    <span>Security and performance improvements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LuClock className="mt-0.5 h-5 w-5 flex-shrink-0 text-green50" />
                    <span>Expected downtime: a few hours.</span>
                  </li>
                </ul>
              </Reveal>

              {/* <Reveal direction="up" delay={320}>
                <form
                  onSubmit={handleNotify}
                  className="mt-10 flex max-w-md flex-col items-stretch gap-3 sm:flex-row"
                >
                  <label className="flex flex-1 items-center gap-3 rounded-md bg-white/10 px-4 py-3 ring-1 ring-white/15 backdrop-blur-sm focus-within:ring-green50">
                    <FiMail className="h-4 w-4 text-white/70" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-green100 px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    Notify Me
                    <FiArrowRight className="h-4 w-4" />
                  </button>
                </form>
                {submitted && (
                  <p className="mt-3 text-xs font-medium text-green50">
                    Thanks — we&apos;ll email you the moment we&apos;re back online.
                  </p>
                )}
              </Reveal> */}
            </div>

            {/* ─── Countdown ─── */}
            <Reveal direction="scale" delay={200} duration={800}>
              <div className="rounded-2xl bg-black100/40 p-6 ring-1 ring-white/10 backdrop-blur-md sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Estimated time remaining
                </p>
                <div className="mt-5 grid grid-cols-4 gap-2 sm:gap-3">
                  <CountdownUnit value={days} label="Days" />
                  <CountdownUnit value={hours} label="Hours" />
                  <CountdownUnit value={minutes} label="Mins" />
                  <CountdownUnit value={seconds} label="Secs" />
                </div>
                <p className="mt-6 text-xs leading-relaxed text-white/60">
                  For urgent enquiries, please reach out to{' '}
                  <a
                    href="mailto:info@investlagos.gov.ng"
                    className="font-semibold text-green50 hover:underline"
                  >
                    info@investlagos.gov.ng
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={400}>
            <p className="mt-14 text-center text-xs text-white/50">
              © {new Date().getFullYear()} Invest Lagos. All rights reserved.
            </p>
          </Reveal>
        </div>
      </section>
    </Spotlight>
  )
}
