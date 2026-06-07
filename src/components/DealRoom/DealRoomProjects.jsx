import { Reveal, MouseTilt } from "../../lib/animations";
import { IoMdSearch } from "react-icons/io";

const projects = [
  {
    title: "Power Grid Investment",
    subtitle: "This is a good deal",
    tags: ["Nigeria", "Energy", "Development"],
    required: "$100K",
    raised: "$50K",
    image: "/Green Africa Investment.png",
  },
  {
    title: "Payment gateways",
    subtitle: "This is a good deal",
    tags: ["Nigeria", "Technology", "Development"],
    required: "$100K",
    raised: "$50K",
    image: "/Green Africa Investment.png",
  },
  {
    title: "Green Africa Investment",
    subtitle: "This is a good deal",
    tags: ["Nigeria", "Energy", "Development"],
    required: "$100K",
    raised: "$50K",
    image: "/Green Africa Investment.png",
  },
];

const FunnelIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 4h18l-7 9v6l-4 2v-8L3 4Z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

function FilterPill({ label }) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-md bg-white px-4 py-2.5 text-xs font-medium text-black100 shadow-sm transition hover:bg-slate-50"
    >
      <span className="text-black100 font-jost shrink-0">
        <FunnelIcon />
      </span>
      <select name="" id="">
        <option value="">{label}</option>
      </select>
    </button>
  );
}

function ProjectCard({ title, subtitle, tags, required, raised, image }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-card border border-slate250 il-card">
      {/* Image */}
      <div className="aspect-video overflow-hidden il-card-media">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`${
                i === 2
                  ? "bg-slate350 border-black/1"
                  : "border-slate250 bg-transparent"
              } rounded-full border px-3 py-1 text-xs font-medium text-black300`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base font-bold font-jost text-black300 leading-snug">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-violet font-jost">{subtitle}</p>

        {/* Required / Raised */}
        <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between text-sm font-jost">
            <span className="text-violet">Required:</span>
            <span className="font-semibold text-black300">{required}</span>
          </div>
          <div className="flex items-center justify-between text-sm font-jost">
            <span className="text-violet">Raised:</span>
            <span className="font-bold text-green850">{raised}</span>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-4 border-t border-slate-100 pt-4">
          <button
            type="button"
            className="flex items-center font-jost gap-2 text-base text-black300 hover:text-green100 transition"
          >
            <span className="font-bold"> View Details</span>
           
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

const DealRoomProjects = () => {
  return (
    <>
      {/* Filter / search bar */}
      <section className="bg-green200 px-4 md:px-10 lg:px-20 py-10 md:py-15">
        <div className="mx-auto flex max-w-310 flex-wrap items-center md:justify-end gap-3">
          {/* Search pill */}
          <div className="flex items-center gap-3 rounded-xl font-jost border border-white bg-transparent px-5 py-2.5 w-full sm:w-80">
            <IoMdSearch className="w-6 h-6 text-white" />

            <input
              type="text"
              placeholder="Search reports..."
              className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/70"
            />
          </div>

          {/* Filter dropdowns */}
          <FilterPill label="All Categories" />
          <FilterPill label="All Years" />
          <FilterPill label="All..." />
        </div>
      </section>

      {/* Project cards */}
      <section className="bg-slate-50 px-6 py-12 lg:py-14">
        <div className="mx-auto grid max-w-310 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} direction="up" delay={i * 110} distance={28}>
              <MouseTilt intensity={5}>
                <ProjectCard {...p} />
              </MouseTilt>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default DealRoomProjects;
