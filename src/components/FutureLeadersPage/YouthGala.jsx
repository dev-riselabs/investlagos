import React from "react";

const YouthGala = () => {
  return (
    <section className="bg-green100 px-4 md:px-10 lg:px-20 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl font-jost rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-sm  md:p-14 text-center">
        {/* Header with Icon */}
        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18V5L21 3V16"
                stroke="#F9A04D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
                stroke="#F9A04D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19Z"
                stroke="#F9A04D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Invest Lagos 3.0 Youth Gala
          </h2>
        </div>

        {/* Description Text */}
        <p className="mx-auto max-w-4xl text-[15px] leading-relaxed text-white md:text-[17px]">
          A vibrant evening celebrating the talent, ambition and leadership of
          the next generation. The Youth Gala brings together emerging leaders,
          entrepreneurs, innovators and changemakers for networking,
          inspiration, recognition, and meaningful connections with industry and
          government leaders
        </p>
      </div>
    </section>
  );
};

export default YouthGala;
