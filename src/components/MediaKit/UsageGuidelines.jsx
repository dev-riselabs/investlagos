import React from 'react';

const UsageGuidelines = () => {
  const usageGuidelines = [
    {
      label: 'Live Coverage',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      ),
      body: (
        <>
          Please tag <strong className="font-bold text-slate-800">@investinlagos</strong> in all social media posts for re-sharing and amplification.
        </>
      ),
    },
    {
      label: 'Hashtags',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="9" x2="20" y2="9"></line>
          <line x1="4" y1="15" x2="20" y2="15"></line>
          <line x1="10" y1="3" x2="8" y2="21"></line>
          <line x1="16" y1="3" x2="14" y2="21"></line>
        </svg>
      ),
      body: 'Use official tags:',
      tags: ['#INVESTINLAGOS2026', '#FutureForward', '#Lagos', '#Invest2026'],
    },
    {
      label: 'Streaming',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      ),
      body: 'Private live streaming of closed-door sessions is not permitted without prior approval.',
    },
  ];

  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 pt-14 lg:pt-16">
      <div className="mx-auto max-w-310">
        {/* Header Section */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
          <span className="text-[#30ABA3] text-3xl font-light">#</span>
          Usage Guidelines
        </h2>

        {/* Content Card */}
        <div className="mt-8 rounded-t-xl border border-slate-200 bg-white p-8  lg:p-10">
          <div className="space-y-8">
            {usageGuidelines.map((g, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                {/* Icon & Label */}
                <div className="flex items-center gap-2 text-[15px] font-bold text-slate-800">
                  <span className="text-slate-700">{g.icon}</span>
                  {g.label}
                </div>

                {/* Body Text (Using the violet-like color) */}
                {g.body && (
                  <p className="mt-1 text-[14px] leading-relaxed text-[#785794]">
                    {g.body}
                  </p>
                )}

                {/* Tags */}
                {g.tags && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#30ABA3]/10 px-4 py-1.5 text-[12px] font-bold text-[#099567]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageGuidelines;