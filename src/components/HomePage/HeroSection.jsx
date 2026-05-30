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
      <div className="bg-white! rounded-4xl hero-bg flex flex-col gap-10 md:gap-20 justify-center px-4 md:px-10 lg:px-20 py-10 md:py-20 text-center lg:py-25">
        <p className="mb-4 text-[10px] sm:text-xs font-bold font-jost uppercase tracking-[6px] text-black text-center">
          8th to 10th, June 2026 | eko hotel & Suites, Victoria Island, Lagos,
          Nigeria
        </p>
        <div className="flex flex-col gap-8 md:gap-15 items-start">
          <div className="flex flex-col gap-3 md:gap-6 items-start">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-green100 font-jost">
              Invest in Lagos 3.0
            </h1>
            <p className="text-lg leading-8 text-black100 sm:text-3xl font-bold font-jost text-left">
              Theme: LAGOS: The Business Gateway to Africa
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {buttons.map(({ title, isDot, path, href }, i) => {
              const inner = (
                <>
                  <div className="flex items-center gap-1.5">
                    {isDot && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />
                    )}
                    <span
                      className={`text-xs font-jost font-bold
                      ${i === 1 ? "text-black" : "text-white"}
                        `}
                    >
                      {title}
                    </span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md backdrop-brightness-90 rounded-sm flex w-8 h-8 md:w-9 md:h-9 items-center justify-center ">
                    <FaPlay
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i === 1 ? "text-black" : "text-white"
                      }`}
                    />
                  </div>
                </>
              );
              const cls = `p-1.5 md:p-2.5 pl-4 md:pl-8 flex items-center gap-2 md:gap-4 rounded-sm
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
      </div>
    </section>
  );
};

export default HeroSection;
