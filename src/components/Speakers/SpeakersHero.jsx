import React from "react";

export const InstitutionIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 1L1 6.5V8h22V6.5L12 1zM3 10v8h2v-8H3zm5.5 0v8h2v-8h-2zm5 0v8h2v-8h-2zm5.5 0v8h2v-8h-2zM1 20v2h22v-2H1z" />
  </svg>
);

const SpeakersHero = () => {
  return (
    <section className="bg-green100 px-6 pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div className="flex flex-col md:flex-row gap-4 mx-auto w-full max-w-5xl">
        <article className="overflow-hidden rounded-b-xl">
          <img
            src="/speakers/Asiwaju Bola Ahmed Tinubu, GCFR.png"
            alt="Asiwaju Bola Ahmed Tinubu, GCFR"
            className="block h-100 w-full object-cover"
          />
          <div className="flex items-start gap-4 bg-green350 px-5 md:px-5 py-5 md:py-8">
            <div className="flex h-10 md:h-12 w-10 md:w-12 shrink-0 items-center justify-center rounded bg-white/15 text-white">
              <InstitutionIcon />
            </div>
            <div className="text-left text-white">
              <h3 className="text-sm md:text-base font-jost font-black uppercase tracking-wide leading-tight">
                Asiwaju Bola Ahmed Tinubu, GCFR
              </h3>
              <p className="mt-1.5 text-xs md:text-sm font-jost leading-snug text-white/80">
                President of the Federal Republic of Nigeria
              </p>
            </div>
          </div>
          <div className="h-1 bg-red" />
        </article>
        <article className="overflow-hidden rounded-b-xl">
          <img
            src="/speakers/His Excellency, Dr. Kashim Shettima.jpg"
            alt="His Excellency, Dr. Kashim Shettima"
            className="block h-100 w-full object-cover"
          />
          <div className="flex items-start gap-4 bg-green350 px-5 md:px-5 py-5 md:py-8">
            <div className="flex h-10 md:h-12 w-10 md:w-12 shrink-0 items-center justify-center rounded bg-white/15 text-white">
              <InstitutionIcon />
            </div>
            <div className="text-left text-white">
              <h3 className="text-sm md:text-base font-jost font-black uppercase tracking-wide leading-tight">
                  His Excellency, Dr. Kashim Shettima
              </h3>
              <p className="mt-1.5 text-xs md:text-sm font-jost leading-snug text-white/80">
                Vice President of the Federal Republic of Nigeria
              </p>
            </div>
          </div>
          <div className="h-1 bg-yellow" />
        </article>
      </div>
      {/* <div className="mx-auto w-full max-w-md">
        <article className="overflow-hidden rounded-b-xl">
          <img
            src="/speakers/Asiwaju Bola Ahmed Tinubu, GCFR.png"
            alt="Asiwaju Bola Ahmed Tinubu, GCFR"
            className="block h-100 w-full object-cover"
          />
          <div className="flex items-start gap-4 bg-green350 px-5 md:px-5 py-5 md:py-8">
            <div className="flex h-10 md:h-12 w-10 md:w-12 shrink-0 items-center justify-center rounded bg-white/15 text-white">
              <InstitutionIcon />
            </div>
            <div className="text-left text-white">
              <h3 className="text-sm md:text-base font-jost font-black uppercase tracking-wide leading-tight">
                Asiwaju Bola Ahmed Tinubu, GCFR
              </h3>
              <p className="mt-1.5 text-xs md:text-sm font-jost leading-snug text-white/80">
                President of the Federal Republic of Nigeria
              </p>
            </div>
          </div>
          <div className="h-1 bg-red" />
        </article>
      </div> */}
    </section>
  );
};

export default SpeakersHero;
