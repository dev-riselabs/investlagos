import { FaArrowRightLong } from "react-icons/fa6";

const PressSection = () => {
  return (
    <section className="bg-white flex flex-col gap-6 px-4 md:flex-row md:px-10 lg:px-20 py-20 lg:py-28">
      <div className="flex flex-col justify-center gap-4 md:flex-1">
        <h2 className="max-w-lg text-3xl font-bold font-jost leading-snug text-green400  sm:text-4xl">
          Invest Lagos 3.0 Press Conference Forecasts Over N4 Trillion In
          Investment Opportunities
        </h2>
        <p className="leading-7 text-green400 font-jost text-lg">
          The summit, scheduled for June 8–10, 2026, will bring together global
          investors, policymakers, and industry leaders to explore structured
          opportunities across priority sectors including technology,
          infrastructure, manufacturing, and the creative economy.
        </p>
        <button className="mt-8  w-fit rounded bg-green100 border border-green800  px-6 py-3 text-sm font-bold font-jost text-white flex items-center gap-2 hover:bg-green200 transition">
          Read Full Statement <FaArrowRightLong />
        </button>
      </div>
      <div className="bg-slate300 flex items-center justify-center rounded-4xl h-100 shadow-business md:flex-1">
        <img
          src="/business-img.png"
          alt="Business Day press conference coverage"
          className="w-[80%]"
        />
      </div>
    </section>
  );
};

export default PressSection;
