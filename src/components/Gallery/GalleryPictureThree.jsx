import React, { useEffect, useState } from "react";
const galleryImages = [
  {
    title: "arrivals",
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
    title: "keynotes",
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
    title: "welcome-ceremony",
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
  {
    title: "governor address",
    img: [
      "/Governor_s Address/INVESTLAGOS_193.JPG",
      "/Governor_s Address/INVESTLAGOS_195.JPG",
      "/Governor_s Address/INVESTLAGOS_197.JPG",
      "/Governor_s Address/INVESTLAGOS_198.JPG",
      "/Governor_s Address/INVESTLAGOS_202.JPG",
      "/Governor_s Address/INVESTLAGOS_204.JPG",
      "/Governor_s Address/INVESTLAGOS_205.JPG",
    ],
  },
  {
    title: "governor forum",
    img: [
      "/Governors Forum/INVESTLAGOS_234.JPG",
      "/Governors Forum/INVESTLAGOS_236.JPG",
      "/Governors Forum/INVESTLAGOS_237.JPG",
      "/Governors Forum/INVESTLAGOS_240.JPG",
      "/Governors Forum/INVESTLAGOS_243.JPG",
      "/Governors Forum/INVESTLAGOS_245.JPG",
      "/Governors Forum/INVESTLAGOS_247.JPG",
      "/Governors Forum/INVESTLAGOS_248.JPG",
      "/Governors Forum/INVESTLAGOS_250.JPG",
      "/Governors Forum/INVESTLAGOS_251.JPG",
      "/Governors Forum/INVESTLAGOS_255.JPG",
      "/Governors Forum/INVESTLAGOS_257.JPG",
      "/Governors Forum/INVESTLAGOS_258.JPG",
      "/Governors Forum/INVESTLAGOS_261.JPG",
      "/Governors Forum/INVESTLAGOS_262.JPG",
    ],
  },
  {
    title: "governor activities",
    img: [
      "/Guest Activities/INVESTLAGOS_266.JPG",
      "/Guest Activities/INVESTLAGOS_268.JPG",
      "/Guest Activities/INVESTLAGOS_271.JPG",
      "/Guest Activities/INVESTLAGOS_272.JPG",
      "/Guest Activities/INVESTLAGOS_274.JPG",
      "/Guest Activities/INVESTLAGOS_279.JPG",
      "/Guest Activities/INVESTLAGOS_283.JPG",
      "/Guest Activities/INVESTLAGOS_285.JPG",
      "/Guest Activities/INVESTLAGOS_286.JPG",
      "/Guest Activities/INVESTLAGOS_288.JPG",
      "/Guest Activities/INVESTLAGOS_294.JPG",
      "/Guest Activities/INVESTLAGOS_302.JPG",
      "/Guest Activities/INVESTLAGOS_303.JPG",
      "/Guest Activities/INVESTLAGOS_304.JPG",
      "/Guest Activities/INVESTLAGOS_307.JPG",
      "/Guest Activities/INVESTLAGOS_311.JPG",
      "/Guest Activities/INVESTLAGOS_316.JPG",
      "/Guest Activities/INVESTLAGOS_317.JPG",
      "/Guest Activities/INVESTLAGOS_323.JPG",
      "/Guest Activities/INVESTLAGOS_330.JPG",
      "/Guest Activities/INVESTLAGOS_334.JPG",
      "/Guest Activities/INVESTLAGOS_337.JPG",
      "/Guest Activities/INVESTLAGOS_340.JPG",
      "/Guest Activities/INVESTLAGOS_344.JPG",
      "/Guest Activities/INVESTLAGOS_347.JPG",
      "/Guest Activities/INVESTLAGOS_362.JPG",
      "/Guest Activities/INVESTLAGOS_365.JPG",
      "/Guest Activities/INVESTLAGOS_367.JPG",
      "/Guest Activities/INVESTLAGOS_380.JPG",
      "/Guest Activities/INVESTLAGOS_383.JPG",
    ],
  },
  {
    title: "private gala",
    img: [
      "/Private Gala/GALANIGHT7.jpg",
      "/Private Gala/GALANIGHT16.jpg",
      "/Private Gala/GALANIGHT22.jpg",
      "/Private Gala/GALANIGHT23.jpg",
      "/Private Gala/GALANIGHT25.jpg",
      "/Private Gala/GALANIGHT26.jpg",
      "/Private Gala/GALANIGHT31.jpg",
      "/Private Gala/GALANIGHT32.jpg",
      "/Private Gala/GALANIGHT43.jpg",
      "/Private Gala/GALANIGHT50.jpg",
      "/Private Gala/GALANIGHT53.jpg",
      "/Private Gala/GALANIGHT56.jpg",
      "/Private Gala/GALANIGHT59.jpg",
      "/Private Gala/GALANIGHT66.jpg",
      "/Private Gala/GALANIGHT68.jpg",
      "/Private Gala/GALANIGHT74.jpg",
      "/Private Gala/GALANIGHT77.jpg",
      "/Private Gala/GALANIGHT80.jpg",
      "/Private Gala/GALANIGHT84.jpg",
      "/Private Gala/GALANIGHT89.jpg",
      "/Private Gala/GALANIGHT91.jpg",
    ],
  },
  {
    title: "extra",
    img: [
      "/Extra/DSC00165.jpg",
      "/Extra/DSC00201.jpg",
      "/Extra/DSC00339.jpg",
      "/Extra/DSC00359.jpg",
      "/Extra/DSC00575.jpg",
      "/Extra/DSC00683.jpg",
      "/Extra/DSC01033.jpg",
      "/Extra/DSC02258.jpg",
      "/Extra/DSC02342.jpg",
      "/Extra/DSC02731.jpg",
      "/Extra/DSC02875.jpg",
      "/Extra/DSC02936.jpg",
      "/Extra/DSC02967.jpg",
      "/Extra/DSC03020.jpg",
      "/Extra/DSC03037.jpg",
      "/Extra/DSC03061.jpg",
      "/Extra/DSC03179.jpg",
      "/Extra/DSC03383.jpg",
      "/Extra/DSC03408.jpg",
      "/Extra/DSC03471.jpg",
      "/Extra/DSC03493.jpg",
      "/Extra/DSC03530.jpg",
      "/Extra/DSC03563.jpg",
      "/Extra/DSC03564.jpg",
      "/Extra/DSC03864.jpg",
      "/Extra/DSC04429.jpg",
      "/Extra/DSC04916.jpg",
      "/Extra/DSC04985.jpg",
      "/Extra/DSC05000.jpg",
      "/Extra/DSC05010.jpg",
      "/Extra/DSC05080.jpg",
      "/Extra/DSC05140.jpg",
      "/Extra/DSC05223.jpg",
      "/Extra/DSC05451.jpg",
      "/Extra/DSC05473.jpg",
      "/Extra/DSC05571.jpg",
      "/Extra/DSC06119.jpg",
      "/Extra/DSC06173.jpg",
      "/Extra/DSC06214.jpg",
      "/Extra/DSC06340.jpg",
      "/Extra/DSC06345.jpg",
      "/Extra/DSC06370.jpg",
      "/Extra/DSC06463.jpg",
      "/Extra/DSC07198.jpg",
      "/Extra/DSC07264.jpg",
      "/Extra/DSC07632.jpg",
      "/Extra/DSC07693.jpg",
      "/Extra/DSC07724.jpg",
      "/Extra/DSC07855.jpg",
      "/Extra/DSC08260.jpg",
      "/Extra/DSC08323.jpg",
      "/Extra/DSC08740.jpg",
      "/Extra/DSC09049.jpg",
    ],
  },
  {
    title: "plenary",
    img: [
      "/plenary/DSC01538.jpg",
      "/plenary/DSC01569.jpg",
      "/plenary/DSC01603.jpg",
      "/plenary/DSC02019.jpg",
      "/plenary/DSC02199.jpg",
      "/plenary/DSC02296.jpg",
      "/plenary/DSC02342.jpg",
      "/plenary/DSC02485.jpg",
      "/plenary/DSC02824.jpg",
      "/plenary/DSC02931.jpg",
      "/plenary/DSC02962.jpg",
      "/plenary/DSC02967.jpg",
      "/plenary/DSC03037.jpg",
      "/plenary/DSC03179.jpg",
      "/plenary/DSC04604.jpg",
      "/plenary/DSC04970.jpg",
      "/plenary/DSC05010.jpg",
      "/plenary/DSC05140.jpg",
      "/plenary/DSC07185.jpg",
      "/plenary/DSC07743.jpg",
      "/plenary/DSC07749.jpg",
      "/plenary/DSC08323.jpg",
      "/plenary/DSC08335.jpg",
      "/plenary/DSC09222.jpg",
      "/plenary/DSC09296.jpg",
      "/plenary/DSC09349.jpg",
      "/plenary/DSC09405.jpg",
      "/plenary/DSC09641.jpg",
      "/plenary/INVESTLAGOS_230.JPG",
      "/plenary/INVESTLAGOS_240.JPG",
      "/plenary/INVESTLAGOS_293.JPG",
      "/plenary/INVESTLAGOS_294.JPG",
      "/plenary/INVESTLAGOS_302.JPG",
      "/plenary/INVESTLAGOS_304.JPG",
      "/plenary/INVESTLAGOS_314.JPG",
      "/plenary/INVESTLAGOS_317.JPG",
      "/plenary/INVESTLAGOS_319.JPG",
      "/plenary/INVESTLAGOS_340.JPG",
      "/plenary/INVESTLAGOS_341.JPG",
      "/plenary/INVESTLAGOS_344.JPG",
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
          <option value="arrivals">Arrivals</option>
          <option value="keynotes">Keynotes</option>
          <option value="welcome-ceremony">Welcome Ceremony</option>
          <option value="plenary">Plenary Session</option>
          <option value="governor address">Lagos State Governor's Address</option>
          <option value="governor forum">Governors' Showcase</option>
          <option value="governor activities">Governor Activities</option>
          <option value="private gala">Gala Dinner</option>
          <option value="extra">Extras</option>
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
