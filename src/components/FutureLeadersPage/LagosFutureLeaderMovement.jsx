import React from 'react';

const LagosFutureLeaderMovement = () => {
  return (
    <section className="bg-gray-50 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        {/* Section Header */}
        <h2 className="mb-3 text-3xl font-bold text-[#2B1C3B] sm:text-4xl">
          The Invest Lagos Future Leaders Movement
        </h2>
        <p className="mb-12 text-sm text-[#756A82] sm:text-base">
          Youth-inclusive, future-compliant, innovation-driven and collaborative
        </p>

        {/* Content Card */}
        <div className="flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] sm:p-12">
          <h3 className="mb-4 text-[19px] font-bold text-[#2B1C3B]">
            Structured Future Programmes coming soon...
          </h3>
          <p className="mb-8 max-w-[500px] text-[15px] leading-relaxed text-slate-500">
            We're currently preparing empowering youth programmes. Subscribe to our newsletter to be the first to know when new opportunities become available.
          </p>
          
          {/* CTA Button */}
          <button 
            type="button"
            className="flex items-center justify-center gap-2 rounded-md bg-[#099567] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#077B55]"
          >
            Subscribe to Newsletter
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33398 8H12.6673" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LagosFutureLeaderMovement;