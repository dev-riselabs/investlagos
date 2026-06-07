import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const partners = [
  "/partners/p1.png",
  "/partners/p2.png",
  "/partners/p3.png",
  "/partners/p4.png",
  "/partners/p5.png",
  "/partners/p6.png",
  "/partners/p7.png",
  "/partners/p8.png",
  "/partners/p9.png",
  "/partners/p10.png",
  "/partners/p11.png",
  "/partners/p12.png",
  "/partners/p13.png",
  "/partners/p14.png",
  "/partners/p16.png",
  "/partners/p17.png",
  "/partners/p18.png",
  "/partners/p19.png",
  "/partners/p20.png",
  "/partners/p21.png",
  "/partners/p22.png",
  "/partners/p23.png",
  "/partners/p24.png",
  "/partners/p25.png",
  "/partners/p26.png",
  "/partners/p27.png",
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
          Working together to transform Lagos' economy
        </p>
      </div>
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {partners.map((partner) => (
            <div
              key={partner}
              className="min-w-0 flex-[0_0_50%] pl-5 sm:flex-[0_0_33.333%] lg:flex-[0_0_25%] flex justify-center"
            >
              <img src={partner} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-10 flex flex-wrap justify-center gap-3 bg-slate600 shadow-business px-6 py-3 rounded-full w-fit mx-auto">
        {partners.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-1.5 h-1.5 sm:h-3 sm:w-3 rounded-full transition ${
              selectedIndex === index ? "bg-green100" : "bg-slate700"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Partners;
