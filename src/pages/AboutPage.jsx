import { IoMdSearch } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import InvestmentSection from '../components/HomePage/InvestmentSection'
import FutureSection from '../components/HomePage/FutureSection'
import { Reveal, Spotlight, MouseTilt } from '../lib/animations'

/* ─────────────────── HERO ─────────────────── */

function AboutHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a2a4a] px-6 py-14 text-white lg:py-20"
      style={{
        backgroundImage: 'url(/hero_investlagos_flier.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a2a4a]/95 via-[#0a2a4a]/85 to-[#0a2a4a]/55" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="inline-flex items-center gap-3 border-l-4 border-white/80 py-1.5 pl-3.5">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white">Invest Lagos 3.0</p>
        </div>
        <h1 className="mt-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-[34px] lg:leading-[1.25]">
          Theme: Lagos &mdash; The Business Gateway to Africa
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          Where investment meets scale, structure and sustained opportunity
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── EXECUTIVE SUMMARY ─────────────────── */

function ExecutiveSummary() {
  return (
    <section className="bg-white px-6 py-14 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-2xl font-black text-green100 sm:text-3xl">Executive Summary</h2>
        <div className="mt-3 h-[2px] w-14 bg-green100/60" />

        {/* First block: paragraphs flowing around top-right image */}
        <div className="mt-8 lg:grid lg:grid-cols-[1fr_360px] lg:gap-10">
          <div className="space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm">
            <p>
              Invest Lagos 3.0 is the flagship investor engagement platform of the Lagos State Government,
              designed to position Lagos as Africa&apos;s premier destination for trade, capital and
              long-term economic partnership. Convened by the Ministry of Commerce, Cooperatives, Trade
              and Investment in collaboration with the Commonwealth Enterprise and Investment Council, the
              Summit consolidates Lagos&apos; status as Africa&apos;s economic gateway and its primary
              corridor for global capital flows.
            </p>
            <p>
              Lagos generates more than 30% of Nigeria&apos;s GDP and operates as the financial,
              commercial and innovation engine of West Africa. With a GDP of more than US$259 billion and
              a population exceeding 25 million, the State already functions as one of Africa&apos;s
              largest urban economies. Invest Lagos 3.0 is structured to translate this scale into
              investable opportunity, structured deal flow and measurable partnerships.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <MouseTilt intensity={6}>
              <img
                src="/Vision for a 21st-Century Economy.png"
                alt="Lagos cityscape"
                className="aspect-[4/3] w-full rounded-md object-cover shadow-md"
              />
            </MouseTilt>
          </div>
        </div>

        {/* Second block: image left, text right */}
        <div className="mt-10 lg:grid lg:grid-cols-[360px_1fr] lg:gap-10">
          <div>
            <MouseTilt intensity={6}>
              <img
                src="/bg_third_mainland_bridge.png"
                alt="Lagos infrastructure"
                className="aspect-[4/3] w-full rounded-md object-cover shadow-md"
              />
            </MouseTilt>
          </div>
          <div className="mt-8 space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm lg:mt-0">
            <p>
              The summit will showcase a curated pipeline of investment-ready projects across priority
              sectors including infrastructure, energy, healthcare, agribusiness, the creative economy,
              technology and financial services. Through the Deal Room, structured pitch sessions,
              sector-specific roundtables and bilateral engagements, participants will move from intent
              to executable transactions within a single two-day window.
            </p>
          </div>
        </div>

        {/* Full-width closing paragraphs */}
        <div className="mt-10 space-y-5 text-[13px] leading-7 text-slate-600 sm:text-sm">
          <p>
            Invest Lagos 3.0 brings together global investors, development finance institutions, sovereign
            funds, multilateral agencies, private sector leaders, government officials and policy
            stakeholders from across the Commonwealth and beyond. The Summit will host curated convenings,
            high-level plenaries, investor briefings and exhibition activations that highlight the
            structural reforms, infrastructure pipeline and policy environment positioning Lagos as
            Africa&apos;s most investable subnational economy.
          </p>
          <p>
            The outcomes are anchored on three priorities: closing investment transactions, deepening
            strategic partnerships and building the institutional architecture required to sustain
            long-term capital deployment. Each session, deal room engagement and exhibition activation is
            designed to translate dialogue into measurable commitments and to convert global interest into
            specific transactions.
          </p>
        </div>
      </div>
    </section>
  )
}



/* ─────────────────── SEARCH CTA ─────────────────── */

function AboutSearchCTA() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-stretch gap-3 rounded-lg bg-green200 p-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-md bg-white/10 px-5 py-3">
            <IoMdSearch className="h-5 w-5 text-white/70" />
            <input
              type="text"
              placeholder="Pan Africa Growth, Lagos Africa..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>
          <a
            href="#"
            className="flex items-center justify-center gap-3 rounded-md bg-green100 px-6 py-3 font-jost text-sm font-semibold text-white transition hover:opacity-90"
          >
            <span>Investment Information Hub</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <FiArrowUpRight className="h-4 w-4 text-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={620}>
        <Reveal direction="fade" duration={900}>
          <AboutHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up"><ExecutiveSummary /></Reveal>
      <Reveal direction="up"><InvestmentSection /></Reveal>
      <Spotlight color="rgba(99, 202, 168, 0.20)" size={560}>
        <Reveal direction="up"><FutureSection /></Reveal>
      </Spotlight>
      <Reveal direction="up"><AboutSearchCTA /></Reveal>
    </>
  )
}
