import React from 'react'

const FutureLeadersHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#032F74CC] px-4 md:px-10 lg:px-20 py-14 text-white lg:py-20"
      style={{
        backgroundImage: "url(/youth_skills.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#032F74CC]/99 via-[#032F74CC]/95 to-[#032F74CC]/85" />
      <div className="relative mx-auto max-w-310">
       
        <h1 className="mt-6 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-[34px] lg:leading-tight">
          The Invest Lagos Future Leaders Movement
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
        The Invest Lagos Future Leaders Movement is designed to support youth participation in the summit, strengthen operational capacity and expose young people to high-level governance, innovation, investment and summit coordination environments.
        </p>
      </div>
    </section>
  )
}

export default FutureLeadersHero