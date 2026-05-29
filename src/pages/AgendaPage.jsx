/* ─────────────────── DATA ─────────────────── */

const days = [
  {
    label: 'Day 1',
    date: '8 June 2026',
    sessions: [
      {
        time: '09:00 – 10:30',
        title: 'Opening Ceremony & Welcome Address',
        desc: 'Official opening by H.E. Governor Babajide Sanwo-Olu with a keynote on Lagos\u2019 vision for Africa\u2019s investment decade.',
        topics: ['Governor\u2019s keynote', 'State of the Lagos economy', 'Vision 2030 highlights'],
      },
      {
        time: '11:00 – 12:30',
        title: 'Africa\u2019s Investment Decade — Plenary',
        desc: 'A high-level conversation on how Lagos and Africa are repositioning for the next wave of global capital.',
        topics: ['AfCFTA & cross-border trade', 'Capital markets reform', 'Investor confidence outlook'],
      },
      {
        time: '14:00 – 16:00',
        title: 'Strategic Dialogues on Trade & Finance',
        desc: 'Sectoral breakout sessions with bilateral chambers, DFIs and institutional investors.',
        topics: ['Bilateral trade corridors', 'Blended finance instruments', 'Investor-state dialogues'],
      },
      {
        time: '19:00 – Late',
        title: 'Gala Dinner & Cultural Evening',
        desc: 'A celebration of Lagos\u2019 creative heritage with curated performances and networking.',
        topics: ['Curated cultural showcase', 'Ministerial roundtables', 'Investor mingling'],
      },
    ],
  },
  {
    label: 'Day 2',
    date: '9 June 2026',
    sessions: [
      {
        time: '09:00 – 10:30',
        title: 'High-Level Panels: Infrastructure & Energy',
        desc: 'Deep dive into Lagos\u2019 pipeline of bankable infrastructure and energy projects.',
        topics: ['Power generation & distribution', 'Transit & mobility', 'PPP frameworks'],
      },
      {
        time: '11:00 – 13:00',
        title: 'Deal Rooms & Investment Showcases',
        desc: 'Curated one-on-one meetings between project sponsors and qualified investors.',
        topics: ['Pre-matched investor meetings', 'Project pitch sessions', 'Due-diligence support'],
      },
      {
        time: '14:30 – 16:30',
        title: 'AfCFTA & Lagos Business Opportunities',
        desc: 'How Lagos businesses can leverage the AfCFTA for continental expansion.',
        topics: ['Export-ready sectors', 'Rules of origin', 'Cross-border payments'],
      },
      {
        time: '19:00 – Late',
        title: 'Music & Networking Evening',
        desc: 'Live performances and informal networking with delegates and partners.',
        topics: ['Open networking', 'Live performances', 'Partner activations'],
      },
    ],
  },
  {
    label: 'Day 3',
    date: '10 June 2026',
    sessions: [
      {
        time: '08:00 – 17:00',
        title: 'Industrial & Infrastructure Site Tour',
        desc: 'A curated full-day tour of flagship industrial and infrastructure assets in and around Lagos.',
        topics: [
          'Tolaram / Lagos Free Zone',
          'Lekki Free Trade Zone',
          'Dangote Fertilizer Plant',
          'Dangote Petroleum Refinery',
          'Russell Smith 3D Printing & Manufacturing Factory',
        ],
      },
    ],
  },
]

/* ─────────────────── SECTIONS ─────────────────── */

function AgendaHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#06120e] px-6 py-16 text-white lg:py-20"
      style={{ backgroundImage: 'url(/agenda_hero_bg.png.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#06120e]/95 via-[#06120e]/85 to-[#06120e]/50" />
      <div className="relative mx-auto max-w-[1240px]">
        {/* <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F4C430]">Programme &amp; Agenda</p> */}
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Programme flow: Explore sessions and build your unique schedule
          {/* <span className="text-[#F4C430]">Explorations</span> and build your engagement checklist */}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
          Through keynote addresses, sector sessions, deal rooms, exhibitions, networking engagements and cultural experiences,
          participants will engage directly with the people and institutions shaping Lagos' future.
        </p>
      </div>
    </section>
  )
}

function AgendaSearch() {
  return (
    <section className="bg-[#007B5E] px-6 py-6">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-3 rounded bg-white px-4 py-3 ring-1 ring-black/5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          <input
            type="text"
            placeholder="Search sessions, speakers or topics…"
            className="flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <button className="rounded bg-[#F4C430] px-6 py-3 text-sm font-bold text-[#06120e] hover:bg-[#e0b321] transition">
          Filter Sessions
        </button>
      </div>
    </section>
  )
}

function AgendaTimeline() {
  return (
    <section className="bg-[#06120e] px-6 py-14 text-white lg:py-20">
      <div className="mx-auto max-w-[1240px] space-y-14">
        {days.map((d) => (
          <div key={d.label}>
            {/* Day header */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-[#F4C430] text-[#06120e]">
                <span className="text-[10px] font-bold uppercase">Day</span>
                <span className="text-xl font-black leading-none">{d.label.split(' ')[1]}</span>
              </div>
              <div>
                <h3 className="text-xl font-black sm:text-2xl">{d.label}</h3>
                <p className="text-sm text-[#F4C430]">{d.date}</p>
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-5">
              {d.sessions.map((s) => (
                <article
                  key={s.title}
                  className="grid gap-6 rounded-lg border border-white/10 bg-[#0a1e15] p-6 lg:grid-cols-[170px_1fr] lg:p-8"
                >
                  <div className="lg:border-r lg:border-white/10 lg:pr-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C430]">Time</p>
                    <p className="mt-2 text-sm font-bold text-white">{s.time}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">{s.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-gray-300">{s.desc}</p>
                    <div className="mt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4C430]">Key Topics</p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {s.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs leading-5 text-gray-300">
                            <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#007B5E] text-[8px] text-white">✓</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function DontMissCTA() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">Save Your Seat</p>
          <h3 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
            Don&apos;t miss out on these key events
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
            Register your interest to get session reminders, speaker briefs and access to the official Invest Lagos
            3.0 delegate platform.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 transition hover:bg-gray-100"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#007B5E] text-2xl text-white shadow-md">▶</span>
          <span className="text-sm font-bold text-gray-900">Watch the summit trailer</span>
        </a>
      </div>
    </section>
  )
}

function ContactCards() {
  const cards = [
    { title: 'Delegate Support', desc: 'For registration, accreditation and on-site logistics.', value: 'delegates@investlagos.ng' },
    { title: 'Investor Desk', desc: 'For investment enquiries and curated deal-room access.', value: 'invest@investlagos.ng' },
    { title: 'Media & Press', desc: 'For accreditation, interviews and partnership coverage.', value: 'press@investlagos.ng' },
    { title: 'Partnership Office', desc: 'For sponsorship, exhibition and partnership opportunities.', value: 'partners@investlagos.ng' },
  ]
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-[#007B5E]/10 text-[#007B5E]">✉</span>
            <h4 className="mt-4 text-base font-black text-gray-900">{c.title}</h4>
            <p className="mt-2 text-xs leading-5 text-gray-500">{c.desc}</p>
            <p className="mt-3 text-sm font-bold text-[#007B5E]">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AgendaFooterCTA() {
  return (
    <section className="bg-[#007B5E] px-6 py-12">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-4 rounded-lg bg-[#0a1e15] p-6 sm:flex-row sm:justify-between sm:p-8">
        <div>
          <h4 className="text-lg font-black text-white sm:text-xl">Get the full programme — PDF</h4>
          <p className="mt-1 text-xs text-white/70">Download the latest agenda with speaker bios and session links.</p>
        </div>
        <a
          href="#"
          className="rounded bg-[#F4C430] px-6 py-3 text-sm font-bold text-[#06120e] hover:bg-[#e0b321] transition"
        >
          Download Agenda →
        </a>
      </div>
    </section>
  )
}

export default function AgendaPage() {
  return (
    <>
      <AgendaHero />
      <AgendaSearch />
      <AgendaTimeline />
      <DontMissCTA />
      <ContactCards />
      <AgendaFooterCTA />
    </>
  )
}

