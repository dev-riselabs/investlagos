import React from 'react'

const projects = [
  {
    title: 'Lekki Free Trade Zone Phase II',
    sector: 'Free Trade Zones',
    location: 'Lekki, Lagos',
    ticket: '$120M',
    image: '/Business Exhibition &  Cultural Showcase_hero_bg.png',
  },
  {
    title: 'Lagos Mega Sports Arena',
    sector: 'Tourism & Creative Economy',
    location: 'Eko Atlantic, Lagos',
    ticket: '$85M',
    image: '/Business Exhibition &  Cultural Showcase_hero_bg.png',
  },
  {
    title: 'Badagry Deep-Sea Port Logistics Park',
    sector: 'Infrastructure',
    location: 'Badagry, Lagos',
    ticket: '$210M',
    image: '/Business Exhibition &  Cultural Showcase_hero_bg.png',
  },
]

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

function ProjectCard({ title, sector, location, ticket, image }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <span className="inline-block rounded bg-green100/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green100">
          {sector}
        </span>
        <h3 className="mt-3 text-sm font-black text-black100 leading-snug">{title}</h3>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-500">
            <PinIcon />
            {location}
          </span>
          <span className="font-black text-green100">{ticket}</span>
        </div>
      </div>
    </article>
  )
}

const DealRoomProjects = () => {
  return (
    <>
      {/* Filter / search bar */}
      <section className="bg-green200 px-6 py-5">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-3 rounded bg-white px-4 py-2.5 ring-1 ring-black/5">
            <span className="text-slate-400">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search projects, sponsors or sectors…"
              className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="rounded bg-white/15 px-4 py-2 text-xs font-bold text-white hover:bg-white/25 transition">
              All Sectors
            </button>
            <button className="rounded bg-yellow px-4 py-2 text-xs font-bold text-black100 hover:opacity-90 transition">
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-slate-50 px-6 py-12 lg:py-14">
        <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default DealRoomProjects
