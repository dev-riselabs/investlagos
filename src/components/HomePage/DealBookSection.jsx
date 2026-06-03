import { FaPlay } from "react-icons/fa";

function DealBookSection() {
  return (
    <section className="dealbook-bg  px-4 py-8 md:px-10 lg:px-20">
      <div className="flex flex-col md:justify-evenly  md:flex-row gap-5 md:gap-4 lg:gap-8 md:items-center max-w-310 mx-auto">
        <div className="flex flex-col items-center mx-auto">
          <img
            src="/lagos_industrial_policy.png"
            alt=""
            className="max-h-100"
          />
          <h3 className=" font-jost font-medium text-xl md:text-center md:text-base my-5">
            Download the Lagos State 2025 - 2030 Industrial Policy
          </h3>
          <a
            // href="/DealBook for Invest Lagos 3.0.pdf"
            href="/Lagos State Industrial Policy 2025 - 2030.pdf"
            download
            className={`py-1.5 px-5 md:p-2.5 pl-4 md:px-8 flex items-center justify-center gap-2 md:gap-4 rounded-sm bg-red  md:self-center`}
          >
            <span
              className={`text-base pe-5 font-jost font-bold text-white text-center`}
            >
              Download
            </span>
            <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center">
              <FaPlay className={`w-4 h-4 md:w-5 md:h-5 text-white`} />
            </div>
          </a>
        </div>
        <div className="flex flex-col gap-6 max-w-xl md:items-center md:flex-1">
          <img src="/pebec_lagos.png" alt="" className="max-h-120" />
        </div>
      </div>
    </section>
  );
}

export default DealBookSection;
