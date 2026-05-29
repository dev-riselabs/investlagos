import React from 'react'

const kpis = [
  { value: '$52B', label: 'Total pipeline value', accent: 'bg-yellow text-black100' },
  { value: '52',   label: 'Active sector clusters', accent: 'bg-white/10 text-white' },
  { value: '552',  label: 'Vetted opportunities', accent: 'bg-white/10 text-white' },
  { value: 'KPI',  label: 'Live performance index', accent: 'bg-yellow/90 text-black100' },
]

// Hard-coded chart series — Major Mega Sectors (Lagos)
const bars = [
  { label: 'Agri',     height: 70, color: '#FDEC3F' },
  { label: 'Energy',   height: 90, color: '#ED212B' },
  { label: 'Health',   height: 55, color: '#11A892' },
  { label: 'Housing',  height: 75, color: '#562579' },
  { label: 'FTZ',      height: 60, color: '#3B7FCD' },
  { label: 'Tourism',  height: 40, color: '#63CAA8' },
]

const DealRoomHub = () => {
  return (
    <section className="bg-green100 px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-block rounded bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
            Investment Hub
          </span>
          <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
            Investment Hub
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80">
            Track the impact of the Invest Lagos programme at a glance —
            live performance, pipeline value, and the sectors driving the
            largest share of investor interest.
          </p>
        </div>

        {/* Body: KPIs (left) + chart (right) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          {/* KPI tiles */}
          <div className="grid grid-cols-2 gap-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className={`rounded-md p-5 ${k.accent}`}
              >
                <p className="text-2xl font-black sm:text-3xl">{k.value}</p>
                <p className="mt-2 text-[11px] font-semibold leading-5 opacity-90">
                  {k.label}
                </p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="rounded-lg bg-white p-5 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-black100">
                Major Mega Sectors (Lagos)
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green100">
                2026
              </span>
            </div>

            <div className="mt-5 flex h-48 items-end justify-between gap-2 sm:gap-3">
              {bars.map((b) => (
                <div key={b.label} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t"
                    style={{ height: `${b.height}%`, background: b.color }}
                  />
                  <span className="text-[10px] font-bold text-slate-500">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-10">
          <button className="rounded bg-yellow px-6 py-3 text-sm font-black text-black100 transition hover:opacity-90">
            Get Certificate
          </button>
        </div>
      </div>
    </section>
  )
}

export default DealRoomHub
