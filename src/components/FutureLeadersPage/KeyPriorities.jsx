import React from 'react';

const KeyPriorities = () => {
  const priorities = [
    {
      title: 'Leadership Development',
      description:
        'Connecting exceptional young leaders with insights, mentorship, and experiences that prepare them to lead across business, government, and society.',
      icon: (
        // Dollar Sign SVG
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      iconColor: 'text-[#30ABA3]',
      iconBg: 'bg-[#30ABA3]/10',
    },
    {
      title: 'Innovation & Entrepreneurship',
      description:
        'Showcasing emerging innovators, entrepreneurs, and changemakers building solutions that will shape the future of Lagos and Africa.',
      icon: (
     <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 29.3333V5.33329C8 4.62605 8.28095 3.94777 8.78105 3.44767C9.28115 2.94758 9.95942 2.66663 10.6667 2.66663H21.3333C22.0406 2.66663 22.7189 2.94758 23.219 3.44767C23.719 3.94777 24 4.62605 24 5.33329V29.3333H8Z" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99935 16H5.33268C4.62544 16 3.94716 16.281 3.44706 16.781C2.94697 17.2811 2.66602 17.9594 2.66602 18.6667V26.6667C2.66602 27.3739 2.94697 28.0522 3.44706 28.5523C3.94716 29.0524 4.62544 29.3333 5.33268 29.3333H7.99935" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 12H26.6667C27.3739 12 28.0522 12.281 28.5523 12.781C29.0524 13.2811 29.3333 13.9594 29.3333 14.6667V26.6667C29.3333 27.3739 29.0524 28.0522 28.5523 28.5523C28.0522 29.0524 27.3739 29.3333 26.6667 29.3333H24" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 8H18.6673" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 13.3334H18.6673" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 18.6666H18.6673" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.334 24H18.6673" stroke="#F9A04D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      ),
      iconColor: 'text-[#F9A04D]',
      iconBg: 'bg-[#F9A04D]/10',
    },
    {
      title: 'Networking & Opportunities',
      description:
        'Creating pathways for meaningful engagement with investors, policymakers, industry leaders, and global institutions.',
      icon: (
        // Users / Networking SVG
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      iconColor: 'text-[#E9723D]',
      iconBg: 'bg-[#E9723D]/10',
    },
  ];

  return (
    <section className="bg-[#F6F9F8] px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Heading */}
        <h2 className="mb-14 text-center text-3xl font-bold text-[#2B1C3B] sm:text-4xl">
          Key Priorities
        </h2>

        {/* Priority Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {priorities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-slate-100 bg-white p-8 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)]"
            >
              {/* Icon Container */}
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="mb-3 text-[17px] font-bold text-[#2B1C3B]">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPriorities;