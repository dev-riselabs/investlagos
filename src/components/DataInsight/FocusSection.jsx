
import { Reveal, MouseTilt } from "../../lib/animations";
import { PiPlant } from "react-icons/pi";
import { RxLightningBolt } from "react-icons/rx";
import { LuSmartphone } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";

const sectors = [
  {
    title: "Technology & Innovation",
    image: "/Agribusiness & Food System.png",
    desc : 'The Future of Technology & Innovation'
  },
  {
    title: "Infrastructure",
    image: "/Clean Energy & Power.png",
    desc : 'Building the Cities of the Future'
  },
  {
    title: "Energy & Sustainability",
    image: "/Health and Life Sciences.png",
    desc : 'Energy and Sustainability'
  },
  {
    title: "Creative Economy",
    image: "/Housing and Urban Development.png",
    desc : 'Talent, Creativity and Culture'
  },
  { title: "Manufacturing", image: "/Free Trade Zones.png", desc : 'Industrial site tours (Dangote Refinery, Fertilizer Plant, 3D Printing Factory, Lekki Free Zone' },
//   {
//     title: "Tourism and Creative Economy",
//     image: "/Tourism and Creative Economy.png",
//     icon: MdOutlineTour,
//   },
];

function SectorCard({ title, image, desc, i }) {
  return (
    <article className="overflow-hidden rounded-lg bg-whit il-card shadow-sector h-full flex flex-col">
      <div className="max-h-51 overflow-hidden il-card-media">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 px-6 py-7">
        {/* <span
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
        </span> */}
        
        <h3 className="text-xs font-bold text-black300 font-jost sm:text-sm">
          {title}
        </h3>
        <p className="text-[10px] sm:text-xs font-jost text-black300/70 ">{desc}</p>
      </div>
    </article>
  );
}

const FocusSection = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-12 lg:py-16">
      <div className="mx-auto max-w-310">
        <div className="flex flex-col gap-4 items-center">
            <h2 className="text-center text-2xl font-bold font-jost text-green100 sm:text-3xl">
          Investment Focus Areas
        </h2>
        <p className="font-jost text-sm md:text-base text-black">Based on the Invest Lagos 3.0 summit agenda, current opportunities span:</p>

        </div>
        

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal
              key={s.title}
              direction="up"
              delay={(i % 3) * 100}
              distance={26}
            >
              <MouseTilt intensity={5} className="h-full">
                <SectorCard {...s} i={i} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
