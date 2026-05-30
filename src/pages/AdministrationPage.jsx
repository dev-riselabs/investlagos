import { IoMdSearch } from 'react-icons/io'
import { FiArrowUpRight, FiUsers } from 'react-icons/fi'
import {
  LuDollarSign,
  LuCalendar,
  LuHandshake,
  LuMegaphone,
  LuTruck,
} from 'react-icons/lu'
import InformationSection from '../components/HomePage/InformationSection'

/* ─────────────────── HERO ─────────────────── */

function AdministrationHero() {
  return (
    <section className="bg-green100 px-6 py-14 text-white lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-[32px]">
          Administrative Secretariat
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          The Administrative Secretariat functions to support the effective planning, coordination
          and delivery of Invest Lagos 3.0. It serves as the central operational nerve centre,
          ensuring all summit governance, logistics and programme execution.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── INTRO (text + image) ─────────────────── */

function AdministrationIntro() {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-black leading-tight text-green200 sm:text-3xl lg:text-[32px]">
            Invent Lagos 3.0 Administration
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Delivered through a deeply experienced team of professionals working across strategy,
            programming, operations, stakeholder engagement and bilateral coordination, the
            Secretariat ensures that the Summit delivers measurable outcomes for the State, its
            partners, investors and every delegate who participates.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            It is the structure behind the structure, enabling Lagos to host one of the most
            ambitious investment convenings on the continent.
          </p>
        </div>
        <div className="w-full">
          <img
            src="/governance_structure_hero_image.png"
            alt="Administrative Secretariat at work"
            className="w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CORE RESPONSIBILITIES ─────────────────── */

const responsibilities = [
  {
    icon: LuDollarSign,
    title: 'Delegate Services',
    desc: 'Registration, check-in support, hospitality coordination and full delegate experience management throughout the Summit.',
    accent: 'bg-green100/15 text-green100',
  },
  {
    icon: FiUsers,
    title: 'Stakeholder Engagement',
    desc: 'Bilateral coordination, partner liaison, government relations and curated stakeholder convenings.',
    accent: 'bg-yellow/20 text-[#B8860B]',
  },
  {
    icon: LuCalendar,
    title: 'Programme Coordination',
    desc: 'Programme oversight, session scheduling, speaker management and end-to-end agenda delivery.',
    accent: 'bg-orange/15 text-orange',
  },
  {
    icon: LuHandshake,
    title: 'Partnerships & Sponsorships',
    desc: 'Building strategic partnerships with development institutions, private sector leaders and sponsors.',
    accent: 'bg-green100/15 text-green100',
  },
  {
    icon: LuMegaphone,
    title: 'Media & Communications',
    desc: 'Press relations, media accreditation, content strategy, public communications and brand stewardship.',
    accent: 'bg-yellow/20 text-[#B8860B]',
  },
  {
    icon: LuTruck,
    title: 'Operations & Logistics',
    desc: 'Venue operations, transport coordination, security logistics and on-the-ground execution support.',
    accent: 'bg-orange/15 text-orange',
  },
]

function CoreResponsibilities() {
  return (
    <section className="bg-[#F5F7F6] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-black text-green200 sm:text-3xl">Our Core Responsibilities</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
          The Administrative Secretariat is the central coordinating office for Invest Lagos 3.0,
          providing administrative support and oversight across every workstream that defines the
          delivery of the Summit.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {responsibilities.map(({ icon: Icon, title, desc, accent }) => (
            <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${accent}`}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CONNECT CTA ─────────────────── */

function ConnectCTA() {
  return (
    <section className="bg-green100 px-6 py-16 lg:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Connect with the Administrative Secretariat
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          For all matters relating to Invest Lagos 3.0 administration, partner engagement,
          delegate support, programme coordination or general inquiries. Our team is ready to
          assist and support every aspect of your Invest Lagos 3.0 participation.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-red px-8 py-3 text-sm font-bold text-white transition hover:opacity-90"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

/* ─────────────────── SEARCH CTA ─────────────────── */

function AdministrationSearchCTA() {
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

export default function AdministrationPage() {
  return (
    <>
      <AdministrationHero />
      <AdministrationIntro />
      <CoreResponsibilities />
      <ConnectCTA />
      <InformationSection />
      <AdministrationSearchCTA />
    </>
  )
}
