import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sessions = [
  {
    id: 1,
    speaker:"",
    name: "Mrs. Folashade Ambrose-Medebem",
    role: "Honourable Commissioner",
    title: "Welcome Address",
  },
  {
    id: 2,
    speaker:"",
    name: "Mr. Babajide Sanwo-Olu",
    role: "Governor of Lagos State",
    title: "Opening Address",
  },
  {
    id: 3,
    speaker:"",
    name: "Rt. Hon. Lord Marland",
    role: "Chair, CWIC",
    title: "Opening Remarks",
  },
  {
    id: 4,
    speaker:"",
    name: "Guest Speaker",
    role: "Industry Leader",
    title: "Keynote Session",
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
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                  {/* Poster */}
                  <img
                    src="/hero_investlagos_flier.png"
                    alt={session.title}
                    className="h-[430px] w-full object-cover"
                  />

                  {/* Speaker Image Overlay */}
                  <div className="absolute bottom-0 left-0 z-10">
                    <img
                      src={session.speaker}
                      alt={session.name}
                      className="h-40 w-36 rounded-tr-2xl object-cover shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
                    <div className="ml-36">
                      <p className="text-sm text-amber-300">{session.title}</p>

                      <h3 className="mt-2 text-lg font-bold text-white">
                        {session.name}
                      </h3>

                      <p className="text-sm text-white/80">{session.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
