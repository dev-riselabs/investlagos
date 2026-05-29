/* ─────────────────── DATA ─────────────────── */

const incentives = [
  {
    title: 'Energy & Utilities',
    desc: 'Targeted incentives that lower the cost of capital, accelerate project delivery, and unlock new generation, transmission and distribution opportunities across Lagos.',
    bullets: [
      'Tax holidays for renewable energy investments',
      'Streamlined permitting for power & gas projects',
      'Foreign exchange access for critical equipment imports',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageRight',
    band: 'light',
  },
  {
    title: 'Tourism & Creative Economy',
    desc: 'A package of fiscal and non-fiscal supports designed to grow Lagos into Africa\u2019s leading hospitality, entertainment and creative-content destination.',
    bullets: [
      'Reduced VAT on hospitality services',
      'Production grants for film & creative content',
      'Fast-track approvals for venues & events',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageLeft',
    band: 'light',
  },
  {
    title: 'Health & Life Sciences',
    desc: 'Incentives that support investments in hospitals, diagnostics, pharmaceuticals and health technology — strengthening Lagos as a regional healthcare hub.',
    bullets: [
      'Customs duty waivers for medical equipment',
      'Pioneer status for pharma manufacturing',
      'Joint financing through Lagos Health Fund',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageRight',
    band: 'green',
  },
  {
    title: 'Agriculture',
    desc: 'Support for investments across the agricultural value chain — from primary production to processing, storage, logistics and export-readiness.',
    bullets: [
      'Land allocations for agro-processing clusters',
      'Single-digit interest loans for value-chain players',
      'Export support through the Lagos Trade Office',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageLeft',
    band: 'light',
  },
  {
    title: 'Housing & Urban Development',
    desc: 'Incentives that de-risk large-scale housing delivery and mixed-use urban regeneration projects across Lagos.',
    bullets: [
      'Stamp duty rebates on qualifying developments',
      'Off-take agreements via the Lagos Mortgage Board',
      'Density bonuses for affordable housing schemes',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageRight',
    band: 'light',
  },
  {
    title: 'Free Trade Zones',
    desc: 'Operate from Lagos\u2019 free trade zones and unlock world-class incentives for export-oriented manufacturing, logistics and trade activities.',
    bullets: [
      '100% tax holiday on profits earned in the zone',
      'Duty-free import of capital goods & raw materials',
      'Unrestricted repatriation of capital & dividends',
    ],
    image: '/bg_third_mainland_bridge.png',
    layout: 'imageLeft',
    band: 'green',
  },
]

/* ─────────────────── SECTIONS ─────────────────── */

function IncentivesHero() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-16 lg:py-20"
      style={{ backgroundImage: 'url(/Incentives_heor_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center right' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
      <div className="relative mx-auto max-w-[1240px]">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">Welcome to the Future</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Designed to <span className="text-[#007B5E]">Accelerate Investor Returns.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Lagos offers a comprehensive suite of fiscal, regulatory and operational incentives crafted to lower
          investment risk, accelerate project delivery, and improve return on capital across priority sectors.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {['Tax Breaks', 'Land Access', 'Trade Zones', 'Single Window', 'Fast-Track'].map((t) => (
            <span key={t} className="flex items-center gap-2 rounded-full bg-[#F4C430]/15 px-4 py-2 text-xs font-bold text-[#7a5d00]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F4C430] text-[10px] text-[#06120e]">★</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}


function IncentiveCard({ item }) {
  const isGreen = item.band === 'green'
  const imageRight = item.layout === 'imageRight'

  const Image = (
    <div className="relative h-56 overflow-hidden rounded-md shadow-md ring-1 ring-black/5 lg:h-full">
      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
    </div>
  )

  const Text = (
    <div className={isGreen ? 'text-white' : 'text-gray-900'}>
      <p className={`text-[10px] font-bold uppercase tracking-[0.25em] ${isGreen ? 'text-[#F4C430]' : 'text-[#007B5E]'}`}>
        Sector Incentive
      </p>
      <h3 className="mt-3 text-2xl font-black sm:text-3xl">{item.title}</h3>
      <p className={`mt-3 max-w-md text-sm leading-7 ${isGreen ? 'text-white/85' : 'text-gray-600'}`}>{item.desc}</p>
      <ul className="mt-5 space-y-2.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm leading-6">
            <span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${isGreen ? 'bg-[#F4C430] text-[#06120e]' : 'bg-[#007B5E] text-white'}`}>✓</span>
            <span className={isGreen ? 'text-white/90' : 'text-gray-700'}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className={isGreen ? 'bg-[#007B5E] px-6 py-12 lg:py-16' : 'bg-gray-50 px-6 py-10 lg:py-14'}>
      <div className={`mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-2 ${isGreen ? 'rounded-lg p-6 lg:p-8' : 'rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100 lg:p-8'}`}>
        {imageRight ? (
          <>
            {Text}
            {Image}
          </>
        ) : (
          <>
            {Image}
            {Text}
          </>
        )}
      </div>
    </section>
  )
}

function ReadyCTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16"
      style={{ backgroundImage: 'url(/lagos.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl">
            Ready to Access These <span className="text-[#007B5E]">Incentives?</span>
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
            Engage our investment desk for a curated walk-through of the incentives that match your sector and
            scale, and to begin a formal application.
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[#06120e] p-3 shadow-xl">
          <input
            type="email"
            placeholder="Enter your business email"
            className="flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/50"
          />
          <button className="rounded bg-[#007B5E] px-5 py-3 text-sm font-bold text-white hover:bg-[#005f48] transition">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  )
}

function StreamSummitBanner() {
  return (
    <section className="bg-[#007B5E] px-6 py-16 text-white">
      <div className="mx-auto max-w-[1240px] text-center">
        <h3 className="text-2xl font-black sm:text-3xl">Stream the Summit Live</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85">
          Join Invest Lagos 3.0 live and experience keynote sessions, investor showcases and landmark
          partnerships shaping the future of investment in Lagos.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-3 rounded bg-[#C0392B] px-7 py-3 text-sm font-bold text-white hover:bg-[#a52e1f] transition"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">▶</span>
          Watch Online
        </a>
      </div>
    </section>
  )
}

export default function IncentivesPage() {
  return (
    <>
      <IncentivesHero />
      {incentives.map((item) => (
        <IncentiveCard key={item.title} item={item} />
      ))}
      <ReadyCTA />
      <StreamSummitBanner />
    </>
  )
}
