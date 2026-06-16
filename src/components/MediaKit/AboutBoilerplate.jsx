import React, { useState } from 'react';

const AboutBoilerplate = () => {
  const [copied, setCopied] = useState(false);

  // Full boilerplate text matching what is rendered on the page
  const BOILERPLATE = `Invest Lagos is Lagos State Government's flagship trade and investment platform, convened to connect global capital with investment-ready opportunities across Africa's leading commercial hub.

What's Included in the Media Kit
- Official press releases and news announcements
- Event fact sheets and background information
- Summit statistics and key investment data
- High-resolution Invest Lagos logos
- Brand guidelines and visual identity assets
- Official event photography and approved images
- Speaker profiles and biographies
- Session descriptions and programme highlights
- Government and partner organization profiles
- Promotional videos and multimedia resources
- Social media assets and communication templates
- Post-event reports and outcome summaries

Media Resources Available
- Downloadable logo packages (PNG, SVG, EPS)
- Brand colour specifications and usage guidelines
- Official event presentations and fact sheets
- Executive and keynote speaker headshots
- Investment sector briefs and market insights
- Press accreditation information
- Media contact directory
- Newsroom updates and announcements

For Journalists & Editorial Teams
The Media Kit is intended to provide accurate, up-to-date information to support coverage of Invest Lagos which brings together investors, policymakers, development institutions, business leaders, and global partners to explore investment opportunities across technology, infrastructure, finance, manufacturing, energy, logistics, creative industries, and urban development.

Download the Media Kit
For the latest media resources, speaker information, branding assets, and press materials, please visit:
Invest Lagos Media Centre & Resources
For media enquiries, interview requests, accreditation, and additional editorial support, please contact the Invest Lagos Media Relations Team.`;

  const copy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(BOILERPLATE);
      } else {
        // Fallback for non-secure contexts / older browsers
        const textarea = document.createElement('textarea');
        textarea.value = BOILERPLATE;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard may be unavailable — fail silently */
    }
  };

  return (
    <section className="bg-green400 px-4 md:px-10 lg:px-20 py-12 lg:py-16">
      <div className="mx-auto max-w-310 font-jost">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            {/* Note SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9997 2.66669H7.99967C7.29243 2.66669 6.61415 2.94764 6.11406 3.44774C5.61396 3.94783 5.33301 4.62611 5.33301 5.33335V26.6667C5.33301 27.3739 5.61396 28.0522 6.11406 28.5523C6.61415 29.0524 7.29243 29.3334 7.99967 29.3334H23.9997C24.7069 29.3334 25.3852 29.0524 25.8853 28.5523C26.3854 28.0522 26.6663 27.3739 26.6663 26.6667V9.33335L19.9997 2.66669Z" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.667 2.66669V8.00002C18.667 8.70726 18.9479 9.38554 19.448 9.88564C19.9481 10.3857 20.6264 10.6667 21.3337 10.6667H26.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.3337 12H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.3337 17.3333H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.3337 22.6667H10.667" stroke="white" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            About Invest Lagos 3.0 (Boilerplate)
          </h2>
          <p className="mt-4 text-sm text-white/90">
            Standardized text for journalists to copy/paste into their articles.
          </p>
        </div>

        {/* White Card Section */}
        <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-8 space-y-4 text-sm leading-relaxed text-slate-700">
            {/* {BOILERPLATE} */}
            <p>
              Invest Lagos is Lagos State Government's flagship trade and investment platform, convened to connect global capital with investment-ready opportunities across Africa's leading commercial hub.
            </p>

            <b>What's Included in the Media Kit</b>
            <ul className="list-disc space-y-1 pl-6">
              <li>Official press releases and news announcements</li>
              <li>Event fact sheets and background information</li>
              <li>Summit statistics and key investment data</li>
              <li>High-resolution Invest Lagos logos</li>
              <li>Brand guidelines and visual identity assets</li>
              <li>Official event photography and approved images</li>
              <li>Speaker profiles and biographies</li>
              <li>Session descriptions and programme highlights</li>
              <li>Government and partner organization profiles</li>
              <li>Promotional videos and multimedia resources</li>
              <li>Social media assets and communication templates</li>
              <li>Post-event reports and outcome summaries</li>
            </ul>
            <b>Media Resources Available</b>
            <ul className="list-disc space-y-1 pl-6">
              <li>Downloadable logo packages (PNG, SVG, EPS)</li>
              <li>Brand colour specifications and usage guidelines</li>
              <li>Official event presentations and fact sheets</li>
              <li>Executive and keynote speaker headshots</li>
              <li>Investment sector briefs and market insights</li>
              <li>Press accreditation information</li>
              <li>Media contact directory</li>
              <li>Newsroom updates and announcements</li>
            </ul>
            <p>
              <b>For Journalists & Editorial Teams</b><br />
              The Media Kit is intended to provide accurate, up-to-date information to support coverage of Invest Lagos which brings together investors, policymakers, development institutions, business leaders, and global partners to explore investment opportunities across technology, infrastructure, finance, manufacturing, energy, logistics, creative industries, and urban development.
            </p>
            <p>
              <b>Download the Media Kit</b><br />
              For the latest media resources, speaker information, branding assets, and press materials, please visit:<br />
              <b>Invest Lagos Media Centre & Resources</b><br />
              For media enquiries, interview requests, accreditation, and additional editorial support,
              please contact the Invest Lagos Media Relations Team.
            </p>
          </div>

          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-md border border-mint px-4 py-2 text-sm font-bold! text-[#004F61] transition-colors hover:bg-slate-50 active:bg-slate-100"
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
                  <path d="M13.333 5.33337H6.66634C5.92996 5.33337 5.33301 5.93033 5.33301 6.66671V13.3334C5.33301 14.0698 5.92996 14.6667 6.66634 14.6667H13.333C14.0694 14.6667 14.6663 14.0698 14.6663 13.3334V6.66671C14.6663 5.93033 14.0694 5.33337 13.333 5.33337Z" stroke="#004F61" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.66634 10.6667C1.93301 10.6667 1.33301 10.0667 1.33301 9.33337V2.66671C1.33301 1.93337 1.93301 1.33337 2.66634 1.33337H9.33301C10.0663 1.33337 10.6663 1.93337 10.6663 2.66671" stroke="#004F61" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_150_1578">
                    <rect width="16" height="16" fill="white" />
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