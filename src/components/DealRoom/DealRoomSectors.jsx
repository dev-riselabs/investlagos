import React from "react";
import { Reveal, MouseTilt } from "../../lib/animations";
import { PiPlant } from "react-icons/pi";
import { RxLightningBolt } from "react-icons/rx";
import { LuSmartphone } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";

const sectors = [
  {
    title: "Agribusiness & Food System",
    image: "/Agribusiness & Food System.png",
    icon: PiPlant,
  },
  {
    title: "Energy & Utilities",
    image: "/Clean Energy & Power.png",
    icon: RxLightningBolt,
  },
  {
    title: "Health and Life Sciences",
    image: "/Health and Life Sciences.png",
    icon: LuSmartphone,
  },
  {
    title: "Housing and Urban Development",
    image: "/Housing and Urban Development.png",
    icon: FaRegHeart,
  },
  { title: "Free Trade Zones", image: "/Free Trade Zones.png", icon: BsTruck },
  {
    title: "Tourism and Creative Economy",
    image: "/Tourism and Creative Economy.png",
    icon: MdOutlineTour,
  },
];

function SectorCard({ title, image, icon: Icon, i }) {
  return (
    <article className="overflow-hidden rounded-lg bg-whit il-card shadow-sector">
      <div className="max-h-51 overflow-hidden il-card-media">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-2 px-6 py-7">
        <span
          className={` rounded-md w-9 h-9 flex items-center justify-center ${
            i === 0
              ? "bg-orange/10"
              : i === 1
                ? "bg-green750/10"
                : i === 2
                  ? "bg-orange100/10"
                  : i === 3
                    ? "bg-blue100/10": "bg-orange/10" 
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              i === 0
                ? "text-orange"
                : i === 1
                  ? "text-green750"
                  : i === 2
                    ? "text-orange100"
                    : i === 3
                      ? "text-blue100"
                      : "text-orange"
            }`}
          />
        </span>
        <h3 className="text-xs font-bold text-black300 font-jost sm:text-sm">
          {title}
        </h3>
      </div>
    </article>
  );
}

const DealRoomSectors = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-12 lg:py-16">
      <div className="mx-auto max-w-310">
        <h2 className="text-center text-2xl font-bold font-jost text-black300 sm:text-3xl">
          Focus Sectors
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal
              key={s.title}
              direction="up"
              delay={(i % 3) * 100}
              distance={26}
            >
              <MouseTilt intensity={5}>
                <SectorCard {...s} i={i} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealRoomSectors;
