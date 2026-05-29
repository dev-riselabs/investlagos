import React from 'react'

const MediaSection = () => {
    const mediaArticles = [
  { category: 'COMMERCE', image: '/investment_deal.png', title: 'Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy', excerpt: 'Lagos State Government has unveiled its much-awaited Lagos Investment Deal Book, an unprecedented compendium of de-risked, investment-ready projects across sectors.' },
  { category: 'INVESTMENT', image: '/business_day.png', title: 'Invest Lagos 3.0 Press Conference Forecasts Over N4 Trillion In Investment Opportunities', excerpt: 'The summit will bring together global investors, policymakers, and industry leaders to explore structured opportunities across priority sectors.' },
  { category: 'SKILLS & POLICY', image: '/youth_skills.png', title: 'AfCFTA Creates New Pathways For Lagos Businesses and Youth', excerpt: 'With the AfCFTA fully operational, Lagos businesses and youth talent are positioned to access a combined market of 1.4 billion consumers across Africa.' }
]

return (
    <section id="news" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">Media Center</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-black text-gray-900">Latest updates, stories and insights from the heart of Lagos&apos; investment ecosystem.</h2>
          </div>
          <a href="#" className="shrink-0 rounded border border-[#007B5E] px-6 py-3 text-sm font-bold text-[#007B5E] hover:bg-[#007B5E] hover:text-white transition">View All News</a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaArticles.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-sm ring-1 ring-gray-100 bg-white shadow-sm hover:shadow-lg transition group">
              <div className="relative h-52 overflow-hidden bg-gray-100"><img src={a.image} alt={a.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-6">
                <span className="rounded bg-[#007B5E]/10 px-3 py-1 text-xs font-black text-[#007B5E]">{a.category}</span>
                <h3 className="mt-4 text-base font-black leading-snug text-gray-900">{a.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">{a.excerpt}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#007B5E] hover:underline">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaSection