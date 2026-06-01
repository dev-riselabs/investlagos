import React from 'react';

const EssentialInfo = () => {
  // Using your exact array data
  const essentialInfo = [
    { label: 'Event', value: 'Invest Lagos 3.0' },
    { label: 'Date', value: 'June 8 – 10, 2026 (Monday – Wednesday)' },
    { label: 'Location', value: 'Eko hotel & Suites, Victoria Island, Lagos, Nigeria' },
    {
      label: 'Host',
      value: 'Lagos State Ministry of Commerce, Cooperatives, Trade & Investment (MCCTI), Lagos State Government',
    },
    { label: 'Social Handle', value: '@investlagos_' },
    { label: 'Official Website', value: 'www.investlagos.org' },
  ];

  return (
    <section className="bg-white px-6 py-14 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
          {/* Target/Essential Info SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0003 29.3333C23.3641 29.3333 29.3337 23.3638 29.3337 16C29.3337 8.63616 23.3641 2.66663 16.0003 2.66663C8.63653 2.66663 2.66699 8.63616 2.66699 16C2.66699 23.3638 8.63653 29.3333 16.0003 29.3333Z" stroke="#099567" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" stroke="#099567" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9997 18.6667C17.4724 18.6667 18.6663 17.4728 18.6663 16C18.6663 14.5273 17.4724 13.3334 15.9997 13.3334C14.5269 13.3334 13.333 14.5273 13.333 16C13.333 17.4728 14.5269 18.6667 15.9997 18.6667Z" stroke="#099567" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Essential Info
        </h2>

        {/* 2-Column Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {essentialInfo.map((item) => (
            <div
              key={item.label}
              // Styled to match the subtle shadow and soft borders of the mockup cards
              className="flex items-start gap-4 rounded-md border border-gray-200 bg-white px-6 py-5 "
            >
              {/* Icon Container - Pale Green */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#099567]/10">
                {/* Globe SVG */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#099567" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66699 9.99996C6.66699 6.89724 7.86052 3.91342 10.0003 1.66663C12.1401 3.91342 13.3337 6.89724 13.3337 9.99996C13.3337 13.1027 12.1401 16.0865 10.0003 18.3333C7.86052 16.0865 6.66699 13.1027 6.66699 9.99996Z" stroke="#099567" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.66699 10H18.3337" stroke="#099567" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Text Container */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-800">{item.label}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-slate-500">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssentialInfo;