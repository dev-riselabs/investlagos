import { IoMdSearch } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi'
import {
  LuFileText,
  LuChartBar,
  LuBuilding2,
  LuLeaf,
  LuScale,
  LuBriefcase,
  LuGraduationCap,
  LuHeartPulse,
} from 'react-icons/lu'
import InformationSection from '../components/HomePage/InformationSection'
import { Reveal, Spotlight, MouseTilt } from '../lib/animations'

/* ─────────────────── HERO ─────────────────── */

function PolicyHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#04191D] px-6 py-16 text-white lg:py-20"
      style={{
        backgroundImage: 'url(/bg_third_mainland_bridge.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#04191D]/95 via-[#04191D]/80 to-[#04191D]/40" />
      <div className="relative mx-auto max-w-[1240px]">
        <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Policy Centre</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
          A hub of evidence-based research, policy briefs and strategic insights shaping the future
          of investment, economic transformation and sustainable growth across Lagos State.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── STATS ─────────────────── */

const policyStats = [
  { value: '300+', label: 'Research Reports' },
  { value: '50', label: 'Policy Briefs' },
  { value: '16', label: 'LGAs Studies' },
  { value: '200K+', label: 'Total Downloads' },
]

function PolicyStats() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {policyStats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-black text-green100 sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────── RESEARCH FOCUS AREAS ─────────────────── */

const focusAreas = [
  {
    icon: LuChartBar,
    title: 'Economic Policy',
    desc: 'Macroeconomic frameworks, fiscal policy and revenue strategies that drive sustainable growth.',
    accent: 'bg-green100/15 text-green100',
  },
  {
    icon: LuBuilding2,
    title: 'Investment Climate',
    desc: 'Reforms, incentives and regulatory analysis that improve ease of doing business in Lagos.',
    accent: 'bg-yellow/20 text-[#B8860B]',
  },
  {
    icon: LuLeaf,
    title: 'Sustainability & Climate',
    desc: 'Green growth, climate resilience and ESG frameworks shaping responsible investment.',
    accent: 'bg-orange/15 text-orange',
  },
  {
    icon: LuScale,
    title: 'Governance & Reform',
    desc: 'Institutional reform, public-sector innovation and accountability frameworks.',
    accent: 'bg-[#3B7FCD]/15 text-[#3B7FCD]',
  },
]

function ResearchFocusAreas() {
  return (
    <section className="bg-white px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-black text-green200 sm:text-3xl">Research Focus Areas</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          Our research portfolio spans the economic, regulatory and institutional themes that
          shape Lagos&apos; long-term competitiveness as Africa&apos;s leading investment destination.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, desc, accent }, i) => (
            <Reveal key={title} direction="up" delay={i * 90} distance={26}>
              <MouseTilt intensity={6}>
                <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100 il-card">
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${accent}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
                </article>
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FILTER BAR ─────────────────── */

function PolicyFilterBar() {
  return (
    <div className="bg-green100 px-6 py-6">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-stretch gap-3 rounded-full bg-green200 p-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 rounded-full bg-white/95 px-5 py-2.5">
            <IoMdSearch className="h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search policy briefs and reports..."
              className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <div className="relative flex items-center rounded-full bg-white/95 px-5 py-2.5 text-sm text-slate-600 sm:w-44">
            <select className="w-full appearance-none bg-transparent pr-6 focus:outline-none">
              <option>All Topics</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-500" />
          </div>
          <div className="relative flex items-center rounded-full bg-white/95 px-5 py-2.5 text-sm text-slate-600 sm:w-36">
            <select className="w-full appearance-none bg-transparent pr-6 focus:outline-none">
              <option>All Years</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-4 h-4 w-4 text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── POLICY BRIEFS GRID ─────────────────── */

const policyBriefs = [
  {
    icon: LuFileText,
    tag: 'Economic Policy',
    year: '2025',
    title: 'Lagos State Investment Promotion Framework',
    desc: 'A comprehensive review of the policy levers driving investment promotion across priority sectors and the institutional architecture supporting deal flow.',
    accent: 'bg-green100/15 text-green100',
  },
  {
    icon: LuBriefcase,
    tag: 'Investment Climate',
    year: '2025',
    title: 'Ease of Doing Business Reforms in Lagos',
    desc: 'An assessment of regulatory simplification, licensing reform and digital service delivery improvements that strengthen investor confidence.',
    accent: 'bg-yellow/20 text-[#B8860B]',
  },
  {
    icon: LuLeaf,
    tag: 'Sustainability',
    year: '2024',
    title: 'Climate-Smart Infrastructure & Green Finance',
    desc: 'Pathways for mobilising green capital and integrating climate resilience into Lagos&apos; long-term infrastructure planning.',
    accent: 'bg-orange/15 text-orange',
  },
  {
    icon: LuGraduationCap,
    tag: 'Human Capital',
    year: '2024',
    title: 'Skills, Innovation and the Lagos Workforce',
    desc: 'Strategic recommendations for aligning workforce development with the demands of a globally competitive Lagos economy.',
    accent: 'bg-[#3B7FCD]/15 text-[#3B7FCD]',
  },
  {
    icon: LuHeartPulse,
    tag: 'Social Policy',
    year: '2024',
    title: 'Healthcare Investment & Public-Private Partnerships',
    desc: 'A framework for attracting private capital into the Lagos health sector through structured PPPs and concessional financing.',
    accent: 'bg-red/15 text-red',
  },
  {
    icon: LuChartBar,
    tag: 'Economic Policy',
    year: '2024',
    title: 'Fiscal Strategy and Revenue Mobilisation',
    desc: 'Insights on broadening Lagos&apos; revenue base, deepening tax compliance and unlocking sustainable financing for development.',
    accent: 'bg-green100/15 text-green100',
  },
]

function PolicyBriefCard({ brief }) {
  const { icon: Icon, tag, year, title, desc, accent } = brief
  return (
    <article className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100 il-card">
      <div className="flex items-center justify-between">
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${accent}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
          <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            {tag}
          </span>
          <span className="text-slate-400">•</span>
          <span>{year}</span>
        </div>
      </div>
      <h3 className="text-base font-bold text-black100">{title}</h3>
      <p className="text-[13px] leading-6 text-slate-500">{desc}</p>
      <a
        href="#"
        className="mt-auto inline-flex w-fit items-center gap-1 pt-2 text-xs font-semibold text-green100 transition hover:opacity-80"
      >
        Read More <FiArrowRight className="h-3.5 w-3.5" />
      </a>
    </article>
  )
}

function PolicyBriefsGrid() {
  return (
    <section className="bg-[#F7F8FA] px-6 py-14 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-black text-green200 sm:text-3xl">Latest Policy Briefs &amp; Reports</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          Explore recent research outputs covering economic policy, investment climate, sustainability
          and the institutional reforms shaping Lagos&apos; competitive edge.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {policyBriefs.map((brief, i) => (
            <Reveal
              key={`${brief.title}-${i}`}
              direction="up"
              delay={(i % 4) * 90}
              distance={26}
            >
              <MouseTilt intensity={5}>
                <PolicyBriefCard brief={brief} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/publications"
            className="inline-flex items-center gap-2 rounded-md bg-green100 px-6 py-3 text-sm font-bold text-white transition hover:opacity-90"
          >
            View All Publications
            <FiArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SEARCH CTA ─────────────────── */

function PolicySearchCTA() {
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

export default function PolicyPage() {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={620}>
        <Reveal direction="fade" duration={900}>
          <PolicyHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="up"><PolicyStats /></Reveal>
      <Reveal direction="up"><ResearchFocusAreas /></Reveal>
      <Reveal direction="down" duration={600}><PolicyFilterBar /></Reveal>
      <Reveal direction="up"><PolicyBriefsGrid /></Reveal>
      <Reveal direction="up"><InformationSection /></Reveal>
      <Reveal direction="up"><PolicySearchCTA /></Reveal>
    </>
  )
}
