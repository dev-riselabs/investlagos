import React from "react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DealRoomIntro = () => {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto grid max-w-310 items-center gap-10 lg:grid-cols-2">
        {/* Left — copy */}
        <div>
          <h2 className="text-2xl font-bold text-black300 font-jost sm:text-3xl">
            Investment Hub (Deal Room)
          </h2>
          <p className="mt-4 max-w-md text-sm font-manrope leading-7 text-black300">
            Welcome to Lagos&apos;s investment digital experience &mdash; where
            you can explore live, deal-room ready opportunities and engage
            directly with project sponsors.
          </p>
        </div>

        {/* Right — thumbnail */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-jost text-black">Click to fill Investment & Deals Project Proposals</p>
          <Link
            to="/deal-room/proposal"
            className={`p-1.5 md:p-2.5 pl-4 md:px-8 flex items-center gap-2 md:gap-4 rounded-sm bg-red self-start`}
          >
            <span className={`text-xs font-jost font-bold text-white`}>
              Fill form
            </span>

            {/* <div className="bg-white/20 backdrop-blur-md backdrop-brightness-100 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center ">
              <FaPlay className={`w-4 h-4 md:w-5 md:h-5 text-white`} />
            </div> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealRoomIntro;
