import { LuDollarSign } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

const metrics = [
  {
    title: "Investment & Finance",
    data: [
      {
        title: "$400 million+",
        desc: "- Investment achievements recorded in 2025",
      },
      {
        title: "₦10 billion",
        desc: "- LASMECO Seed Fund supporting enterprise growth",
      },
    ],
  },
  {
    title: "Consumer Protection (LASCOPA)",
    data: [
      {
        title: "₦450 million+",
        desc: "- Returned to Lagos consumers through dispute resolution",
      },
      { title: "84%", desc: "- Complaint resolution rate" },
    ],
  },
  {
    title: "Infrastructure Development",
    data: [
      {
        title: "44 units",
        desc: "- Imota Light Industrial Units under development",
      },
      {
        title: "96% complete",
        desc: "- Commissioning scheduled for June 2026",
      },
    ],
  },
  {
    title: "Cooperative Development (LASCOCO)",
    data: [
      {
        title: "5,000",
        desc: "- Cooperators reskilled under LASCOCO 2.0 using City & Guilds curriculum",
      },
    ],
  },
  {
    title: "Trade & Exhibition",
    data: [
      {
        title: "450 square metres",
        desc: "- Largest-ever Lagos Pavilion at the 39th LITF",
      },
      { title: "180 exhibitors", desc: "- Hosted within the Lagos Pavilion" },
    ],
  },
];
function MetricSection() {
  return (
    <section className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 py-15 md:py-20 metric-bg">
      <div className="flex flex-col gap-6">
        <h2 className="text-green400 font-jost text-2xl md:text-3xl font-semibold">
          Lagos Advantage - Performance Metrics
        </h2>
        <p className="text-green400 font-jost text-base md:text-lg">
          All data below is drawn from official Lagos State Government records.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {metrics.map((metric, i) => {
          const Icon =
            i % 3 === 0 ? LuDollarSign : i % 3 === 1 ? LuBuilding2 : FiUsers;
          return (
            <div
              key={metric.title}
              className="border border-slate250 bg-white shadow-card p-6 rounded-xl flex flex-col gap-5"
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-md ${
                  i % 3 === 0
                    ? "bg-green750/10"
                    : i % 3 === 1
                      ? "bg-orange/10"
                      :  "bg-orange100/10"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    i % 3 === 0
                      ? "text-green750"
                      : i % 3 === 1
                        ? "text-orange"
                        :  "text-orange100"
                  }`}
                />
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MetricSection;
