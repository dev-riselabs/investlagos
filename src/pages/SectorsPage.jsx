/* ─────────────────── DATA ─────────────────── */

const sectors = [
  {
    title: 'Manufacturing & Industrial Processing',
    desc: 'Scaling production, value-addition and export-ready industries that anchor Lagos as a manufacturing hub.',
    image: '/bg_third_mainland_bridge.png',
  },
  {
    title: 'Technology & Innovation',
    desc: 'Building Africa\u2019s leading digital economy through fintech, AI, deep-tech and creative software.',
    image: '/bg_third_mainland_bridge.png',
  },
  {
    title: 'Agribusiness & Food Systems',
    desc: 'Modernising the entire food value chain \u2013 from farm gate to processing to retail and export.',
    image: '/bg_third_mainland_bridge.png',
  },
  {
    title: 'Energy & Utilities',
    desc: 'Powering Lagos with cleaner, smarter and more reliable energy and utility infrastructure.',
    image: '/bg_third_mainland_bridge.png',
  },
  {
    title: 'Real Estate & Infrastructure',
    desc: 'Unlocking land, housing, transport and urban infrastructure for a 21st-century mega-city.',
    image: '/bg_third_mainland_bridge.png',
  },
  {
    title: 'Tourism & Creative Economy',
    desc: 'Positioning Lagos as the cultural, entertainment and hospitality capital of Africa.',
    image: '/bg_third_mainland_bridge.png',
  },
]

const features = [
  { title: 'Sector Overview', desc: 'Snapshot of opportunities, key trends, and outlook.', accent: '#C0392B' },
  { title: 'Policy & Regulatory Support', desc: 'Active reforms, incentives, and government priorities.', accent: '#F4C430' },
  { title: 'Sector Opportunities', desc: 'Investment-ready projects matched to investor needs.', accent: '#007B5E' },
  { title: 'Catalytic Opportunities', desc: 'Flagship projects with cross-sector and economy-wide impact.', accent: '#7A4FBF' },
  { title: 'Investment Calculator', desc: 'Estimate potential returns, capital needs and timelines.', accent: '#2D89DB' },
  { title: 'Career Forms', desc: 'Career pipelines, talent matching and workforce links.', accent: '#E8722A' },
]

/* ─────────────────── SECTIONS ─────────────────── */

function PrioritySectorsHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0d1f17] px-6 py-16 text-white lg:py-20"
      style={{ backgroundImage: 'url(/bg_third_mainland_bridge.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120e]/95 via-[#06120e]/80 to-[#06120e]/40" />
      <div className="relative mx-auto max-w-[1240px]">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">Priority Sectors</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Where Opportunity Meets <span className="text-[#F4C430]">Infrastructure</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
          Lagos offers diverse investment opportunities across infrastructure, technology, finance, tourism,
          manufacturing, agriculture, education, energy, real estate and logistics, that are driving Africa\u2019s
          new economy. This Summit highlights sectors driving growth, innovation and long-term economic transformation.
        </p>
      </div>
    </section>
  )
}

function SectorCards() {
  return (
    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s) => (
          <article
            key={s.title}
            className="group relative h-64 overflow-hidden rounded-md shadow-md ring-1 ring-black/5"
            style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#06120e]/90 via-[#06120e]/60 to-[#06120e]/20" />
            <div className="absolute left-5 top-5">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-[#F4C430] text-lg text-[#06120e]">▦</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <h3 className="text-base font-black leading-snug">{s.title}</h3>
              <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-200">{s.desc}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#F4C430] hover:underline">
                Explore Sector →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function WhatToExpect() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">What to Expect</p>
        <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
          Each Sector Page <span className="text-[#C0392B]">Includes</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-gray-500">
          Each sector page comes with curated, easy-to-navigate and investor-ready information.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-md bg-white p-5 shadow-sm ring-1 ring-gray-100 border-t-4 hover:shadow-md transition"
              style={{ borderTopColor: f.accent }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded" style={{ background: `${f.accent}1a`, color: f.accent }}>★</span>
                <h3 className="text-sm font-black text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-xs leading-5 text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DealBookSection() {
  return (
    <section className="bg-gray-50 py-14 lg:py-20">
      <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/investment_deal.png"
            alt="Lagos Investment Deal Book"
            className="w-full rounded-md shadow-xl ring-1 ring-black/10"
          />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
            Download Our<br /><span className="text-[#007B5E]">Investment Deal Book</span>
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
            Access our compendium of de-risked, investment-ready projects across priority sectors of the Lagos economy.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 rounded bg-[#C0392B] px-6 py-3 text-sm font-bold text-white hover:bg-[#a52e1f] transition"
          >
            Download
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">▶</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function SectorsPage() {
  return (
    <>
      <PrioritySectorsHero />
      <SectorCards />
      <WhatToExpect />
      <InterestedCTA />
      <DealBookSection />
    </>
  )
}

function InterestedCTA() {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div
        className="relative mx-auto max-w-[1240px] overflow-hidden rounded-lg p-8 text-white sm:p-12"
        style={{ backgroundImage: 'url(/bg_third_mainland_bridge.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#007B5E]/95 via-[#007B5E]/85 to-[#007B5E]/60" />
        <div className="relative max-w-2xl">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-white/15 text-lg">◎</span>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">Interested in a Sector?</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/90">
            Connect with our investment desk to discuss sector-specific opportunities, incentives, and support services.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" className="rounded bg-[#F4C430] px-6 py-3 text-sm font-bold text-[#06120e] hover:bg-[#e0b321] transition">Speak To An Advisor →</a>
            <a href="#" className="rounded border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition">Book Engagement →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
