const arr = Array.from({ length: 15 }, (_, i) => i);

const island_cultural_place = [
  {
    name: "Nike Art Gallery",
    location: "Lekki Phase 1",
    website: "https://nikeartfoundation.com/",
    img: "/island_cultural_place/Nike Art Gallery.jpg",
  },
  {
    name: "Yemisi Shyllon Museum of Art, Pan-Atlantic University",
    location: "Lekki",
    website:
      "https://artsandculture.google.com/partner/yemisi-shyllon-museum-of-art",
    img: "/island_cultural_place/Yemisi Shyllon Museum of Art.png",
  },
  {
    name: "CeraCerni's Art Hub",
    location: "Lekki Phase 1",
    website: "https://www.ceracerniarthub.com/",
    img: "/island_cultural_place/CeraCerni's Art Hub.jpg",
  },
  {
    name: "Yenwa Art Gallery",
    location: "Victoria Island",
    website: "https://www.yenwagallery.com/",
    img: "/island_cultural_place/Yenwa Art Gallery.jpg",
  },
  {
    name: "Terra Kulture",
    location: "Victoria Island",
    website: "https://terrakulture.com/",
    img: "/island_cultural_place/Terra Kulture.jpg",
  },
  {
    name: "Art Twenty One",
    location: "Victoria Island (Eko Hotel)",
    website: "https://arttwentyone.ng/",
    img: "/island_cultural_place/Art Twenty-One.png",
  },
  {
    name: "African Artists Foundation",
    location: "Victoria Island",
    website: "https://africanartists.org/",
    img: "/island_cultural_place/African Artists Foundation.png",
  },
  {
    name: "kó Art Space",
    location: "Ikoyi",
    website: "https://ko-artspace.com/",
    img: "/island_cultural_place/kó Art Space.png",
  },
  {
    name: "Rele Gallery",
    location: "Ikoyi",
    website: "https://www.rele.co/",
    img: "/island_cultural_place/Rele Gallery.jpg",
  },
  {
    name: "Omenka Gallery",
    location: "Ikoyi",
    website: "https://www.omenka.gallery/",
    img: "/island_cultural_place/Omenka Gallery.png",
  },
  {
    name: "Thought Pyramid Art Centre",
    location: "Ikoyi",
    website: "https://thoughtpyramidartcentre.com/",
    img: "/island_cultural_place/Thought Pyramid Art Centre.jpg",
  },
  {
    name: "Sachs Gallery",
    location: "Lekki",
    website: "https://www.xhbt.org/gallery/sachs-gallery-lagos",
    img: "/island_cultural_place/Sachs Gallery.jpg",
  },
  {
    name: "Quintessence",
    location: "Ikoyi",
    website: "https://quintessenceltd.com/",
    img: "/island_cultural_place/Quintessence.jpg",
  },
  {
    name: "Alára",
    location: "Victoria Island",
    website: "https://alaralagos.com/",
    img: "/island_cultural_place/Alára.jpg",
  },
  {
    name: "MOCA LAGOS Museum Of Contemporary Art, Lagos",
    location: "Lekki",
    website: "https://mocalagos.com/",
    img: "/island_cultural_place/Museum Of Contemporary Art.jpg",
  },
];

const mainland_cultural_place = [
  {
    name: "The Center for Contemporary Art Lagos (CCA Lagos)",
    location: "Yaba",
    website: "https://ccalagos.org/",
    img: "/mainland_cultural_place/The Center for Contemporary Art.png",
  },
  {
    name: "ArtForFun Sip and Paint Studio",
    location: "Surulere",
    website: "https://artforfun.com.ng/",
    img: "/mainland_cultural_place/ArtForFun Sip and Paint Studio.jpg",
  },
  {
    name: "TheAfricanStore by CraftsVillage (AOSM)",
    location: "Surulere",
    website:
      "https://artpavilion.com.ng/listing/theafricanstore-by-craftsvillage/",
    img: "/mainland_cultural_place/TheAfricanStore By CraftsVillage.jpg",
  },
  // {
  //   name: "Nittyartenterprise Art Studio",
  //   location: "Somolu",
  //   website: "https://www.instagram.com/p/DVh69YiiK0N/",
  //   img: "/mainland_cultural_place/art-spaces/nittyartenterprise.jpg",
  // },
  {
    name: "Kellyz Africana Craft Store",
    location: "Ikeja",
    website: "https://www.instagram.com/kellyzafricana/?hl=en",
    img: "/mainland_cultural_place/Kellyz Africana Craft Store.jpg",
  },
  // {
  //   name: "Art & Craft Nigeria",
  //   location: "Ikeja",
  //   website: "https://www.solstudioart.com/",
  //   img: "/mainland_cultural_place/art-spaces/art-and-craft-nigeria.jpg",
  // },
];

function PlacesSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-20">
      <div className="mx-auto max-w-310 flex flex-col">
        <p className="text-sm font-jost text-black500 mb-8">
          To ensure that our guest get the best of the Invest Lagos 3.0 and
          enjoy the city of Lagos, we are recommending the following cultural
          places, which are around the city of Lagos.
        </p>
        {/* island hostels */}
        <div className="flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-3">
            <h4 className="text-green100 font-manrope text-2xl font-semibold">
              Lagos Island
            </h4>
            <p className="text-green100 font-manrope text-xs font-medium">
              Below are the list of Cultural Places in Lagos Island
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {island_cultural_place.map(({ name, img, location, website }) => (
              <div key={name} className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-8 h-full">
                  <div className="border-27 border-green100 rounded-xl shadow-hotel">
                    <img src={img} alt="" className="h-50 w-full" />
                  </div>
                  <div className="flex flex-col gap-3 font-jost">
                    <h5 className="text-lg font-semibold text-black100">
                      {name}
                    </h5>
                    <p className="text-sm text-black">{location}</p>
                  </div>
                </div>
                <a
                  target="_blank"
                  href={website}
                  className="border border-green100 rounded-md text-green100! flex justify-center items-center font-jost font-semibold! py-2.5 text-xs hover:bg-green100 hover:text-white! transition"
                >
                  View Website
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* mainland hostels */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-green100 font-manrope text-2xl font-semibold">
              Lagos Mainland
            </h4>
            <p className="text-green100 font-manrope text-xs font-medium">
              Below are the list of Cultural Places in Lagos mainland
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mainland_cultural_place.map(({ name, img, location, website }) => (
              <div key={name} className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-8 h-full">
                  <div className="border-27 border-green100 rounded-xl shadow-hotel">
                    <img src={img} alt="" className="h-50 w-full" />
                  </div>
                  <div className="flex flex-col gap-3 font-jost">
                    <h5 className="text-lg font-semibold text-black100">
                      {name}
                    </h5>
                    <p className="text-sm text-black">{location}</p>
                  </div>
                </div>
                <a
                  target="_blank"
                  href={website}
                  className="border border-green100 rounded-md text-green100! flex justify-center items-center font-jost font-semibold! py-2.5 text-xs hover:bg-green100 hover:text-white! transition"
                >
                  View Website
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacesSection;
