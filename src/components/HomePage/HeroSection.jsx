import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountdownTimer from "../Countdown";

const buttons = [
  { title: "Register Now", isDot: false, path: "/register" },
  { title: "View Agenda", isDot: false, path: "/agenda" },
  { title: "Watch Online", isDot: true },
  {
    title: "View LIVE Dashboard",
    isDot: true,
    href: "https://eventsintel.com/investlagos",
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-green100">
      <div className="bg-white! rounded-4xl hero-bg flex flex-col gap-10 md:gap-16 justify-center px-4 md:px-10 lg:px-20 py-10 md:py-20 text-center lg:py-15">
        <p className="text-[10px] sm:text-xs font-bold font-jost  tracking-[6px] text-black text-center">
          8th to 10th,{" "}
          <span className="uppercase">
            June 2026 | eko hotel & Suites, Victoria Island, Lagos, Nigeria
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="flex flex-col gap-8 md:gap-15 items-start md:col-span-3">
            <div className="flex flex-col gap-3 md:gap-6 items-start">
              <h1 className="text-4xl font-bold text-left leading-tight sm:text-5xl lg:text-6xl text-green100 font-jost">
                Invest in Lagos 3.0
              </h1>
              <p className="text-lg leading-8 text-black100 sm:text-3xl font-bold font-jost text-left">
                Theme: LAGOS: The Business Gateway to Africa
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {buttons.map(({ title, isDot, path, href }, i) => {
                const inner = (
                  <>
                    <div className="flex items-center gap-1">
                      {isDot && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                      <span
                        className={`text-xs font-jost font-bold
                      ${i === 1 ? "text-black" : "text-white"}
                        `}
                      >
                        {title}
                      </span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8  items-center justify-center ">
                      <FaPlay
                        className={`w-4 h-4 ${
                          i === 1 ? "text-black" : "text-white"
                        }`}
                      />
                    </div>
                  </>
                );
                const cls = `p-1.5 md:p-2 pl-4 md:pl-2 flex items-center gap-2 md:gap-2.5 rounded-sm
                  ${
                    i === 0
                      ? "bg-red"
                      : i === 1
                        ? "bg-yellow"
                        : i === 2
                          ? "bg-black100"
                          : "bg-green100"
                  }`;
                return path ? (
                  <Link key={title} to={path} className={cls}>
                    {inner}
                  </Link>
                ) : href ? (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <button key={title} className={cls}>
                    {inner}
                  </button>
                );
              })}
            </div>

            <CountdownTimer />
          </div>
          <div className="flex flex-col gap-4 items-center md:col-span-2 sm:flex-row sm:items-center md:flex-col">
            <div className="md:flex-1 ">
              <img src="/lagos.png" alt="" className="max-h-80" />
            </div>
            <div className="flex flex-row gap-6 max-w-md sm:items-center md:flex-1">
              <a
                href="/DealBook for Invest Lagos 3.0.pdf"
                download
                className={`py-1.5 px-5  pl-4 md:px-8 flex items-center gap-2 md:gap-4 rounded-sm bg-red self-center sm:self-center`}
              >
                <span className={`text-xs font-jost font-bold text-white`}>
                  Download
                </span>
                <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center">
                  <FaPlay className={`w-4 h-4 text-white`} />
                </div>
              </a>
              <h3 className="text-green100 font-jost font-medium text-2xl md:text-left md:text-1xl">
                Download Our Investment Deal Book
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
