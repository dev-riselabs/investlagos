import React from 'react'

const WhatToExpect = () => {
    const features = [
        {
            title: 'Sector Overview',
            desc: 'Market opportunity, key data, and competitive advantages.',
            accent: '#ED212B'
        },
        {
            title: 'Policy & Regulatory Support',
            desc: 'Relevant government frameworks and reform initiatives.',
            accent: '#DEA310'
        },
        {
            title: 'Sector-Specific Incentives',
            desc: 'Tax advantages, free zone relevance, and targeted programs.',
            accent: '#3B7FCD'
        },
        {
            title: 'Sample Opportunities',
            desc: 'Approved investment projects ready for engagement.',
            accent: '#099567'
        },
        {
            title: 'Investment Estimator',
            desc: 'Model potential returns based on sector benchmarks.',
            accent: '#562579'
        },
        {
            title: 'Sector Desk',
            desc: 'Direct contact with sector-specific advisory teams.',
            accent: '#E8722A'
        },
    ]

    return (
        <section className="bg-[#F3F6FA] py-16 lg:py-24">
            <div className="mx-auto max-w-[1240px] px-6">
                {/* Top Header Labels */}
                <div className='border-l-4 border-[#007B5E] py-4 pl-3.5'>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">What to Expect</p>
                </div>
                <h2 className="mt-3 text-3xl font-normal text-gray-900 sm:text-4xl">
                    <span className="text-[#ED212B] font-semibold">Each Sector</span> Page Includes
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-gray-500">
                    Detailed sector pages are being developed with comprehensive investor information.
                </p>

                {/* Feature Cards Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border-b-[6px] transition duration-300 hover:shadow-md"
                            style={{ borderBottomColor: f.accent }}
                        >
                            <div>
                                <div className="flex items-center gap-4">
                                    {/* Icon Container featuring your Custom #F1FAF2 background */}
                                    <span className="flex h-10 w-10 border border-gray-200 shrink-0 items-center justify-center rounded-sm bg-[#F1FAF2]">
                                        {/* Your exact custom Scale Up trend graph SVG */}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 10.5V19.5C20 19.966 20 20.199 19.924 20.383C19.8223 20.6275 19.6277 20.8217 19.383 20.923C19.199 21 18.966 21 18.5 21C18.034 21 17.801 21 17.617 20.924C17.3725 20.8223 17.1783 20.6277 17.077 20.383C17 20.199 17 19.966 17 19.5V10.5C17 10.034 17 9.801 17.076 9.617C17.1777 9.37246 17.3723 9.17826 17.617 9.077C17.801 9 18.034 9 18.5 9C18.966 9 19.199 9 19.383 9.076C19.6275 9.17771 19.8217 9.37227 19.923 9.617C20 9.801 20 10.034 20 10.5Z" stroke="#099567" strokeWidth="1.5" strokeLinejoin="round" />
                                            <path d="M16 3H19V6" stroke="#099567" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.5 3.5C18.5 3.5 14.5 8.5 4 12" stroke="#099567" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13 14V19.5C13 19.966 13 20.199 12.924 20.383C12.8223 20.6275 12.6277 20.8217 12.383 20.923C12.199 21 11.966 21 11.5 21C11.034 21 10.801 21 10.617 20.924C10.3725 20.8223 10.1783 20.6277 10.077 20.383C10 20.199 10 19.966 10 19.5V14C10 13.534 10 13.301 10.076 13.117C10.1777 12.8725 10.3723 12.6783 10.617 12.577C10.801 12.5 11.034 12.5 11.5 12.5C11.966 12.5 12.199 12.5 12.383 12.576C12.6275 12.6777 12.8217 12.8723 12.923 13.117C13 13.301 13 13.534 13 14ZM6 16.5V19.5C6 19.966 6 20.199 5.924 20.383C5.82229 20.6275 5.62773 20.8217 5.383 20.923C5.199 21 4.966 21 4.5 21C4.034 21 3.801 21 3.617 20.924C3.37246 20.8223 3.17826 20.6277 3.077 20.383C3 20.199 3 19.966 3 19.5V16.5C3 16.034 3 15.801 3.076 15.617C3.17771 15.3725 3.37227 15.1783 3.617 15.077C3.801 15 4.034 15 4.5 15C4.966 15 5.199 15 5.383 15.076C5.62754 15.1777 5.82174 15.3723 5.923 15.617C6 15.801 6 16.034 6 16.5Z" stroke="#099567" strokeWidth="1.5" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <h3 className="text-sm font-bold tracking-tight text-slate-900">{f.title}</h3>
                                </div>
                                <p className="mt-4 text-xs leading-relaxed text-gray-500">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic Mockup Bottom Banner Panel */}
                <div
                    className="mt-16 flex flex-col items-center justify-center sm:justify-between gap-6 rounded-2xl bg-white px-8 h-80 shadow-sm md:flex-row"
                    style={{
                        backgroundImage: 'url(/sector_wte_bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="flex flex-col items-start gap-4 sm:flex-row ">
                        {/* White Rounded Container Circle for Handshake SVG */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F1FAF2] shadow-sm">
                            {/* Your exact custom Shake Hands SVG */}
                            <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5078 11.6562L14.3984 21.7812C14.0391 22.1797 14.0547 22.7969 14.4375 23.1797C16.8203 25.5625 20.6875 25.5625 23.0703 23.1797L25.5547 20.6953C25.8828 20.3672 26.2969 20.1875 26.7188 20.1563C27.25 20.1094 27.7969 20.2891 28.2031 20.6953L42 34.375L47.5 30V7.5L38.75 12.5L36.8906 11.2578C35.6569 10.4372 34.2082 9.99964 32.7266 10H27.2266C27.1406 10 27.0469 10 26.9609 10.0078C25.6406 10.0781 24.3984 10.6719 23.5078 11.6562ZM11.6094 19.2734L19.9531 10H16.8594C14.8672 10 12.9609 10.7891 11.5547 12.1953L11.25 12.5L2.5 7.5V30L14.7188 40.1797C16.5156 41.6797 18.7812 42.5 21.1172 42.5H22.3438L21.7969 41.9531C21.0625 41.2188 21.0625 40.0313 21.7969 39.3047C22.5312 38.5781 23.7188 38.5703 24.4453 39.3047L27.6484 42.5078H28.3516C29.8438 42.5078 31.3047 42.1719 32.6328 41.5469L30.5469 39.4531C29.8125 38.7188 29.8125 37.5313 30.5469 36.8047C31.2812 36.0781 32.4688 36.0703 33.1953 36.8047L35.6953 39.3047L37.0625 37.9375C37.7578 37.2422 37.9609 36.2344 37.6562 35.3516L26.8828 24.6641L25.7188 25.8281C21.8672 29.6797 15.6328 29.6797 11.7812 25.8281C9.98438 24.0313 9.91406 21.1484 11.6094 19.2656V19.2734Z" fill="#099567" />
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-2xl font-bold tracking-tight text-[#007B5E]">Interested in a Sector?</h4>
                            <p className="mt-1 text-sm text-slate-600 max-w-xl leading-normal">
                                Connect with our investment desk to discuss sector-specific opportunities, incentives, and support services.
                            </p>
                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row mt-5">
                                <button className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#099567] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#077D56]">
                                    <span>Speak to an Advisor</span>
                                    <span className="text-xs">➔</span>
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-900 hover:border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
                                    <span>View Incentives</span>
                                    <span className="text-xs">➔</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Group Actions Block */}

                </div>

            </div>
        </section>
    )
}

export default WhatToExpect