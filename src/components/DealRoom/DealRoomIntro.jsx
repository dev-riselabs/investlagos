import React from "react";

const DealRoomIntro = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto grid max-w-310 items-center gap-10 lg:grid-cols-2">
        {/* Left — copy */}
        <div>
          <h2 className="text-2xl font-bold text-black300 font-jost sm:text-3xl">
            Investment Hub (Deal Room)
          </h2>
          <p className="mt-4 max-w-md text-sm font-manrope leading-7 text-black300">
            Welcome to Lagos&apos;s investment digital experience &mdash; where
            you can explore live, deal-room ready opportunities and engage
            directly with project sponsors.
          </p>
        </div>

        {/* Right — thumbnail */}
        <div className="">
          <img src="./idr-img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default DealRoomIntro;
