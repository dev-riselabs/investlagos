import React from 'react'

const ReadyCTA = () => {
  return (
    <section
      className="relative overflow-hidden px-6 py-20 lg:py-24 border-t border-slate-100"
      style={{ backgroundImage: 'url(/bg_cta.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2">
        
        {/* Left Content Side */}
        <div>
          <h3 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Ready to Access <span className="text-[#007B5E]">These Incentives?</span>
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600">
            Our One-Stop Service Center (OSSC) is ready to help you identify and apply for the incentives applicable to your project.
          </p>
        </div>

        {/* Right Buttons Side */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
          
          {/* Button 1: Speak with a Consultant */}
          <button className="group flex w-full sm:w-auto items-center justify-between gap-6 rounded bg-[#091E1A] pl-6 pr-2.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#112d28] transition-all duration-300">
            <span>Speak with a Consultant</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 text-white group-hover:translate-x-0.5 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </span>
          </button>

          {/* Button 2: Explore Priority Sectors */}
          <button className="group flex w-full sm:w-auto items-center justify-between gap-6 rounded bg-[#007B5E] pl-6 pr-2.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#00634b] transition-all duration-300">
            <span>Explore Priority Sectors</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-white/10 text-white group-hover:translate-x-0.5 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default ReadyCTA