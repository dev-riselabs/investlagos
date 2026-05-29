import { FaArrowTrendUp } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

function PebecSection() {
  return (
    <section className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-8 bg-green100">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="flex flex-col gap-4 md:col-span-3">
          {/* Investment Achievements IN 2025 */}
          <div className="flex flex-col gap-6 p-5 md:p-10 rounded-4xl bg-green400 relative overflow-hidden">
            <img
              src="/Overlay+Blur+top.png"
              alt=""
              className="absolute top-0 left-0"
            />
            <img
              src="/Overlay+Blur.png"
              alt=""
              className="absolute -right-10 -bottom-10"
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-md backdrop-brightness-95 rounded-md w-10 h-10 flex items-center justify-center shrink-0">
                  <FaArrowTrendUp className="text-white w-6 h-6" />
                </div>
                <h5 className="font-jost text-white text-sm uppercase">
                  Investment Achievements IN 2025
                </h5>
              </div>
              <IoSparklesOutline className="w-5.5 h-5.5 rotate-45 text-green500" />
            </div>
            <h4 className="font-inter font-bold text-white text-3xl sm:text-5xl lg:text-7xl">
              $400,000,000+
            </h4>
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <h6 className="text-green50 font-inter font-bold text-2xl">
                  ₦10B
                </h6>
                <p className="text-white font-inter text-[10px] uppercase">
                  LASMECO seed
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-white font-inter font-bold text-2xl">
                  84%
                </h6>
                <p className="text-white font-inter text-[10px] uppercase">
                  Resolution rate
                </p>
              </div>
            </div>
          </div>
          {/* COMMERCE */}
          <div className="flex flex-col gap-4 p-5 md:p-8 rounded-4xl border border-white bg-white/11 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <h5 className="text-yellow text-xs uppercase">COMMERCE</h5>
              <div className="w-2 h-2 bg-green50 rounded-full"></div>
            </div>
            <h6 className="font-bold text-yellow font-inter text-2xl">
              ₦450,000,000+
            </h6>
            <p className=" text-yellow font-inter text-xs">
              Returned to Lagos consumers through LASCOPA enforcement
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:col-span-2">
          <div className="bg-green150 rounded-4xl p-5 pt-3.25 md:p-8 md:pt-3.25 flex flex-col gap-1.5">
            <div className="flex flex-col gap-1">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-xl backdrop-brightness-95 rounded-xl">
                <FiUsers className="text-white w-6 h-6"/>
              </div>
              <h4 className="font-inter font-bold text-white text-4xl pt-4">44</h4>
              <p className="font-inter font-medium uppercase text-white text-[11px]">Imota Light Industrial units. 96% complete, commissioning June 2026</p>
            </div>
            <img src="/landscape-img.png" alt="" />
          </div>
          <div className="flex flex-col gap-3">
            {
                [{title : 'COMMERCE', value: '₦450,000,000+', description: 'Returned to Lagos consumers through LASCOPA enforcement'},
                    {title : 'TRADE', value: '450', description: 'sq m. Largest-ever Lagos Pavilion at the 39th LITF, hosting 180 exhibitors'},
                ].map(({title, value, description}) => <div key={title} className="flex flex-col gap-3 md:gap-1 rounded-4xl bg-white p-4 md:p-6 border border-black200">
                    <h4 className="text-xs text-black ">{title}</h4>
                    <h5 className="text-black font-inter text-2xl font-bold">{value}</h5>
                    <p className="text-xs text-black font-inter">{description}</p>

                </div>)
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <img src="./PEBEC.jpg 1.png" alt="" className="h-20 max-w-60"/>
        <p className="text-white font-medium text-lg md:text-xl font-jost">
          2025 Winner | Ease of Doing Business | Best Subnational | Investment
          Environment
        </p>
      </div>
    </section>
  );
}

export default PebecSection;
