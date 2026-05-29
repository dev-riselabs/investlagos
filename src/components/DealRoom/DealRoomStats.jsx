import React from 'react'

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
)

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
)

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
  </svg>
)

const NairaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4v16M18 4v16M6 6l12 12M3 10h18M3 14h18" />
  </svg>
)

const stats = [
  { value: '$400M+', label: 'In investment commitments mobilised across summits', icon: ChartIcon },
  { value: '253', label: 'Investment proposals reviewed & qualified', icon: DocIcon },
  { value: '1st', label: 'Investment Summit anchored in Lagos State', icon: StarIcon },
  { value: '₦10B', label: 'Direct contribution to the Lagos economy', icon: NairaIcon },
]

const DealRoomStats = () => {
  return (
    <section className="bg-slate-50 px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-center text-2xl font-black text-black100 sm:text-3xl">
          The Impact. The Firsts. The Wins.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={value}
              className="rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-slate-100"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-green100/10 text-green100">
                <Icon />
              </span>
              <p className="mt-4 text-2xl font-black text-green100 sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealRoomStats
