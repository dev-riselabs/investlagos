import React from 'react';

const ReadyToInnovate = () => {
  return (
    <section className="bg-[#099567] px-6 py-20 lg:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Heading */}
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[40px]">
          Ready to Innovate?
        </h2>
        
        {/* Subtitle */}
        <p className="mb-8 max-w-[600px] text-[15px] leading-relaxed text-white/90 sm:text-base">
          Join thousands of young entrepreneurs shaping Lagos's future through innovation and technology.
        </p>

        {/* Buttons Container */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          {/* Primary Button */}
          <button 
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#EF2A3C] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#D81B2C] sm:w-auto"
          >
            Get Updates
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33398 8H12.6673" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Secondary Button */}
          <button 
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Talk to the HQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToInnovate;