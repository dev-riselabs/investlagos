import { useState } from 'react'
import './App.css'
import SectorsPage from './pages/SectorsPage'

/* ─────────────────────────── DATA ─────────────────────────── */

const testimonials = [
  {
    quote:
      'Lagos rewards vision, resilience, and scale. If you can build successfully in Lagos, you can compete anywhere in the world.',
    name: 'Aliko Dangote',
    title: 'Chairman, Dangote Group',
    initials: 'AD',
  },
  {
    quote:
      'Lagos gives entrepreneurs the energy, market, and momentum required to turn bold ideas into enduring institutions.',
    name: 'Stella Okoli',
    title: 'Chairman/CEO, Emzor Pharmaceuticals',
    initials: 'SO',
  },
  {
    quote:
      'The world is increasingly looking toward African stories, African talent, and African markets—and Lagos sits at the centre of that transformation.',
    name: 'Mo Abudu',
    title: 'CEO, Ebony Life Group',
    initials: 'MA',
  },
]

const speakers = [
  {
    name: 'H.E. Gov. Babajide Sanwo-Olu',
    title: 'Governor, Lagos State',
    photo: '/Sanwolu.png',
    initials: 'BS',
  },
  {
    name: 'Lord Marland',
    title: 'Chairman, Commonwealth Enterprise and Investment Council',
    photo: '/Marland.png',
    initials: 'LM',
  },
  {
    name: 'Folashade Ambrose-Medebem',
    title: 'Commissioner, Commerce, Cooperatives, Trade & Investment, Lagos State',
    photo: '/Folashade.png',
    initials: 'FA',
  },
  {
    name: 'His Excellency, Mr. Wamkele Mena',
    title: 'Secretary-General, African Continental Free Trade Area',
    photo: null,
    initials: 'WM',
  },
  {
    name: 'Mrs. Kanayo Awani',
    title: 'Executive Vice President, Afreximbank',
    photo: null,
    initials: 'KA',
  },
]

const sessionDays = [
  {
    label: 'Day 1',
    date: '8 June 2026',
    items: [
      'Opening Ceremony & Welcome Address',
      'Keynote: Africa\'s Investment Decade',
      'Strategic Dialogues on Trade & Finance',
      'Gala Dinner & Cultural Evening',
    ],
  },
  {
    label: 'Day 2',
    date: '9 June 2026',
    items: [
      'High-Level Panels: Infrastructure & Energy',
      'Deal Rooms & Investment Showcases',
      'AfCFTA & Lagos Business Opportunities',
      'Music & Networking Evening',
    ],
  },
  {
    label: 'Day 3',
    date: '10 June 2026',
    items: [
      'Tolaram / Lagos Free Zone',
      'Lekki Free Trade Zone',
      'Dangote Fertilizer Plant',
      'Dangote Petroleum Refinery',
      'Russell Smith 3D Printing & Manufacturing Factory',
    ],
    note: 'Industrial & Infrastructure Site Tour',
  },
]

const mediaArticles = [
  {
    category: 'COMMERCE',
    image: '/investment_deal.png',
    title: 'Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy',
    excerpt:
      'Lagos State Government has unveiled its much-awaited Lagos Investment Deal Book, an unprecedented compendium of de-risked, investment-ready projects across sectors.',
  },
  {
    category: 'INVESTMENT',
    image: '/business_day.png',
    title: 'Invest Lagos 3.0 Press Conference Forecasts Over N4 Trillion In Investment Opportunities',
    excerpt:
      'The summit will bring together global investors, policymakers, and industry leaders to explore structured opportunities across priority sectors.',
  },
  {
    category: 'SKILLS & POLICY',
    image: '/youth_skills.png',
    title: 'AfCFTA Creates New Pathways For Lagos Businesses and Youth',
    excerpt:
      'With the AfCFTA fully operational, Lagos businesses and youth talent are positioned to access a combined market of 1.4 billion consumers across Africa.',
  },
]

const libraryStats = [
  { value: '300+', label: 'Research Reports' },
  { value: '50', label: 'Policy Briefs' },
  { value: '16', label: 'LGAs Studies' },
  { value: '200K+', label: 'Total Downloads' },
]

const tickerItems = [
  'POWERING AFRICA\'S NEXT ERA OF TRADE, TALENT & GLOBAL ECONOMIC LEADERSHIP',
  'LAGOS: BUSINESS GATEWAY TO AFRICA',
  'WHERE INVESTMENT MEETS SCALE',
]

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'The Summit', page: 'home', dropdown: true },
  { label: 'Investment In LA', page: 'sectors', dropdown: true },
  { label: 'Media Center', page: 'home', dropdown: true },
  { label: 'Pressroom', page: 'home', dropdown: true },
  { label: 'Contact Us', page: 'home' },
]

/* ─────────────────────────── SMALL COMPONENTS ─────────────────────────── */

function TopStripe() {
  const colors = ['#007B5E', '#00A878', '#F4C430', '#E8722A', '#C0392B']
  return (
    <div className="flex h-4 w-full">
      {colors.map((c) => (
        <div key={c} className="flex-1" style={{ background: c }} />
      ))}
    </div>
  )
}

function Logo({ dark = false }) {
  return (
    <a href="#hero" className="shrink-0 flex items-center">
      <img
        src="/logo.png"
        alt="Invest Lagos 3.0"
        className="h-14 w-auto object-contain"
        style={dark ? { filter: 'brightness(0) invert(1)' } : {}}
      />
    </a>
  )
}

function NavBar({ mobileOpen, setMobileOpen, currentPage, setCurrentPage }) {
  const go = (page) => (e) => {
    e.preventDefault()
    setCurrentPage(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top white bar with partner branding */}
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-3">
        {/* Invest Lagos logo */}
        <a href="#" onClick={go('home')} className="shrink-0">
          <img src="/logo.png" alt="Invest Lagos" className="h-12 w-auto object-contain sm:h-14" />
        </a>

        {/* Center: in collaboration with + Lagos crest */}
        <div className="hidden flex-col items-center md:flex">
          <span className="text-[10px] font-medium text-gray-500">in collaboration with</span>
          <img
            src="/lagos_state_government.png"
            alt="Lagos State Government"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Right: Commonwealth + accent */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex flex-col items-end">
            <img
              src="/commonwealth.png"
              alt="Commonwealth"
              className="h-7 w-auto object-contain"
            />
            <span className="mt-0.5 text-[9px] font-medium text-gray-500">
              Strategic Initiative Partners
            </span>
          </div>
          <img src="/logo_2.png" alt="" className="h-10 w-auto object-contain" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Green navigation bar */}
      <div className="bg-[#007B5E]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-white lg:flex">
            {navLinks.map((l) => {
              const active = currentPage === l.page && l.label === (currentPage === 'sectors' ? 'Investment In LA' : 'Home')
              return (
                <a
                  key={l.label}
                  href="#"
                  onClick={go(l.page)}
                  className={`flex items-center gap-1 border-y-2 py-3.5 transition ${
                    active ? 'border-b-[#F4C430] border-t-transparent text-[#F4C430]' : 'border-transparent hover:text-[#F4C430]'
                  }`}
                >
                  {l.label}
                  {l.dropdown && <span className="text-[10px] opacity-80">▾</span>}
                </a>
              )
            })}
          </nav>

          {/* Search icon */}
          <a href="#search" className="hidden p-3 text-white/80 hover:text-[#F4C430] lg:block" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-[#007B5E] px-6 pb-4 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href="#"
              onClick={go(l.page)}
              className="block border-b border-white/10 py-3 text-sm font-semibold text-white hover:text-[#F4C430]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Ticker() {
  const repeated = [...tickerItems, ...tickerItems]
  return (
    <div className="overflow-hidden bg-[#0a0a0a] py-3 text-white">
      <div className="ticker-track flex items-center gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em]">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F4C430]" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── SECTIONS ─────────────────────────── */

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center text-white lg:py-36"
      style={{
        backgroundImage: 'url(/bg_third_mainland_bridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay with green tint */}
      <div className="absolute inset-0 bg-[#06120e]/75" />
      {/* Subtle green glow at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[800px] -translate-x-1/2 rounded-full bg-[#007B5E]/25 blur-[100px]" />

      <div className="relative z-10 max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#F4C430]">
          June 8 – 10, 2026 · Lagos, Nigeria
        </p>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
          Invest Lagos{' '}
          <span className="text-[#F4C430]">3.0</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
          The flagship investment engagement summit connecting global capital with the
          opportunities shaping Africa&apos;s most dynamic economy.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#stream"
            className="flex items-center gap-3 rounded bg-[#007B5E] px-8 py-4 text-sm font-bold text-white hover:bg-[#005f48] transition"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">▶</span>
            Watch Online
          </a>
          <a
            href="#speakers"
            className="rounded border border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition"
          >
            View Speakers
          </a>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,60 C360,0 1080,60 1440,10 L1440,60 Z" />
        </svg>
      </div>
    </section>
  )
}

function StreamSection() {
  return (
    <section id="stream" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">Live Broadcast</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
          Stream the Summit Live
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
          Join Invest Lagos 3.0 live and experience keynote sessions, investor showcases,
          strategic conversations and landmark partnerships shaping the future of investment
          and economic transformation in Lagos.
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3 rounded bg-[#007B5E] px-8 py-4 text-sm font-bold text-white hover:bg-[#005f48] transition"
        >
          Watch Online
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">→</span>
        </a>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-[#06120e] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wider text-white sm:text-3xl lg:text-4xl">
              What Global Leaders Think About Lagos…
            </h2>
            <div className="mt-3 h-0.5 w-24 bg-[#007B5E]" />
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition">◀</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition">▶</button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <span className="block text-5xl font-black leading-none text-[#F4C430] opacity-60">&ldquo;</span>
              <p className="mt-2 text-base leading-7 text-gray-300">{t.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#007B5E] text-sm font-black text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpeakersSection() {
  return (
    <section id="speakers" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">
              Featured Speakers
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black text-gray-900 sm:text-4xl">
              Meet the leaders shaping Africa&apos;s most dynamic investment landscape
            </h2>
            <div className="mt-3 h-0.5 w-24 bg-[#007B5E]" />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#007B5E] hover:underline">
              View All Speakers →
            </a>
            <span className="text-sm text-gray-400">1 of 7</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition">
              {/* Photo or gradient fallback */}
              {s.photo ? (
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06120e]/60 to-transparent" />
                </div>
              ) : (
                <div className="flex h-72 items-end bg-gradient-to-b from-[#007B5E] to-[#06120e] p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-black text-white">
                    {s.initials}
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-[#007B5E]/10 text-[#007B5E]">
                  ★
                </div>
                <h3 className="text-lg font-black leading-snug text-gray-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{s.title}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`block h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-[#007B5E]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SessionsSection() {
  const [active, setActive] = useState(0)
  const day = sessionDays[active]

  return (
    <section id="sectors" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">
              Summit Sessions
            </span>
            <h2 className="mt-4 max-w-3xl text-2xl font-black text-gray-900 sm:text-3xl">
              Keynotes. Strategic Dialogues. High-Level Panels. Deal Rooms. Gala Dinner. Cultural Experiences. Music &amp; Networking.
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition">◀</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition">▶</button>
          </div>
        </div>

        {/* Day tabs */}
        <div className="mt-10 flex gap-2 rounded-sm border border-gray-100 bg-gray-50 p-1 w-fit">
          {sessionDays.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setActive(i)}
              className={`rounded-sm px-6 py-2 text-sm font-bold transition ${
                active === i ? 'bg-[#007B5E] text-white shadow' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Day card */}
        <div className="mt-8 rounded-sm border border-gray-100 bg-gray-50 p-8">
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block rounded bg-[#F4C430] px-3 py-1 text-xs font-black text-gray-900">
                {day.label}
              </span>
              <h3 className="mt-4 text-2xl font-black text-gray-900">{day.date}</h3>
              {day.note && (
                <p className="mt-1 text-sm font-semibold text-[#007B5E]">{day.note}</p>
              )}
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            {day.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-sm border border-gray-200 bg-white px-6 py-4 text-sm font-medium text-gray-800 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#007B5E]/10 text-[#007B5E]">
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function PressSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center">
          <h2 className="max-w-lg text-3xl font-black leading-snug text-gray-900 sm:text-4xl">
            Invest Lagos 3.0 Press Conference Forecasts Over{' '}
            <span className="text-[#007B5E]">N4 Trillion</span> In Investment Opportunities
          </h2>
          <p className="mt-6 leading-7 text-gray-600">
            The summit, scheduled for June 8–10, 2026, will bring together global investors,
            policymakers, and industry leaders to explore structured opportunities across priority
            sectors including technology, infrastructure, manufacturing, and the creative economy.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded bg-[#007B5E] px-6 py-3 text-sm font-bold text-white hover:bg-[#005f48] transition"
          >
            Read Full Statement →
          </a>
        </div>
        <div className="flex flex-col gap-4">
          {/* Business Day front page */}
          <div className="overflow-hidden rounded-sm shadow-lg">
            <img
              src="/business_day.png"
              alt="Business Day press conference coverage"
              className="w-full object-cover"
            />
          </div>
          {/* Investment Deal Book */}
          <div className="overflow-hidden rounded-sm shadow-lg">
            <img
              src="/investment_deal.png"
              alt="Lagos Investment Deal Book"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MediaSection() {
  return (
    <section id="news" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">
              Media Center
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black text-gray-900">
              Latest updates, stories and insights from the heart of Lagos&apos; investment ecosystem.
            </h2>
          </div>
          <a href="#" className="shrink-0 rounded border border-[#007B5E] px-6 py-3 text-sm font-bold text-[#007B5E] hover:bg-[#007B5E] hover:text-white transition">
            View All News
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaArticles.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-sm ring-1 ring-gray-100 bg-white shadow-sm hover:shadow-lg transition group">
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="rounded bg-[#007B5E]/10 px-3 py-1 text-xs font-black text-[#007B5E]">
                  {a.category}
                </span>
                <h3 className="mt-4 text-base font-black leading-snug text-gray-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">{a.excerpt}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#007B5E] hover:underline">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`block h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-[#007B5E]' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function LibraryStats() {
  return (
    <section id="resources" className="border-y border-gray-100 bg-gray-50 py-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {libraryStats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-5xl font-black text-[#007B5E]">{s.value}</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  const footerLinks = ['About', 'The Summit', 'Investment Hub', 'Media Centre', 'Research', 'Contact']
  const socialIcons = [
    {
      label: 'Facebook',
      path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
    },
    {
      label: 'X',
      path: 'M4 4l16 16M4 20L20 4',
    },
    {
      label: 'LinkedIn',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    },
    {
      label: 'YouTube',
      path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
    },
  ]

  return (
    <footer className="bg-white text-gray-800">
      <div className="mx-auto max-w-[1240px] px-6 pt-10 pb-8">

        {/* ── Dark green CTA card ── */}
        <div className="flex flex-col items-stretch gap-0 overflow-hidden rounded-xl bg-[#07422e] sm:flex-row sm:items-center">
          {/* Left: icon + tagline */}
          <div className="flex flex-1 items-center gap-4 px-8 py-7">
            {/* Calendar icon box */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
                <rect x="7" y="14" width="2" height="2" fill="white"/>
                <rect x="11" y="14" width="2" height="2" fill="white"/>
                <rect x="15" y="14" width="2" height="2" fill="white"/>
              </svg>
            </div>
            <span className="text-base font-semibold text-white sm:text-lg">
              Partnerships. Growth. Lagos. Africa.
            </span>
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px self-stretch bg-white/20 sm:block" />

          {/* Right: CTA button */}
          <div className="flex items-center justify-center px-8 py-7">
            <a
              href="#"
              className="flex items-center gap-3 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-bold text-[#C0392B] transition hover:bg-gray-50"
            >
              Download Investment Deal Book
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#007B5E]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#007B5E" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
          </div>
        </div>

        {/* ── Navigation links ── */}
        <nav className="mt-8 flex flex-wrap gap-x-10 gap-y-3 border-b border-gray-200 pb-8 text-sm font-medium text-gray-700">
          {footerLinks.map((l) => (
            <a key={l} href="#" className="hover:text-[#007B5E] transition">{l}</a>
          ))}
        </nav>

        {/* ── Logo + social icons ── */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <img src="/logo.png" alt="Invest Lagos" className="h-16 w-auto object-contain" />
          <div className="flex items-center gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 transition hover:border-[#007B5E] hover:text-[#007B5E]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-200" />

        {/* ── Legal links ── */}
        <ul className="mt-5 space-y-1 text-xs text-gray-500">
          <li>• <a href="#" className="hover:underline">Accessibility</a></li>
          <li>• <a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
          <li>• <a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>

        {/* ── Bottom three-column info row ── */}
        <div className="mt-6 flex flex-col gap-5 text-[11px] leading-5 text-gray-400 sm:flex-row sm:justify-between">
          <p className="max-w-xs">
            Invest in Lagos is the flagship investment engagement platform designed to connect
            investors with opportunities across key sectors of the Lagos economy. The 3.0 edition is
            structured to drive partnerships that translate into measurable economic outcomes.
          </p>
          <div>
            <p>Ministry of Commerce, Cooperatives, Trade and Investment [MCCTI]</p>
            <p>Lagos State Government,</p>
            <p>Alausa, Nigeria.</p>
          </div>
          <div className="sm:text-right">
            <p>Copyright 2026. All Rights Reserved. Invest Lagos</p>
            <p>
              Website Designed &amp; Developed by{' '}
              <span className="font-bold text-gray-600">Events Intel</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

/* ─────────────────────────── APP ─────────────────────────── */

function HomePage() {
  return (
    <>
      <Ticker />
      <HeroSection />
      <StreamSection />
      <TestimonialsSection />
      <SpeakersSection />
      <SessionsSection />
      <PressSection />
      <MediaSection />
      <LibraryStats />
    </>
  )
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen">
      <TopStripe />
      <NavBar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'sectors' ? <SectorsPage /> : <HomePage />}
      <Footer />
    </div>
  )
}

export default App
