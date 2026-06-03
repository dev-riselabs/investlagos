import React from "react";

const LagosFutureLeaderMovement = () => {
  return (
    <section className="key-priority-bg px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-200 text-center font-jost flex flex-col items-center">
        {/* Section Header */}
        <h2 className="mb-3 text-2xl font-bold text-black300 sm:text-3xl">
          The Invest Lagos Future Leaders Movement
        </h2>
        <p className="mb-12 text-sm text-violet sm:text-base">
          Youth-inclusive, future-compliant, innovation-driven and collaborative
        </p>

        {/* Content Card */}
        <div className="flex flex-col items-center rounded-xl border max-w-160 border-slate250 bg-white p-8 shadow-card  sm:p-12">
          <h3 className="mb-4 text-[19px] font-bold text-black300">
            Structured Future Programmes coming soon...
          </h3>
          <p className="mb-8 max-w-125 text-[15px] leading-relaxed text-violet">
            We're currently preparing empowering youth programmes. Subscribe to
            our newsletter to be the first to know when new opportunities become
            available.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md bg-green100 px-6 py-2.5 text-sm font-medium font-jost text-white transition-colors hover:bg-[#077B55]"
          >
            Subscribe to Newsletter
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33398 8H12.6673"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33325L12.6667 7.99992L8 12.6666"
                stroke="white"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LagosFutureLeaderMovement;
