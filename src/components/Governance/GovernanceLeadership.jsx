import React from "react";
import { Reveal, MouseTilt } from "../../lib/animations";

const leaders = [
  {
    name: "Mr. Babajide Olusola Sanwo-Olu",
    title: "Governor of Lagos State",
    photo: "/speakers/MR_Babajide_Olusola_Sanwo_Olu.png",
  },
  {
    name: "Dr. Kadri Obafemi Hamzat",
    title: "Deputy Governor of Lagos State",
    photo: "/speakers/Dr Kadri_Obafemi Hamzat.png",
  },
];

function LeaderCard({ name, title, photo }) {
  return (
    <article className="overflow-hidden bg-white shadow-card ring-1 ring-slate-100 il-card">
      <img
        src={photo}
        alt={name}
        className="block max-h-120 h-full w-full object-cover object-top"
        loading="lazy"
      />
      <div className="px-6 py-5">
        <h3 className="text-sm md:text-base font-bold font-jost text-green450 sm:text-base">
          {name}
        </h3>
        <p className="mt-1.5 text-xs text-slate900 sm:text-sm">{title}</p>
      </div>
    </article>
  );
}

const GovernanceLeadership = () => {
  return (
    <section className="bg-white px-6 pb-16 lg:pb-24">
      <div className="mx-auto max-w-310">
        <h2 className="text-center text-xl font-bold text-green400 font-jost sm:text-2xl lg:text-[28px]">
          Lagos State Government Leadership
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {leaders.map((l, i) => (
            <Reveal key={l.name} direction="up" delay={i * 110} distance={26}>
              <MouseTilt intensity={5}>
                <LeaderCard {...l} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceLeadership;
