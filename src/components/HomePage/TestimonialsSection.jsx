import React from 'react'


const TestimonialsSection = () => {

    const testimonials = [
  { quote: 'Lagos rewards vision, resilience, and scale. If you can build successfully in Lagos, you can compete anywhere in the world.', name: 'Aliko Dangote', title: 'Chairman, Dangote Group', initials: 'AD' },
  { quote: 'Lagos gives entrepreneurs the energy, market, and momentum required to turn bold ideas into enduring institutions.', name: 'Stella Okoli', title: 'Chairman/CEO, Emzor Pharmaceuticals', initials: 'SO' },
  { quote: 'The world is increasingly looking toward African stories, African talent, and African markets—and Lagos sits at the centre of that transformation.', name: 'Mo Abudu', title: 'CEO, Ebony Life Group', initials: 'MA' }
]

  return (
   <section className="bg-[#06120e] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wider text-white sm:text-3xl lg:text-4xl">What Global Leaders Think About Lagos…</h2>
            <div className="mt-3 h-0.5 w-24 bg-[#007B5E]" />
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition">◀</button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition">▶</button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-sm border border-white/10 bg-white/5 p-8 backdrop-blur">
              <span className="block text-5xl font-black leading-none text-[#F4C430] opacity-60">&ldquo;</span>
              <p className="mt-2 text-base leading-7 text-gray-300">{t.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#007B5E] text-sm font-black text-white">{t.initials}</div>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection