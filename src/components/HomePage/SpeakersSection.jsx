export const speakers = [
  {
    id: 1,
    name: "HIS EXCELLENCY WAMKELE MENE",
    title: "Secretary-General, AfCFTA",
    image: "/speakers/His Excellency Wamkele Mene.png",
    accent: "bg-emerald-500",
  },
  {
    id: 2,
    name: "MRS. KANAYO AWANI",
    title: "Executive Vice President, Afreximbank",
    image: "/speakers/Mrs. Kanayo Awani.png",
    accent: "bg-yellow-500",
  },
  {
    id: 3,
    name: "LORD MARLAND",
    title: "Chairman, CWEIC",
    image: "/speakers/LORD MARLAND.png",
    accent: "bg-red-500",
  },
  {
    id: 4,
    name: "Asiwaju Bola Ahmed Tinubu",
    title: "President, of Nigeria",
    image: "/speakers/Asiwaju Bola Ahmed Tinubu, GCFR.png",
    accent: "bg-blue-500",
  },
  {
    id: 5,
    name: "Olajumoke Omoniyi Oduwole",
    title: "Minister of Industry, Trade and Investment",
    image: "/speakers/Dr. Jumoke Oduwole.png",
    accent: "bg-purple-500",
  },
];

import { PiBank } from "react-icons/pi";

function SpeakerCard({ speaker }) {
  return (
    <article className="overflow-hidden rounded-xl bg-slate400/5 flex flex-col h-full il-card">
      <img
        src={speaker.image}
        alt={speaker.name}
        className="h-92 w-full object-cover"
      />

      <div className="relative flex gap-4 px-5 py-12.5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
          <PiBank className="text-2xl text-white" />
        </div>

        <div>
          <h3 className="font-jost text-sm font-semibold uppercase text-white">
            {speaker.name}
          </h3>

          <p className="mt-1 text-sm text-white/80">{speaker.title}</p>
        </div>
      </div>

      <div className={`h-1 ${speaker.accent} mt-auto`} />
    </article>
  );
}

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ConfirmedSpeakers() {
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
    <section className="bg-green400 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        {/* Top */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-10 w-0.5 bg-white" />

              <p className="text-sm font-bold uppercase tracking-[6px] text-green500 font-inter">
                Confirmed Speakers
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-medium font-inter text-white md:text-4xl">
              Meet the leaders shaping Africa's most dynamic investment
              landscape
            </h2>

            <div className="mt-6 h-1 w-16 bg-slate200" />
          </div>

          <div className="flex items-center gap-6">
            <Link to="/speakers" className="text-sm font-bold font-inter uppercase text-white no-underline">
              View All Speakers
            </Link>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow text-yellow">
              <FaArrowRight />
            </button>

            <span className="text-sm text-white/80 font-inter">
              {selectedIndex + 1} of {speakers.length}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="min-w-full flex pl-0 md:min-w-[50%] md:pr-5 lg:min-w-[33.333%] lg:pr-6"
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center">
          <div className="flex gap-3 rounded-full bg-white/20 px-5 py-3">
            {speakers.map((_, index) => (
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
      </div>
    </section>
  );
}

function SpeakersSection() {
  return <ConfirmedSpeakers />;
}

export default SpeakersSection;
