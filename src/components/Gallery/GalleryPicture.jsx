import React, { useEffect, useState } from "react";
const galleryImages = [
  {
    title: "lca",
    img: [
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.18 PM.jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM (1).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM (2).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM (3).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM (4).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM (5).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.19 PM.jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.20 PM (1).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.20 PM (2).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.20 PM (3).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.20 PM (4).jpeg",
      "/Lagos Corporate Assembly/WhatsApp Image 2026-05-31 at 8.31.20 PM.jpeg",
    ],
  },
  {
    title: "msme",
    img: [
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.52 PM (1).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.52 PM (2).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.52 PM (3).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.52 PM.jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.53 PM (1).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.53 PM (2).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.53 PM (3).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.53 PM (4).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.53 PM.jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.54 PM (1).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.54 PM (2).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.54 PM (3).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.54 PM (4).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.54 PM.jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM (1).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM (2).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM (3).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM (4).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM (5).jpeg",
      "/LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR 1-0/WhatsApp Image 2026-05-31 at 8.30.55 PM.jpeg",
    ],
  },
  {
    title: "laserp",
    img: [
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.29 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.29 PM.jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.30 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.30 PM (2).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.30 PM (3).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.30 PM.jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.31 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.31 PM (2).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.31 PM (3).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.31 PM.jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.32 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.32 PM (2).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.32 PM (3).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.32 PM.jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.33 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.33 PM (2).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.33 PM (3).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.33 PM.jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.34 PM (1).jpeg",
      "/LASERP/WhatsApp Image 2026-06-01 at 5.34.34 PM.jpeg",
    ],
  },
  {
    title: "lasmeco",
    img: [
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.55 PM (1).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.55 PM (2).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.55 PM.jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.56 PM (1).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.56 PM (2).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.56 PM (3).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.56 PM (4).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.56 PM.jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.57 PM (1).jpeg",
      "/LASMECO/WhatsApp Image 2026-06-01 at 5.31.57 PM.jpeg",
    ],
  },
  {
    title: "lift",
    img: [
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.37 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.37 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.38 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.38 PM (2).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.38 PM (3).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.38 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.39 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.39 PM (2).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.39 PM (3).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.39 PM (4).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.39 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.40 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.40 PM (2).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.40 PM (3).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.40 PM (4).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.40 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM (2).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM (3).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM (4).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM (5).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.41 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.42 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.42 PM (2).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.42 PM (3).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.42 PM (4).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.42 PM.jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.43 PM (1).jpeg",
      "/LITF CLOSING CEREMONY LAGOS STATE DAY 2025/WhatsApp Image 2026-05-31 at 8.30.43 PM.jpeg",
    ],
  },
  {
    title: "lsip",
    img: [
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.57 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.57 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.57 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.57 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.58 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.58 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.58 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.59 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.59 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.59 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.34.59 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.00 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.00 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.00 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.00 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.01 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.01 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.01 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.01 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.02 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.02 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.02 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.02 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.35.03 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (3).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (4).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (5).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (6).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (7).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (8).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (9).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (10).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (11).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (12).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (13).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (14).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (15).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (16).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (17).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (18).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (19).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (20).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (21).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (22).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (23).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (24).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (25).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (26).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (27).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (28).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (29).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (30).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (31).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (32).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (33).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (34).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM (35).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.26 PM.jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.27 PM (1).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.27 PM (2).jpeg",
      "/LSIP/WhatsApp Image 2026-06-01 at 5.37.27 PM.jpeg",
    ],
  },
];
const GalleryPicture = () => {
  const [filterState, setFilterState] = useState("lca");
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
          <option value="lca">Lagos Corporate Assembly</option>
          <option value="msme">
            LAGOS MSMEs EXCLUSIVE EKO ROUNDCITY TRADE FAIR
          </option>
          <option value="laserp">LASERP</option>
          <option value="lasmeco">LASMECO</option>
          <option value="lift">
            LITF CLOSING CEREMONY LAGOS STATE DAY 2025
          </option>
          <option value="lsip">LSIP</option>
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

export default GalleryPicture;
