export const testimonials = [
  {
    id: 1,
    quote:
      "Lagos rewards vision, resilience, and scale. If you can build successfully in Lagos, you can compete anywhere in the world.",
    name: "ALIKO DANGOTE",
    title: "Chairman, Dangote Group",
    image: "/dangote.png",
  },
  {
    id: 2,
    quote:
      "Lagos gives entrepreneurs the energy, market, and momentum required to turn bold ideas into enduring institutions.",
    name: "STELLA OKOLI",
    title: "Chairman/CEO, Emzor Pharmaceuticals",
    image: "/Stella.png",
  },
  {
    id: 3,
    quote:
      "The world pays attention to places that create opportunities, stories, and growth. Lagos stands out.",
    name: "Folorunso Alakija",
    title: "Business Leader",
    image: "/Stella.png",
  },
];

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const LeadersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-350 px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div className="space-y-4">
            <h2 className="font-jost text-2xl md:text-3xl font-semibold uppercase text-black">
              WHAT GLOBAL LEADERS THINK ABOUT LAGOS...
            </h2>

            <div className="h-1 md:h-2 w-24 bg-slate200" />
          </div>

          <div className="hidden gap-4 md:flex">
            <button
              onClick={scrollPrev}
              className="flex w-8 h-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 border-green100 text-green100 transition hover:bg-green hover:text-white"
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={scrollNext}
              className="flex w-8 h-8 md:h-10 md:w-10 items-center justify-center rounded-full border-2 border-green100 text-green100 transition hover:bg-green hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[95%] md:min-w-[48%] lg:min-w-[42%] h-auto"
              >
                <article className="flex flex-col h-full gap-10 justify-between rounded-xl bg-green800/10 p-12 relative">
                  <div>
                    <span className="font-serif text-8xl leading-none text-green50/50 absolute top-4 left-4">
                      “
                    </span>

                    <p className="font-jost text-lg md:text-xl font-medium leading-8 md:leading-10 text-green400">
                      {item.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 md:h-30 w-20 md:w-30 rounded-full object-cover"
                    />

                    <div className="space-y-1">
                      <h3 className="font-jost text-base uppercase font-bold text-black">
                        {item.name}
                      </h3>

                      <p className=" font-jost text-xs tracking-wide text-green400">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="mt-8 flex justify-center gap-4 md:hidden">
          <button
            onClick={scrollPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600 text-green-600"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={scrollNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600 text-green-600"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

LeadersCarousel;

function GlobalLeaderSection() {
  return (
    <div>
      <LeadersCarousel />
    </div>
  );
}

export default GlobalLeaderSection;
