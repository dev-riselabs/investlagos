import React from 'react';

const DownloadableMediaAssets = () => {
  const brandAssetsList = [
    {
      title: 'Official Logos:',
      desc: 'High-resolution WAES logos (Vector/PNG)',
      icon: (
        // Picture SVG colored with your violet #785794
        <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#785794" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.9997 14.6666C13.4724 14.6666 14.6663 13.4727 14.6663 11.9999C14.6663 10.5272 13.4724 9.33325 11.9997 9.33325C10.5269 9.33325 9.33301 10.5272 9.33301 11.9999C9.33301 13.4727 10.5269 14.6666 11.9997 14.6666Z" stroke="#785794" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 19.9999L23.8853 15.8853C23.3853 15.3853 22.7071 15.1045 22 15.1045C21.2929 15.1045 20.6147 15.3853 20.1147 15.8853L8 27.9999" stroke="#785794" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Executive Photos:',
      desc: 'Official headshots of key speakers and conveners',
      icon: (
        // Profile SVG
        <svg width="14" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.36673 12.7083V11.6625C8.36673 11.1077 8.14636 10.5757 7.7541 10.1834C7.36183 9.79117 6.82981 9.5708 6.27507 9.5708H3.13757C2.58282 9.5708 2.0508 9.79117 1.65853 10.1834C1.26627 10.5757 1.0459 11.1077 1.0459 11.6625V12.7083" stroke="#785794" strokeWidth="1.04583" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.70592 7.47899C5.86112 7.47899 6.79759 6.54252 6.79759 5.38732C6.79759 4.23213 5.86112 3.29565 4.70592 3.29565C3.55073 3.29565 2.61426 4.23213 2.61426 5.38732C2.61426 6.54252 3.55073 7.47899 4.70592 7.47899Z" stroke="#785794" strokeWidth="1.04583" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.5039 12.7074V11.6619C11.5036 11.1985 11.3494 10.7484 11.0655 10.3822C10.7816 10.016 10.3842 9.7545 9.93555 9.63867" stroke="#785794" strokeWidth="1.04583" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.36621 3.36377C8.81614 3.47897 9.21492 3.74064 9.49971 4.10752C9.78449 4.4744 9.93906 4.92563 9.93906 5.39007C9.93906 5.85451 9.78449 6.30574 9.49971 6.67262C9.21492 7.03951 8.81614 7.30117 8.36621 7.41637" stroke="#785794" strokeWidth="1.04583" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'B-Roll & Visuals:',
      desc: 'Event photos, venue walkthroughs, and session highlights',
      icon: (
        // Video SVG
        <svg width="14" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_150_1841)">
            <path d="M7.55957 8.46982L10.0274 10.1151C10.063 10.1387 10.1043 10.1523 10.147 10.1544C10.1897 10.1564 10.2322 10.1468 10.2698 10.1267C10.3075 10.1065 10.339 10.0765 10.361 10.0398C10.3829 10.0032 10.3945 9.96123 10.3946 9.9185V6.04589C10.3946 6.00432 10.3836 5.96348 10.3628 5.9275C10.342 5.89152 10.312 5.86167 10.276 5.84097C10.24 5.82026 10.1991 5.80943 10.1575 5.80957C10.1159 5.80971 10.0752 5.82082 10.0392 5.84177L7.55957 7.28857" stroke="#785794" strokeWidth="0.945" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.61531 5.16235H1.89031C1.3684 5.16235 0.945312 5.58544 0.945312 6.10735V9.88735C0.945312 10.4093 1.3684 10.8324 1.89031 10.8324H6.61531C7.13722 10.8324 7.56031 10.4093 7.56031 9.88735V6.10735C7.56031 5.58544 7.13722 5.16235 6.61531 5.16235Z" stroke="#785794" strokeWidth="0.945" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_150_1841">
              <rect width="11.34" height="15.9946" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section
      // Background Image handled via inline style
      className="px-6 py-14 bg-cover bg-center bg-no-repeat lg:py-20"
      style={{ backgroundImage: "url('/deal-book-bg.png')" }}
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Header Section */}
        <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-800">
          {/* Download Icon SVG - Title */}
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.33301 13.3333L15.9997 19.9999L22.6663 13.3333" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 20V4" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Downloadable Media Assets
        </h2>
        <p className="mt-3 max-w-3xl text-[14px] text-slate-500">
          Provide a clear button or link for these resources. Do not clutter the page with the files themselves; use a secure link.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* -------------------- CARD 1: Media Kit -------------------- */}
          <article className="flex flex-col items-center justify-center rounded-xl bg-white px-8 py-12 text-center shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#30ABA3]/10">
              {/* Fallback Document SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30ABA3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </span>
            <h3 className="mt-5 text-lg font-bold text-slate-800">Download The Media Kit (PDF)</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-slate-500">
              Access the official guide for journalists, digital press and broadcast media.
            </p>
            <a
              href="/DealBook for Invest Lagos 3.0.pdf"
              download
              className="mt-8 flex items-center gap-2 rounded bg-[#099567] px-6 py-3 text-[14px] font-semibold text-white transition hover:opacity-90"
            >
              {/* Dynamic currentColor Download Icon */}
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.33301 13.3333L15.9997 19.9999L22.6663 13.3333" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 20V4" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Media Kit
            </a>
          </article>

          {/* -------------------- CARD 2: Brand Assets -------------------- */}
          <article className="flex flex-col items-center justify-center rounded-xl bg-white px-8 py-10 shadow-sm">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#30ABA3]/10">
              {/* Picture SVG */}
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.9997 14.6666C13.4724 14.6666 14.6663 13.4727 14.6663 11.9999C14.6663 10.5272 13.4724 9.33325 11.9997 9.33325C10.5269 9.33325 9.33301 10.5272 9.33301 11.9999C9.33301 13.4727 10.5269 14.6666 11.9997 14.6666Z" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28 19.9999L23.8853 15.8853C23.3853 15.3853 22.7071 15.1045 22 15.1045C21.2929 15.1045 20.6147 15.3853 20.1147 15.8853L8 27.9999" stroke="#30ABA3" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-800">Access Brand Assets</h3>

            <ul className="mt-6 w-full max-w-sm space-y-4">
              {brandAssetsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex shrink-0 items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-[13px] leading-relaxed">
                    <span className="font-semibold text-slate-700">{item.title}</span>{' '}
                    <span className="text-slate-500">{item.desc}</span>
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 flex items-center gap-2 rounded border border-[#099567] px-6 py-3 text-[14px] font-semibold text-[#099567] transition-colors hover:bg-slate-50 active:bg-slate-100"
            >
              {/* Dynamic currentColor Download Icon */}
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 20V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V20" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.33301 13.3333L15.9997 19.9999L22.6663 13.3333" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 20V4" stroke="currentColor" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Access Brand Assets
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default DownloadableMediaAssets;