import React from 'react'
import { Reveal, MouseTilt } from '../../lib/animations'

const sectors = [
  {
    title: 'Free Trade Zones',
    desc: "Scale production near Nigeria's largest consumer and distribution base.",
    image: '/tourism.png',
  },
  {
    title: 'Health and Life Sciences',
    desc: "Leverage Lagos' deep talent pool, startup momentum, and digital demand.",
    image: '/health.png',
  },
  {
    title: 'Agribusiness & Food Systems',
    desc: 'Capture import substitution and value-chain expansion opportunities.',
    image: '/agric.jpg',
  },
  {
    title: 'Energy & Utilities',
    desc: 'Support rising demand through grid, off-grid, and industrial solutions.',
    image: '/energyimg.jpg',
  },
  {
    title: 'Housing and Urban Development',
    desc: 'Develop logistics, commercial, and mixed-use assets for rapid urban growth.',
    image: '/housing_sectors.jpg',
  },
  {
    title: 'Tourism & Creative Economy',
    desc: 'Invest in hospitality, events, media, and cultural export-driven sectors.',
    image: '/tourism.png',
  },
]

const SectorCards = () => {
  return (
    <section 
      className="py-16 lg:py-24"
      style={{ 
        backgroundImage: 'url(/bg_section_after_hero.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="mx-auto grid max-w-[1240px] gap-6 px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((s, idx) => (
          <Reveal key={s.title} direction="up" delay={(idx % 3) * 110} distance={28}>
          <MouseTilt intensity={5}>
          <article
            className="group relative h-[300px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Multi-layered dark linear overlay for clean title contrasting */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-slate-900/40 transition-opacity group-hover:opacity-95" />
            
            {/* Floating Top-Left Custom Yellow Calendar Box */}
            <div className="absolute left-5 top-5">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-[#EAB308] shadow-md">
                {/* Your exact custom White Calendar SVG */}
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_1198)">
                    <path d="M11.346 0C11.7173 0 12.0734 0.1475 12.3359 0.410051C12.5985 0.672601 12.746 1.0287 12.746 1.4V4.018H27.78V1.418C27.78 1.0467 27.9275 0.690601 28.1901 0.428051C28.4526 0.1655 28.8087 0.018 29.18 0.018C29.5513 0.018 29.9074 0.1655 30.1699 0.428051C30.4325 0.690601 30.58 1.0467 30.58 1.418V4.018H36C37.0605 4.018 38.0776 4.43915 38.8277 5.18887C39.5778 5.93858 39.9995 6.95548 40 8.016V36.002C39.9995 37.0625 39.5778 38.0794 38.8277 38.8291C38.0776 39.5788 37.0605 40 36 40H4C2.93948 40 1.92237 39.5788 1.17228 38.8291C0.422192 38.0794 0.00053026 37.0625 0 36.002L0 8.016C0.00053026 6.95548 0.422192 5.93858 1.17228 5.18887C1.92237 4.43915 2.93948 4.018 4 4.018H9.946V1.398C9.94653 1.02704 10.0943 0.671462 10.3568 0.409343C10.6193 0.147225 10.975 -3.78527e-07 11.346 0ZM2.8 15.484V36.002C2.8 36.1596 2.83104 36.3156 2.89134 36.4612C2.95165 36.6068 3.04004 36.7391 3.15147 36.8505C3.2629 36.962 3.39519 37.0504 3.54078 37.1107C3.68637 37.171 3.84241 37.202 4 37.202H36C36.1576 37.202 36.3136 37.171 36.4592 37.1107C36.6048 37.0504 36.7371 36.962 36.8485 36.8505C36.96 36.7391 37.0483 36.6068 37.1087 36.4612C37.169 36.3156 37.2 36.1596 37.2 36.002V15.512L2.8 15.484ZM13.334 29.238V32.57H10V29.238H13.334ZM21.666 29.238V32.57H18.334V29.238H21.666ZM30 29.238V32.57H26.666V29.238H30ZM13.334 21.284V24.616H10V21.284H13.334ZM21.666 21.284V24.616H18.334V21.284H21.666ZM30 21.284V24.616H26.666V21.284H30ZM9.946 6.816H4C3.84241 6.816 3.68637 6.84704 3.54078 6.90734C3.39519 6.96765 3.2629 7.05604 3.15147 7.16747C3.04004 7.2789 2.95165 7.41119 2.89134 7.55678C2.83104 7.70237 2.8 7.85841 2.8 8.016V12.686L37.2 12.714V8.016C37.2 7.85841 37.169 7.70237 37.1087 7.55678C37.0483 7.41119 36.96 7.2789 36.8485 7.16747C36.7371 7.05604 36.6048 6.96765 36.4592 6.90734C36.3136 6.84704 36.1576 6.816 36 6.816H30.58V8.674C30.58 9.0453 30.4325 9.4014 30.1699 9.66395C29.9074 9.9265 29.5513 10.074 29.18 10.074C28.8087 10.074 28.4526 9.9265 28.1901 9.66395C27.9275 9.4014 27.78 9.0453 27.78 8.674V6.816H12.746V8.656C12.746 9.0273 12.5985 9.3834 12.3359 9.64595C12.0734 9.9085 11.7173 10.056 11.346 10.056C10.9747 10.056 10.6186 9.9085 10.3561 9.64595C10.0935 9.3834 9.946 9.0273 9.946 8.656V6.816Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1198">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>

            {/* Content Container Area */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white">
              <h3 className="text-xl font-bold tracking-tight leading-snug">{s.title}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-200/90">{s.desc}</p>
              
              {/* Refactored "Details Coming Soon" block with your custom Green Arrow SVG */}
              <div className="mt-4 flex items-center justify-between gap-2 rounded bg-white px-4 py-2.5 text-xs font-semibold text-[#099567] shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
                <span>Details Coming Soon</span>
                {/* Your exact custom Green Right Arrow SVG */}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33337 8.00004H12.6667M8.00004 12.6667L12.6667 8.00004L8.00004 3.33337" stroke="#099567" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </article>
          </MouseTilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SectorCards