import React from 'react'

const LibraryStats = () => {

    const libraryStats = [
  { value: '300+', label: 'Research Reports' },
  { value: '50', label: 'Policy Briefs' },
  { value: '16', label: 'LGAs Studies' },
  { value: '200K+', label: 'Total Downloads' }
]

   return (
    <section id="resources" className="border-y border-gray-100 bg-gray-50 py-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {libraryStats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-5xl font-black text-[#007B5E]">{s.value}</p>
            <p className="mt-2 text-sm font-semibold text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LibraryStats