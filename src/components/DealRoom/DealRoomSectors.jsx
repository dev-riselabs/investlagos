import React from 'react'
import { Reveal, MouseTilt } from '../../lib/animations'

const sectors = [
  { title: 'Agribusiness & Food System', image: '/Agribusiness & Food System.png' },
  { title: 'Energy & Utilities',         image: '/Clean Energy & Power.png' },
  { title: 'Health and Life Sciences',   image: '/Health and Life Sciences.png' },
  { title: 'Housing and Urban Development', image: '/Housing and Urban Development.png' },
  { title: 'Free Trade Zones',           image: '/Free Trade Zones.png' },
  { title: 'Tourism and Creative Economy', image: '/Tourism and Creative Economy.png' },
]

const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
  </svg>
)

function SectorCard({ title, image }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="text-green100">
          <TagIcon />
        </span>
        <h3 className="text-xs font-bold text-black100 sm:text-sm">{title}</h3>
      </div>
    </article>
  )
}

const DealRoomSectors = () => {
  return (
    <section className="bg-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center text-2xl font-black text-black100 sm:text-3xl">
          Focus Sectors
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={(i % 3) * 100} distance={26}>
              <MouseTilt intensity={5}>
                <SectorCard {...s} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealRoomSectors
