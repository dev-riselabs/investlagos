import React from 'react'

const SpeakersSection = () => {
    const speakers = [
  { name: 'H.E. Gov. Babajide Sanwo-Olu', title: 'Governor, Lagos State', photo: '/Sanwolu.png', initials: 'BS' },
  { name: 'Lord Marland', title: 'Chairman, Commonwealth Enterprise and Investment Council', photo: '/Marland.png', initials: 'LM' },
  { name: 'Folashade Ambrose-Medebem', title: 'Commissioner, Commerce, Cooperatives, Trade & Investment, Lagos State', photo: '/Folashade.png', initials: 'FA' },
  { name: 'His Excellency, Mr. Wamkele Mena', title: 'Secretary-General, African Continental Free Trade Area', photo: null, initials: 'WM' },
  { name: 'Mrs. Kanayo Awani', title: 'Executive Vice President, Afreximbank', photo: null, initials: 'KA' }
]

  return (
   <section id="speakers" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">Featured Speakers</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black text-gray-900 sm:text-4xl">Meet the leaders shaping Africa&apos;s most dynamic investment landscape</h2>
            <div className="mt-3 h-0.5 w-24 bg-[#007B5E]" />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#007B5E] hover:underline">View All Speakers →</a>
            <span className="text-sm text-gray-400">1 of 7</span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s) => (
            <article key={s.name} className="overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition">
              {s.photo ? (
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img src={s.photo} alt={s.name} className="h-full w-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06120e]/60 to-transparent" />
                </div>
              ) : (
                <div className="flex h-72 items-end bg-gradient-to-b from-[#007B5E] to-[#06120e] p-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-2xl font-black text-white">{s.initials}</div>
                </div>
              )}
              <div className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-[#007B5E]/10 text-[#007B5E]">★</div>
                <h3 className="text-lg font-black leading-snug text-gray-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">{s.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection