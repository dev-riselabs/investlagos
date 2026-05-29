import React from 'react'

export const InstitutionIcon = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 1L1 6.5V8h22V6.5L12 1zM3 10v8h2v-8H3zm5.5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5.5 0v8h2v-8h-2zM1 20v2h22v-2H1z" />
  </svg>
)

const SpeakersHero = () => {
  return (
    <section className="bg-green100 px-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div className="mx-auto w-full max-w-md">
        <article className="overflow-hidden">
          <img
            src="/speakers/Asiwaju Bola Ahmed Tinubu, GCFR.png"
            alt="Asiwaju Bola Ahmed Tinubu, GCFR"
            className="block aspect-[4/5] w-full object-cover"
          />
          <div className="flex items-start gap-4 bg-green200 px-5 py-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/15 text-white">
              <InstitutionIcon />
            </div>
            <div className="text-left text-white">
              <h3 className="text-[13px] font-black uppercase tracking-wide leading-tight">
                Asiwaju Bola Ahmed Tinubu, GCFR
              </h3>
              <p className="mt-1.5 text-[12px] leading-snug text-white/80">
                President of the Federal Republic of Nigeria
              </p>
            </div>
          </div>
          <div className="h-[3px] bg-red" />
        </article>
      </div>
    </section>
  )
}

export default SpeakersHero
