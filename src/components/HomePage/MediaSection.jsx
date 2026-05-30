import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const news = [
  {
    id: 1,
    category: "COMMERCE",
    image: "/meeting.jpg",
    title:
      "Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy",
    description:
      "Lagos State Government has unveiled its much-awaited Lagos Investment Deal Book, an unprecedented compendium of de-risked projects.",
    border: "border-red-500",
  },
  {
    id: 2,
    category: "COMMERCE",
    image: "/Century Economy.png",
    title:
      "Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy",
    description:
      "Lagos State Government has unveiled its much-awaited Lagos Investment Deal Book, an unprecedented compendium of de-risked projects.",
    border: "border-blue-500",
  },
  {
    id: 3,
    category: "COMMERCE",
    image: "/Vision for a 21st-Century Economy.png",
    title:
      "Lagos Unveils Investment Deal Book, Bold Vision for a 21st-Century Economy",
    description:
      "Lagos State Government has unveiled its much-awaited Lagos Investment Deal Book, an unprecedented compendium of de-risked projects.",
    border: "border-yellow-400",
  },
  {
    id: 4,
    category: "COMMERCE",
    image: "/meeting.jpg",
    title: "Another Investment Story",
    description: "Additional article for demonstrating carousel movement.",
    border: "border-green-500",
  },
];

export default function MediaCenter() {
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
    <section className="bg-slate500 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="font-jost">
            <p className="mb-2 text-sm font-bold tracking-[0.4em] text-green100 uppercase">
              MEDIA CENTER
            </p>

            <h2 className="max-w-2xl text-xl font-medium text-black">
              Latest updates, stories and insights from the heart of Lagos'
              investment ecosystem.
            </h2>

            <div className="mt-4 h-1.5 w-14 bg-slate200" />
          </div>

          <button className="flex w-fit border border-green800 items-center gap-2 rounded-md bg-green100 px-5 py-3 text-sm font-medium text-white transition hover:bg-green">
            View All News
            <span>→</span>
          </button>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex">
            {news.map((item) => (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_100%] pl-5 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] flex "
              >
                <article
                  className={`overflow-hidden rounded-lg border-b-4 ${item.border} bg-white shadow-md h-full flex flex-col`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6  flex flex-col h-full items-start gap-4">
                    <span className="rounded-full bg-green250 border border-green100 px-3 py-1 text-[10px] md:text-xs font-semibold text-white font-jost">
                      {item.category}
                    </span>

                    <h3 className="text-xl md:text-2xl font-semibold leading-snug text-black100 font-jost">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-black100 font-jost">
                      {item.description}
                    </p>

                    <button className="text-sm font-medium text-green100 hover:text-green font-jost mt-auto">
                      Read Story →
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3 bg-slate600 shadow-business px-6 py-3 rounded-full w-fit mx-auto">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition ${
                selectedIndex === index ? "bg-green100" : "bg-slate700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
