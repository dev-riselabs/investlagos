import React from 'react'

const GalleryHeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-[340px] flex items-center px-6 py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/media_hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
     
      <div className="relative z-10 mx-auto w-full ">
        <div className="relative mx-auto max-w-[1240px]">
          {/* Main heading with exact brand colors */}
          <h1 className="text-2xl font-bold tracking-tight text-[#164E35] sm:text-3xl lg:text-[32px] leading-tight">
            Gallery from Previous Editions
          </h1>
          
          {/* Subtext paragraph */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#164E35] max-w-2xl">
            Explore moments, milestones and highlights from Invest Lagos. The gallery 
            captures the conversations, partnerships, people and experiences that 
            define one of Africa's leading investment platforms.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GalleryHeroSection