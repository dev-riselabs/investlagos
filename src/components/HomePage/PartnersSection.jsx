import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const partners = [
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p2.png",
  "/p1.png",
  "/p3.png",
];

function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="invest-bg bg-green100! py-20  px-4 md:px-10 lg:px-20 flex flex-col gap-12">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white font-jost">
          Our Partners & Sponsors
        </h2>
        <p className="text-white font-medium font-jost text-base text-center md:text-lg">
          Working together to transform Lagos's economy
        </p>
      </div>
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {partners.map((partner) => (
            <div
              key={partner}
              className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_33.333%] lg:flex-[0_0_25%] flex justify-center"
            >
              <img src={partner} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-3 bg-slate600 shadow-business px-6 py-3 rounded-full w-fit mx-auto">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition ${
              selectedIndex === index ? "bg-green100" : "bg-slate700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
