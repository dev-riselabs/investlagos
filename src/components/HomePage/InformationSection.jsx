import { LuMapPin } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { FiCamera } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { LuCopy } from "react-icons/lu";

const informations = [
  {
    icon: LuMapPin,
    heading: "Headquarters",
    title: "Ministry of Commerce, Cooperatives, Trade and Investment",
    sub: "Alausa, Lagos, Nigeria.",
    link: "visit us",
  },
  {
    icon: GoGlobe,
    heading: "Digital Connect",
    title: "investinlagos@lagosmccti.com",
    sub: "",
    link: "Email us",
  },
  {
    icon: IoIosCall,
    heading: "HELP Line",
    title: "+234.707.662.3338",
    phones: [
      "+234 8108218640",
      "+234 9066697266",
      "+234 9064232315",
      "+234 8169374236",
      "+234 8144331262",
      "+234 8161142385",
      "+234 8164495419",
      "+234 8147638085",
    ],
    sub: "",
    link: "CALL us",
  },
  {
    icon: FiCamera,
    heading: "WE’RE SOCIAL",
    title: "@investlagos_",
    sub: "",
    link: "follow us",
  },
];

function InformationSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-20 md:py-30 border-t border-t-yellow bg-green100">
      <div className=" flex flex-col gap-20 max-w-310 mx-auto">
        <div className="flex flex-col gap-10">
          <h3 className="text-yellow font-jost font-medium text-2xl md:text-4xl relative after:absolute after:content-[''] after:left-0 after:h-1 after:md:h-2 after:w-25 after:bg-white after:-bottom-4">
            Reach out to our Information Center
          </h3>
          <p className="text-white font-jost text-base md:text-xl font-medium max-w-[50ch]">
            Need help with travel arrangements, hotel bookings, or media
            accreditation? Our team is ready to assist you every step of the
            way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
          {informations.map(
            ({ icon: Icon, heading, title, sub, link, phones }, i) => (
              <div
                key={heading}
                className="p-5 md:p-10 flex flex-col gap-12 bg-black/10 rounded-4xl "
              >
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="w-11 md:w-16 h-11 md:h-16 flex items-center justify-center border border-white/30 bg-black/10 rounded-md md:rounded-3xl">
                    <Icon className="w-5 md:w-7 h-5 md:h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-3 pt-7">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                    <span className="text-white font-jost text-[10px] font-bold tracking-[4px] uppercase">
                      {heading}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-white text-lg md:text-xl font-medium font-jost">
                      {title}
                    </h4>
                    {phones && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-x-4">
                        {phones.map((phone) => (
                          <h4
                            key={phone}
                            className="text-white text-lg md:text-xl font-medium font-jost"
                          >
                            {phone}
                          </h4>
                        ))}
                      </div>
                    )}
                    <p className="text-white text-sm md:text-base font-medium font-jost">
                      {sub}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-20 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="border-b border-b-white/20 text-white font-bold font-jost uppercase text-[10px] tracking-[3px]">
                      {link}
                    </span>
                    <LuExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5">
                    <LuCopy className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
