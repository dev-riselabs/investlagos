import React from 'react'

const IncentiveCard = ({ item }) => {
  const isGreen = item.band === 'green'
  const imageRight = item.layout === 'imageRight'

  const Image = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-sm lg:h-[340px]">
      <img 
        src={item.image} 
        alt={item.title} 
        className="h-full w-full object-cover" 
      />
    </div>
  )

  const Text = (
    /* Text matches the dark slate coloring on white surfaces regardless of outer green band */
    <div className={`flex flex-col justify-center px-2 py-4 lg:px-6 ${isGreen ? 'text-slate-900' : 'text-slate-900'}`}>
      {/* Sector Incentive Header with Vertical Line Accent */}
      <div className="flex items-center gap-2">
        <span className="h-10 w-[3px] bg-[#007B5E]" />
        <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#007B5E]">
          Sector Incentives
        </p>
      </div>

      {/* Card Title */}
      <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {item.desc}
      </p>

      {/* Bullets List */}
      <ul className="mt-6 space-y-3">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm leading-relaxed">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm bg-white border border-slate-100">
              {/* Preserved your custom SVG checkmark perfectly */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.768 15.64L16.768 9.64L15.232 8.36L10.932 13.519L8.707 11.293L7.293 12.707L10.293 15.707L11.067 16.481L11.768 15.64Z" fill="#099567"/>
              </svg>
            </span>
            <span className="text-slate-700 font-medium">
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className={`w-full px-4 py-8 md:px-8 ${isGreen ? 'bg-[#007B5E]' : 'bg-slate-50/50'}`}>
      <div className={`mx-auto grid max-w-[1240px] items-center gap-8 rounded-4xl p-6 md:p-10 lg:grid-cols-2 lg:gap-16 ${
        isGreen 
          ? 'bg-white shadow' 
          : 'bg-slate-100/80 shadow'
      }`}>
        {imageRight ? (
          <>
            <div className="order-1 lg:order-1">{Text}</div>
            <div className="order-2 lg:order-2">{Image}</div>
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{Image}</div>
            <div className="order-1 lg:order-2">{Text}</div>
          </>
        )}
      </div>
    </section>
  )
}

export default IncentiveCard