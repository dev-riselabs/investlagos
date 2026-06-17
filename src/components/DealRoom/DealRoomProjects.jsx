import { Reveal, MouseTilt } from "../../lib/animations";
import { IoMdSearch } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaNairaSign } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: "Madewell — Cement Plant (Cross River)",
    tags: ["Manufacturing"],
    value: "884,000,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 2,
    title: "NNPC–Edo Condensate Refinery",
    tags: ["Energy & Power"],
    value: "469,200,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 3,
    title: "NEXIM Regional Sealink Project",
    tags: ["Infrastructure & Transport"],
    value: "272,000,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 4,
    title: "Akwa Ibom Deep Sea Port (Ibom Port)",
    tags: ["Infrastructure & Transport"],
    value: "5,712,000,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 5,
    title: "UTM Offshore — FLNG Facility (Yoho Field)",
    tags: ["Energy & Power"],
    value: "2,039,999,999,998",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 6,
    title: "OmniRetail — B2B FMCG & Embedded Finance",
    tags: ["Infrastructure & Transport"],
    value: "40,800,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 7,
    title: "Mdaas Global — Diagnostics Network Expansion",
    tags: ["Healthcare"],
    value: "13,600,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 8,
    title: "Agroeknor — Superfoods Export Scale-Up",
    tags: ["Agricultures & Agribussiness"],
    value: "13,600,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
  {
    id: 9,
    title: "Modern Halal Abattoir",
    tags: ["Agricultures & Agribussiness"],
    value: "25,840,000,000",
    image: "/Green Africa Investment.png",
    stage: "Closed Won",
  },
  {
    id: 10,
    title: "Jari Bola Waste-to Wealth Facility",
    tags: ["Energy & Power"],
    value: "68,000,000,000",
    image: "/Green Africa Investment.png",
    stage: "Discussion",
  },
];

const FunnelIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function FilterPill({ label }) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-md bg-white px-4 py-2.5 text-xs font-medium text-black100 shadow-sm transition hover:bg-slate-50"
    >
      <span className="text-black100 font-jost shrink-0">
        <FunnelIcon />
      </span>
      <select name="" id="">
        <option value="">{label}</option>
      </select>
    </button>
  );
}

function ConfirmedDeals() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="">
      {/* Top */}
      {/* <span className="text-sm text-white/80 font-inter">
          {selectedIndex + 1} of {projects.length}
        </span> */}

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full flex pl-0 md:min-w-[50%] md:pr-5 lg:min-w-[33.333%] lg:pr-6"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center">
        <div className="flex gap-3 rounded-full bg-black/10 px-5 py-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                selectedIndex === index ? "bg-green500" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, tags, value, stage, image }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-card border border-slate250 il-card">
      {/* Image */}
      <div className="aspect-video overflow-hidden il-card-media">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`${
                i === 2
                  ? "bg-slate350 border-black/1"
                  : "border-slate250 bg-transparent"
              } rounded-full border px-3 py-1 text-xs font-medium text-black300`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base font-bold font-jost text-black300 leading-snug">
          {title}
        </h3>

        {/* Required / Raised */}
        <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between text-sm font-jost">
            <span className="text-violet">Value:</span>
            <span className="font-semibold text-black300 flex gap-1 items-center">
              <FaNairaSign />
              {value}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-jost">
            <span className="text-violet">Stage:</span>
            <span className="font-bold text-green850">{stage}</span>
          </div>
        </div>

        {/* View Details */}
        {/* <div className="mt-4 border-t border-slate-100 pt-4">
          <button
            type="button"
            className="flex items-center font-jost gap-2 text-base text-black300 hover:text-green100 transition"
          >
            <span className="font-bold"> View Details</span>
           
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </article>
  );
}

const DealRoomProjects = () => {
  return (
    <>
      {/* Filter / search bar */}
      <section className="bg-green200 px-4 md:px-10 lg:px-20 py-10 md:py-15">
        <div className="mx-auto flex max-w-310 flex-wrap items-center md:justify-end gap-3">
          {/* Search pill */}
          <div className="flex items-center gap-3 rounded-xl font-jost border border-white bg-transparent px-5 py-2.5 w-full sm:w-80">
            <IoMdSearch className="w-6 h-6 text-white" />

            <input
              type="text"
              placeholder="Search reports..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/70"
            />
          </div>

          {/* Filter dropdowns */}
          <FilterPill label="All Categories" />
          <FilterPill label="All Years" />
          <FilterPill label="All..." />
        </div>
      </section>

      {/* Project cards */}
      <section className=" px-4 md:px-10 lg:px-20 py-12 lg:py-14">
        <ConfirmedDeals />
      </section>
    </>
  );
};

export default DealRoomProjects;
