import React from 'react'

const MediaKitHero = () => {
   return (
     <section className="relative overflow-hidden bg-white skyline-bg px-6 py-14 lg:py-20"
     
     style={{
        backgroundImage: 'url(/media_hero_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}>
       <div className="relative mx-auto max-w-[1240px]">
         <h1 className="text-2xl font-bold leading-tight text-[#164E35] sm:text-3xl lg:text-[32px]">
           Media Kits
         </h1>
         <p className="mt-4 max-w-3xl text-sm leading-7 text-[#164E35] sm:text-base">
           Access a Media Kit including news, capacity, logos, branding assets and where speaker
           information and more downloadable press to support editorial and reportage coverage of
           Invest Lagos 3.0.
         </p>
       </div>
     </section>
   )
}

export default MediaKitHero