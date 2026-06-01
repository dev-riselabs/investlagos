import React, { useState } from 'react';

const AboutBoilerplate = () => {
  const [copied, setCopied] = useState(false);

  // Using the boilerplate text you provided
  const BOILERPLATE = `Invest Lagos is Lagos State's flagship investment engagement platform, designed to connect global investors with structured opportunities across priority sectors of the Lagos economy. The 3.0 edition deepens dialogue, partnerships and transactions that translate ambition into measurable investment outcomes for Lagos and Africa.`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BOILERPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable — fail silently */
    }
  };

  return (
    <section className="bg-[#1C5C47] px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            {/* Note SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9997 2.66669H7.99967C7.29243 2.66669 6.61415 2.94764 6.11406 3.44774C5.61396 3.94783 5.33301 4.62611 5.33301 5.33335V26.6667C5.33301 27.3739 5.61396 28.0522 6.11406 28.5523C6.61415 29.0524 7.29243 29.3334 7.99967 29.3334H23.9997C24.7069 29.3334 25.3852 29.0524 25.8853 28.5523C26.3854 28.0522 26.6663 27.3739 26.6663 26.6667V9.33335L19.9997 2.66669Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.667 2.66669V8.00002C18.667 8.70726 18.9479 9.38554 19.448 9.88564C19.9481 10.3857 20.6264 10.6667 21.3337 10.6667H26.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3337 12H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.3337 17.3333H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.3337 22.6667H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            About Invest Lagos 3.0 (Boilerplate)
          </h2>
          <p className="mt-4 text-sm text-white/90">
            Standardized text for journalists to copy/paste into their articles.
          </p>
        </div>

        {/* White Card Section */}
        <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-8 text-sm leading-relaxed text-slate-700">
            {BOILERPLATE}
          </p>

          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-md border border-[#004F61] px-4 py-2 text-sm font-bold text-[#004F61] transition-colors hover:bg-slate-50 active:bg-slate-100"
          >
            {copied ? (
              // Simple check icon for copied state
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#004F61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              // Copy SVG provided
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_150_1578)">
                  <path d="M13.333 5.33337H6.66634C5.92996 5.33337 5.33301 5.93033 5.33301 6.66671V13.3334C5.33301 14.0698 5.92996 14.6667 6.66634 14.6667H13.333C14.0694 14.6667 14.6663 14.0698 14.6663 13.3334V6.66671C14.6663 5.93033 14.0694 5.33337 13.333 5.33337Z" stroke="#004F61" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.66634 10.6667C1.93301 10.6667 1.33301 10.0667 1.33301 9.33337V2.66671C1.33301 1.93337 1.93301 1.33337 2.66634 1.33337H9.33301C10.0663 1.33337 10.6663 1.93337 10.6663 2.66671" stroke="#004F61" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_150_1578">
                    <rect width="16" height="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            )}
            {copied ? 'Copied!' : 'Copy Boilerplate'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBoilerplate;