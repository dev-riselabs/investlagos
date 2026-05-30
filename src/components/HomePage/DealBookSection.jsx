import { FaPlay } from "react-icons/fa";

function DealBookSection() {
  return (
    <section className="dealbook-bg flex flex-col px-4 py-8 md:px-10  lg:px-20 md:flex-row gap-2 md:gap-4 md:items-center">
      <div className="md:flex-1 ">
        <img
          src="/Screenshot_20260530_135109_Drive.jpg"
          alt=""
          className="max-h-120 max-w-120 w-full"
        />
      </div>
      <div className="flex flex-col gap-6 max-w-xl md:items-center md:flex-1">
        <h3 className="text-green100 font-jost font-medium text-2xl md:text-center md:text-4xl">
          Download the Lagos State 2025 - 2030 Industrial Policy
        </h3>
        <a
          href="/DealBook for Invest Lagos 3.0.pdf"
          download
          className={`py-1.5 px-5 md:p-2.5 pl-4 md:px-8 flex items-center gap-2 md:gap-4 rounded-sm bg-red self-start md:self-center`}
        >
          <span className={`text-xs font-jost font-bold text-white`}>
            Download
          </span>
          <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center">
            <FaPlay className={`w-4 h-4 md:w-5 md:h-5 text-white`} />
          </div>
        </a>
      </div>
    </section>
  );
}

export default DealBookSection;
