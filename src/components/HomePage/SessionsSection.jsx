import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sessions = [
  {
    id: 1,
    speaker: "/Folashade.png",
  },
  {
    id: 2,
    speaker: "/Sanwolu.png",
  },
  {
    id: 3,
    speaker: "/Marland.png",
  },
  {
    id: 4,
    speaker: "/Sanwolu.png",
  },
];

export default function SummitSessions() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.5em] text-emerald-600">
              SUMMIT SESSIONS
            </p>

            <h2 className="max-w-3xl text-xl font-medium leading-relaxed text-slate-900">
              Keynotes. Strategic Dialogues. High-Level Panels. Deal Rooms. Gala
              Dinner. Cultural Experiences. Music & Networking.
            </h2>

            <div className="mt-5 h-1.5 w-16 bg-gray-400" />
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <img src={session.speaker} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
