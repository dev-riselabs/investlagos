import React from 'react'
import { useState } from 'react'

   const sessionDays = [
  { label: 'Day 1', date: '8 June 2026', items: ['Opening Ceremony & Welcome Address', "Keynote: Africa's Investment Decade", 'Strategic Dialogues on Trade & Finance', 'Gala Dinner & Cultural Evening'] },
  { label: 'Day 2', date: '9 June 2026', items: ['High-Level Panels: Infrastructure & Energy', 'Deal Rooms & Investment Showcases', 'AfCFTA & Lagos Business Opportunities', 'Music & Networking Evening'] },
  { label: 'Day 3', date: '10 June 2026', items: ['Tolaram / Lagos Free Zone', 'Lekki Free Trade Zone', 'Dangote Fertilizer Plant', 'Dangote Petroleum Refinery', 'Russell Smith 3D Printing & Manufacturing Factory'], note: 'Industrial & Infrastructure Site Tour' }
]

const SessionsSection = () => {

    
   const [active, setActive] = useState(0)
   const day = sessionDays[active]



   return (
     <section id="sectors" className="bg-white py-20 lg:py-28">
       <div className="mx-auto max-w-[1240px] px-6">
         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
           <div>
             <span className="rounded-sm bg-[#007B5E]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#007B5E]">Summit Sessions</span>
             <h2 className="mt-4 max-w-3xl text-2xl font-black text-gray-900 sm:text-3xl">Keynotes. Strategic Dialogues. High-Level Panels. Deal Rooms. Gala Dinner. Cultural Experiences. Music &amp; Networking.</h2>
           </div>
         </div>
         <div className="mt-10 flex gap-2 rounded-sm border border-gray-100 bg-gray-50 p-1 w-fit">
           {sessionDays.map((d, i) => (
             <button key={d.label} onClick={() => setActive(i)} className={`rounded-sm px-6 py-2 text-sm font-bold transition ${active === i ? 'bg-[#007B5E]' : 'text-gray-600 hover:bg-gray-100'}`}>{d.label}</button>
           ))}
         </div>
         <div className="mt-8 rounded-sm border border-gray-100 bg-gray-50 p-8">
           <div>
             <span className="inline-block rounded bg-[#F4C430] px-3 py-1 text-xs font-black text-gray-900">{day.label}</span>
             <h3 className="mt-4 text-2xl font-black text-gray-900">{day.date}</h3>
             {day.note && <p className="mt-1 text-sm font-semibold text-[#007B5E]">{day.note}</p>}
           </div>
           <ul className="mt-8 space-y-4">
             {day.items.map((item) => (
               <li key={item} className="flex items-center gap-4 rounded-sm border border-gray-200 bg-white px-6 py-4 text-sm font-medium text-gray-800 shadow-sm"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#007B5E]/10 text-[#007B5E]">✦</span>{item}</li>
             ))}
           </ul>
         </div>
       </div>
     </section>
   )
}

export default SessionsSection