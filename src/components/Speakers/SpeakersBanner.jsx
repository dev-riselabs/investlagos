import React from 'react'

const SpeakersBanner = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url(/youth_skills.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-green100/85" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-16 lg:py-24">
        <div className="flex items-center gap-3">
          <span className="block h-4 w-px bg-white" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
            Confirmed Speakers
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          Meet the leaders shaping Africa&apos;s most dynamic investment landscape
        </h1>

        <div className="mt-6 h-[2px] w-16 bg-white/60" />
      </div>
    </section>
  )
}

export default SpeakersBanner
