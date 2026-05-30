import React from "react";

const GovernanceBanner = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-16 lg:py-24">
      <div className="mx-auto grid max-w-310 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* ── Left: text ───────────────────────────────────── */}
        <div>
          <h1 className="text-2xl font-bold leading-tight text-green400 font-jost sm:text-3xl lg:text-[32px]">
            Governance Structure
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-slate800 font-manrope">
            Invest Lagos 3.0 is guided by a distinguished governance framework
            comprising public sector leaders, private sector executives,
            development partners and industry experts committed to advancing
            Lagos as Africa's premier investment destination.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate800 font-manrope">
            This structure described as the Local Organising Committee ensures
            oversight, transparency, stakeholder alignment and effective
            delivery of summit objectives.
          </p>
        </div>

        {/* ── Right: image ─────────────────────────────────── */}
        <div className="w-full">
          <img
            src="/governance_structure_hero_image.png"
            alt="Invest Lagos 3.0 – Local Organising Committee"
            className="w-full rounded-2xl object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default GovernanceBanner;
