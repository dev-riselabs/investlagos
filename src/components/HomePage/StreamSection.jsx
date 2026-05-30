import { FaPlay } from "react-icons/fa";

const StreamSection = () => {
  return (
    <section
      id="stream"
      className="px-4 md:px-10 lg:px-20 py-10 md:py-20 flex justify-center bg-green100"
    >
      <div className="max-w-4xl flex flex-col items-center gap-6">
        <h2 className="text-2xl font-medium font-jost text-white sm:text-4xl">
          Stream the Summit Live
        </h2>
        <p className="font-jost font-medium text-center text-sm md:text-lg leading-7 text-white">
          Join Invest Lagos 3.0 live and experience keynote sessions, investor
          showcases, strategic conversations and landmark partnerships shaping
          the future of investment and economic transformation in Lagos.
        </p>
        <a href="https://www.youtube.com/@invest-lagos" target='_blank'
          className={`p-1.5 md:p-2.5 pl-4 md:px-8 flex items-center gap-2 md:gap-4 rounded-sm bg-red `}
        >
          <span
            className={`text-xs font-jost font-bold text-white`}
          >
            Watch online
          </span>

          <div className="bg-white/20 backdrop-blur-md backdrop-brightness-100 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center ">
            <FaPlay className={`w-4 h-4 md:w-5 md:h-5 text-white`} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default StreamSection;
