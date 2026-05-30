import React from "react";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="#008751" className="h-4 w-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#008751"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const locMembers = [
  {
    name: 'HON Folashade Ambrose Medebem',
    role: 'Co-Chair, Local Organising Committee',
    photo: '/governance-images/HON Folashade Ambrose Medebem.png',
    bio: [
      "Honourable Commissioner, Commerce, Cooperatives, Trade, and Investment,  Lagos State Government (LASG)   Folashade Bada Ambrose-Medebem is a seasoned leader with over 20 years of  diverse experience in strategy, finance, sustainability, and corporate affairs.  Appointed in September 2023, she has a proven track record of driving award winning business transformation strategies for FTSE100 companies across the UK,  Europe, and Nigeria.",

      "Her leadership roles include serving on the Summit 24 Executive Committee of the  Nigeria Economic Summit Group and as a board member of the UN Sustainable  Development Goal Private Sector Advisory Group. Folashade also served on the  board of the EuroChams (European Business Chamber) Nigeria, as the inaugural  President, working with the Ambassador of European Union to Nigeria and to the  Economic Community of West African States (ECOWAS) advocating the promotion  of bilateral trade, investments and exchanges between European and Nigerian  businesses.",

      "Folashade holds a BA Hons in Accounting Finance, an MBA from the Open  University Business School, and has completed advanced leadership programs at  Lagos Business School, Saïd Business School, University of Oxford and Harvard  Kennedy School. Recognized as one of Nigeria’s top 50 inspiring women, she has  also represented Nigeria as a Senator at the World Business Angels Investment  Forum, advocating for financial inclusion and gender parity.",

      "Folashade is passionately committed to delivering on Mr. Governor Babajide  Sanwo-Olu's vision of making Lagos Africa's Model Mega City and a global  economic and financial hub by promoting sustainable economic growth, attracting  investment, and strengthening the private sector through innovative policies and  tailored services. Folashade currently serves as council board member of Lagos  International Financial Centre (LIFC) inaugurated and chaired by the Executive  Governor Lagos State - Dr. (Mr.) Babajide Sanwo-Olu (and co-chaired by Mr. Mr.  Aigboje Aig-Imoukhuede (Chairman of EnterpriseNGR and Group Chairman  Access Holdings Plc. representing the private sector). The primary goal of the LIFC Council is to foster a dynamic, interconnected, and  thriving financial and professional services sector in Lagos whilst creating an  enabling ease of doing business environment that supports seamless trading,  attracts foreign investment, and enhance the competitiveness of the financial  markets.   Folashade also heads leadership of Lekki Free Zone (LFZ), Lagos State Consumer  Protection Agency (LASCOPA) and Lagos State Cooperatives and  Entrepreneurship College ( LASCOCO) in her role as Honourable Commissioner.",
    ],
  },
  {
    name: 'Mr. Sam Egube',
    role: 'Co-Chair, Local Organising Committee',
    photo: '/governance-images/Mr. Sam Egube.png',
    bio: [
      "Samuel Egube, FNSE, FICA, HCIB, MNIM, MIoD, COREN, is a  seasoned public sector leader and corporate executive with over 34  years of experience spanning banking, governance, economic  policy and institutional transformation.",

      "He currently serves as  Deputy Chief of Staff to the Governor of Lagos State, following his  tenure as Commissioner for Economic Planning and Budget, where  he led strategic policy development, fiscal planning, resource  allocation and state-wide performance management.",

      "A Civil  Engineering graduate of the University of Benin, he also holds an  Executive MBA from IESE Business School, University of Navarra,  Spain, and has completed executive programmes at Harvard,  INSEAD, Wharton and Columbia. Widely respected for his  leadership and reform-driven approach, he has built a distinguished  career across both the private and public sectors.",
    ],
  },
];

/* ─── Card ───────────────────────────────────────────────────────────────── */
function LOCCard({ name, role, photo, bio }) {
  return (
    <article className="flex flex-col il-card shadow-card rounded-xl bg-white ring-1 ring-slate-100">
      {/* Photo */}
      <div className="overflow-hidden rounded-t-xl il-card-media">
        <img
          src={photo}
          alt={name}
          className="block w-full object-cover object-top"
          style={{ aspectRatio: "3/4" }}
          loading="lazy"
        />
      </div>

      {/* Text body */}
      <div className=" flex flex-1 flex-col p-4 md:p-6 gap-5">
        <div>
          <h3 className="text-base font-bold text-green450 font-jost sm:text-lg">
            {name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate900 font-jost">
            {role}
          </p>
        </div>

        <div className=" space-y-3">
          {bio.map((paragraph, i) => (
            <p key={i} className="text-[13px] leading-relaxed text-slate900">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Social icons */}
        <div className=" flex items-center gap-3 mt-auto">
          <button
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-white transition-opacity hover:opacity-80"
          >
            <LinkedInIcon />
          </button>
          <button
            aria-label="Email"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green550 text-slate-500 transition-colors hover:border-green200 hover:text-green200"
          >
            <MailIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ─── Main export ────────────────────────────────────────────────────────── */
const GovernanceLOC = () => {
  return (
    <section className="bg-white px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-310">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-xl font-bold text-green400 font-jost sm:text-2xl lg:text-[28px]">
            Local Organising Committee (LOC)
          </h2>
          <p className="mt-2 text-sm text-mint">Committee Members</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-9">
          {locMembers.map((m) => (
            <LOCCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceLOC;
