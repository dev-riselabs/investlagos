import { useState } from "react";
import HotelsSection from "./HotelsSection";
import RestaurantSection from "./RestaurantSection";
import PlacesSection from "./PlacesSection";
import VisaSection from "./VisaSection";

function GuideSection() {
  const [activeTab, setActiveTab] = useState("Hotels");

  function handleActiveTab(value) {
    setActiveTab(value);
  }
  return (
    <section className="flex flex-col">
      <menu className="bg-black600 h-15 md:h-25 px-4 md:px-10 lg:px-20 ">
        <div className="max-w-310 mx-auto flex divide-x divide-white/40 h-full font-jost w-full">
          <button
            onClick={() => handleActiveTab("Hotels")}
            className={`text-white uppercase  font-bold! flex-1 text-base p-2 sm:text-xl ${
              activeTab === "Hotels" ? "bg-green100" : "bg-transparent"
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => handleActiveTab("Restaurants")}
            className={`text-white uppercase font-bold! flex-1 text-base p-2 sm:text-xl ${
              activeTab === "Restaurants" ? "bg-green100" : "bg-transparent"
            }`}
          >
            Restaurants
          </button>
          <button
            onClick={() => handleActiveTab("Cultural Places")}
            className={`text-white uppercase font-bold! flex-1 text-base p-2 sm:text-xl ${
              activeTab === "Cultural Places" ? "bg-green100" : "bg-transparent"
            }`}
          >
            Cultural Places
          </button>
          <button
            onClick={() => handleActiveTab("Visa")}
            className={`text-white uppercase font-bold! flex-1 text-base p-2 sm:text-xl ${
              activeTab === "Visa" ? "bg-green100" : "bg-transparent"
            }`}
          >
            Visa
          </button>
        </div>
      </menu>
      {activeTab === "Hotels" && <HotelsSection />}
      {activeTab === "Restaurants" && <RestaurantSection />}
      {activeTab === "Cultural Places" && <PlacesSection />}
      {activeTab === "Visa" && <VisaSection />}
    </section>
  );
}

export default GuideSection;
