import React from "react";

const ProposalHero = () => {
  return (
    <section className="relative overflow-hidden deal-room-bg">
      <div className="relative mx-auto max-w-310 px-4 md:px-10 lg:px-20 py-20 lg:py-24">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="text-[11px] tracking-[0.25em] font-jost font-medium text-white/80 uppercase">
            Investment Forum
          </span>
          <div className="h-[3px] w-16 bg-red rounded-full" />
          <h1 className="text-3xl font-medium leading-tight font-inter text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            Investment Projects Proposals
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ProposalHero;
