import React from 'react'
import { Reveal, MouseTilt } from '../../lib/animations'

const projects = [
  {
    title: 'Power Grid Investment',
    subtitle: 'This is a good deal',
    tags: ['Nigeria', 'Energy', 'Development'],
    required: '$100K',
    raised: '$50K',
    image: '/Business Exhibition &  Cultural Showcase_hero_bg.png',
  },
  {
    title: 'Payment gateways',
    subtitle: 'This is a good deal',
    tags: ['Nigeria', 'Technology', 'Development'],
    required: '$100K',
    raised: '$50K',
    image: '/Business Exhibition &  Cultural Showcase_hero_bg.png',
  },
  {
    title: 'Green Africa Investment',
    subtitle: 'This is a good deal',
    tags: ['Nigeria', 'Energy', 'Development'],
    required: '$100K',
    raised: '$50K',
    image: '/Green Africa Investment.png',
  },
]

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)


const FunnelIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function FilterPill({ label }) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-md bg-white px-4 py-2.5 text-xs font-medium text-black100 shadow-sm transition hover:bg-slate-50"
    >
      <span className="text-black100">
        <FunnelIcon />
      </span>
      <span className="flex-1 text-left">{label}</span>
      <span className="text-black100">
        <ChevronDownIcon />
      </span>
    </button>
  )
}

function ProjectCard({ title, subtitle, tags, required, raised, image }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-300 px-3 py-0.5 text-[11px] font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base font-black text-black100 leading-snug">{title}</h3>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-green100">{subtitle}</p>

        {/* Required / Raised */}
        <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Required:</span>
            <span className="font-semibold text-slate-700">{required}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Raised:</span>
            <span className="font-bold text-green100">{raised}</span>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-4 border-t border-slate-100 pt-4">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-semibold text-black100 hover:text-green100 transition"
          >
            View Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

const DealRoomProjects = () => {
  return (
    <>
      {/* Filter / search bar */}
      <section className="bg-green200 px-6 py-6">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-3">
          {/* Search pill */}
          <div className="flex items-center gap-3 rounded-full border border-white/40 bg-transparent px-5 py-2.5 w-full sm:w-80">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-green200">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search reports..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/70"
            />
          </div>

          {/* Filter dropdowns */}
          <FilterPill label="All Categories" />
          <FilterPill label="All Years" />
          <FilterPill label="All..." />
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-slate-50 px-6 py-12 lg:py-14">
        <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={i * 110} distance={28}>
              <MouseTilt intensity={5}>
                <ProjectCard {...p} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default DealRoomProjects
