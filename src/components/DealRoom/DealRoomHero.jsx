import React from "react";

const DealRoomHero = () => {
  return (
    <section className="relative overflow-hidden deal-room-bg">
      <div className="relative mx-auto max-w-310 px-4 md:px-10 lg:px-20 py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:ml-auto max-w-163">
          <h1 className="text-3xl font-medium leading-tight font-inter text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Invest in Lagos 3.0 Deal Room
          </h1>
          <p className="text-left text-sm leading-7 font-inter text-white sm:text-[15px]">
            The Invest Lagos 3.0 Deal Room presents you with a curated portfolio
            of investment-ready projects, businesses and government-backed
            initiatives. Explore opportunities, engage with sector experts, and
            become part of the projects transforming Africa&apos;s most dynamic
            city.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealRoomHero;
