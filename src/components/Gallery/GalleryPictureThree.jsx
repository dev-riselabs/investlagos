import React, { useEffect, useState } from "react";
const galleryImages = [
  {
    title: "arrival",
    img: [
      "/Arrival/INVESTLAGOS_46.JPG",
      "/Arrival/INVESTLAGOS_58.JPG",
      "/Arrival/INVESTLAGOS_65.JPG",
      "/Arrival/INVESTLAGOS_72.JPG",
      "/Arrival/INVESTLAGOS_80.JPG",
      "/Arrival/INVESTLAGOS_87.JPG",
      "/Arrival/INVESTLAGOS_105.JPG",
      "/Arrival/INVESTLAGOS_113.JPG",
      "/Arrival/INVESTLAGOS_218.JPG",
    ],
  },
  {
    title: "keynote",
    img: [
      "/Keynotes/INVESTLAGOS_155.JPG",
      "/Keynotes/INVESTLAGOS_164.JPG",
      "/Keynotes/INVESTLAGOS_170.JPG",
      "/Keynotes/INVESTLAGOS_178.JPG",
      "/Keynotes/INVESTLAGOS_182.JPG",
      "/Keynotes/INVESTLAGOS_183.JPG",
      "/Keynotes/INVESTLAGOS_185.JPG",
      "/Keynotes/INVESTLAGOS_213.JPG",
    ],
  },
  {
    title: "welcome-cermony",
    img: [
      "/Welcome Ceremony/INVESTLAGOS_118.JPG",
      "/Welcome Ceremony/INVESTLAGOS_119.JPG",
      "/Welcome Ceremony/INVESTLAGOS_123.JPG",
      "/Welcome Ceremony/INVESTLAGOS_129.JPG",
      "/Welcome Ceremony/INVESTLAGOS_132.JPG",
      "/Welcome Ceremony/INVESTLAGOS_133.JPG",
      "/Welcome Ceremony/INVESTLAGOS_151.JPG",
      "/Welcome Ceremony/INVESTLAGOS_153.JPG",
      "/Welcome Ceremony/INVESTLAGOS_223.JPG",
    ],
  },
];
const GalleryPictureThree = () => {
  const [filterState, setFilterState] = useState("arrival");
  let currentImages = galleryImages.find((img) => img.title === filterState);

  function handleFilterChange(value) {
    setFilterState(value);
  }

  const bentoClasses = [
    "md:col-span-2 md:row-span-2",
    "",
    "",
    "md:row-span-2",
    "",
    "",
  ];

  return (
    <section className=" px-4 md:px-10 lg:px-20 py-15 md:py-20">
      <div className="flex flex-col gap-8 mx-auto max-w-310 ">
        <select
          name=""
          id=""
          value={filterState}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="self-end text-black300 border border-slate900 rounded-md px-3 py-2 font-jost text-sm max-w-80 w-full"
        >
          <option value="arrival">Arrival</option>
          <option value="keynote">
            Keynote
          </option>
          <option value="welcome-cermony">Welcome Cermony</option>
        </select>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:grid-flow-dense">
          {currentImages.img.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${
                bentoClasses[i % bentoClasses.length]
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPictureThree;
