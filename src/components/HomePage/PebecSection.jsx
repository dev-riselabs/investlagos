import { useEffect, useRef, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoSparklesOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

// Detects when the host element first enters the viewport so the counters
// only run when the user actually scrolls the section into view.
function useInViewOnce({ threshold = 0.3, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}

// Animates a number from 0 up to `end` once `start` flips to true.
// `format` controls how the running value is rendered each frame.
function CountUp({
  end,
  start,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  format = "comma",
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setValue(end);
      return;
    }

    const startTime = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(end * ease(progress));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end, duration]);

  const rendered =
    format === "comma"
      ? Math.round(value).toLocaleString("en-US")
      : value.toFixed(decimals);

  return (
    <>
      {prefix}
      {rendered}
      {suffix}
    </>
  );
}

function PebecSection() {
  const [sectionRef, inView] = useInViewOnce();

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-8 bg-green100"
    >
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
              <CountUp
                start={inView}
                end={400000000}
                prefix="$"
                suffix="+"
                duration={2200}
              />
            </h4>
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col gap-1">
                <h6 className="text-green50 font-inter font-bold text-2xl">
                  <CountUp
                    start={inView}
                    end={10}
                    prefix="₦"
                    suffix="B"
                    duration={1500}
                  />
                </h6>
                <p className="text-white font-inter text-[10px] uppercase">
                  LASMECO seed
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h6 className="text-white font-inter font-bold text-2xl">
                  <CountUp start={inView} end={84} suffix="%" duration={1500} />
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
              <CountUp
                start={inView}
                end={450000000}
                prefix="₦"
                suffix="+"
                duration={2200}
              />
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
                <FiUsers className="text-white w-6 h-6" />
              </div>
              <h4 className="font-inter font-bold text-white text-4xl pt-4">
                <CountUp start={inView} end={44} duration={1400} />
              </h4>
              <p className="font-inter font-medium uppercase text-white text-[11px]">
                Imota Light Industrial units. 96% complete, commissioning June
                2026
              </p>
            </div>
            <img src="/landscape-img.png" alt="" />
          </div>
          <div className="flex flex-col gap-3">
            {[
              {
                title: "COOPERATIVES",
                value: 5000,
                description:
                  "Cooperators reskilled on the City & Guilds curriculum, LASCOCO 2.0",
              },
              {
                title: "TRADE",
                value: 450,
                description:
                  "sq m. Largest-ever Lagos Pavilion at the 39th LITF, hosting 180 exhibitors",
              },
            ].map(({ title, value, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 md:gap-1 rounded-4xl bg-white p-4 md:p-6 border border-black200"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs text-black font-consolas tracking-widest">{title}</h4>
                  <div className="w-1 h-1 rounded-full bg-green500"></div>
                </div>

                <h5 className="text-black font-inter text-2xl font-bold">
                  <CountUp start={inView} end={value} duration={1600} />
                </h5>
                <p className="text-xs text-black font-inter">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <img src="./PEBEC.jpg 1.png" alt="" className="h-10 max-w-30"/>
        <p className="text-white font-medium text-lg md:text-sm font-jost">
          2025 Winner Ease of Doing Business Best Subnational Investment
          Environment
        </p> 
      </div>
    </section>
  );
}

export default PebecSection;
