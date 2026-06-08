import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, Spotlight, Stagger, MouseTilt } from "../lib/animations";
import InformationSection from "../components/HomePage/InformationSection";
import SpeakersCTA from '../components/Speakers/SpeakersCTA'

/* ─────────────────── DATA ─────────────────── */

// const days = [
//   {
//     label: "DAY 1",
//     date: "8TH JUNE",
//     sessions: [
//       {
//         timeStart: "09:30AM",
//         timeEnd: "11:30AM",
//         tag: "ARRIVAL",
//         title: "Arrival, Registration & Tea Break",
//         desc: "This session establishes political clarity, strategic alignment and macroeconomic confidence for the summit. The keynote address situates Lagos within Nigeria's broader economic trajectory and affirms its continental role as Africa's primary gateway for trade, capital and innovation. The session opens with a cultural performance celebrating Lagos as a living symbol of African enterprise.",
//         subsections: [
//           {
//             label: "MASTERS OF CEREMONY",
//             plain: true,
//             items: [
//               { name: "Mrs. Rolake Akinkugbe Filani" },
//               { name: "Mr. Zaki Cooper" },
//             ],
//           },
//           {
//             label: "OPENING PERFORMANCE / SPOKEN WORD",
//             items: [{ name: "Terra Kulture" }],
//           },
//           {
//             label: "WELCOME ADDRESS",
//             items: [
//               {
//                 name: "Mrs. Folashade Kaosarat Bada Ambrose-Medebem",
//                 role: "Honourable Commissioner, Ministry of Commerce, Cooperatives, Trade & Investment, Lagos State Government",
//               },
//             ],
//           },
//           {
//             label: "OPENING REMARKS",
//             items: [
//               {
//                 name: "Lord Marland",
//                 role: "Chair, Commonwealth Enterprise & Investment Council (CWEIC)",
//               },
//             ],
//           },
//           {
//             label: "GOODWILL MESSAGES",
//             items: [
//               {
//                 name: "Mrs. Kanayo Awani",
//                 role: "Executive Vice President, Afreximbank",
//               },
//               {
//                 name: "Senator Daisy Danjuma",
//                 role: "Executive Chairman, JAPETRO",
//               },
//               {
//                 name: "His Excellency, Wamkele Mene",
//                 role: "Secretary-General, African Continental Free Trade Area, AfCTA",
//               },
//             ],
//           },
//           {
//             label: "SPECIAL ADDRESS",
//             items: [
//               {
//                 name: "Hon. Shirley Botchwey",
//                 role: "Secretary-General, The Commonwealth",
//               },
//             ],
//           },
//           {
//             label: "OPENING ADDRESS",
//             items: [
//               {
//                 name: "Mr. Babajide Olusola Sanwo-Olu",
//                 role: "Executive Governor, Lagos State",
//               },
//             ],
//           },
//           {
//             label: "KEYNOTE ADDRESS",
//             items: [
//               {
//                 name: "Asiwaju Bola Ahmed Tinubu, GCFR",
//                 role: "President of the Federal Republic of Nigeria",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "11:30AM",
//         timeEnd: "12:30PM",
//         tag: "TOUR",
//         title: "Governors' Walk-through Pavilion",
//         desc: "Guided Tour of the Pavilion and Exhibition. The President and Governor of Lagos State, accompanied by selected VIP Guests, will tour the exhibition. Delegates are invited to observe.",
//         subsections: [],
//       },
//       {
//         timeStart: "12:30PM",
//         timeEnd: "13:30PM",
//         tag: "PANEL",
//         title: "Panel 1 — Governors' Investment Showcase",
//         desc: "A high-visibility structured platform in which participating State Governors present targeted investment opportunities within their states, framed for an audience of investors, development finance institutions and private sector decision-makers. This format is designed to maximize deal-ready engagement, deliver focused pitches and drive bilateral conversations during the Deal Room sessions that follow.",
//         subsections: [
//           {
//             label: "OPENING REMARKS",
//             items: [
//               {
//                 name: "Dr. Jumoke Oduwole",
//                 role: "Hon. Minister of Trade & Investment",
//               },
//             ],
//           },
//           {
//             label: "MODERATORS",
//             items: [{ name: "Ms. Zain Asher", role: "CNN" }],
//           },
//           {
//             label: "GOVERNORS' INVESTMENT PITCHES",
//             items: [
//               {
//                 name: "HE Caleb Mutfwang",
//                 role: "Executive Governor, Plateau State",
//               },
//               {
//                 name: "HE Agbu Kefas",
//                 role: "Executive Governor, Taraba State",
//               },
//               {
//                 name: "HE Alh. Abdulrahman Abdulrazaq",
//                 role: "Executive Governor, Kwara State",
//               },
//               {
//                 name: "HE Hope Uzodinma",
//                 role: "Executive Governor, Imo State",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "13:30PM",
//         timeEnd: "14:15PM",
//         tag: "PLENARY",
//         title: "Plenary 1 — Lagos: Africa's Global Gateway",
//         desc: "Leaders discuss how Lagos is positioning itself as Africa's leading gateway for trade, investment and global economic engagement. This plenary examines the structural conditions that make Lagos uniquely capable of absorbing large-scale, long-term capital commitments, and sets the strategic tone for the summit's deal-making sessions.",
//         subsections: [
//           {
//             label: "OPENING REMARKS",
//             items: [
//               {
//                 name: "Governor Babajide Olusola Sanwo-Olu",
//                 role: "Executive Governor, Lagos State",
//               },
//             ],
//           },
//           {
//             label: "MODERATOR",
//             items: [{ name: "Mrs. Rolake Akinkugbe-Filani" }],
//           },
//           {
//             label: "PANEL DISCUSSION",
//             items: [
//               {
//                 name: "Mrs. Folashade Kaosarat Ambrose-Medebem",
//                 role: "Honourable Commissioner, Ministry of Commerce, Cooperatives, Trade and Investment, Lagos State Government",
//               },
//               {
//                 name: "Lord Marland",
//                 role: "Commonwealth Enterprise and Investment Council (CWEIC)",
//               },
//               { name: "Engr. Jani Ibrahim", role: "President, NACCIMA" },
//               {
//                 name: "Princess Zahrah Mohammend Audu",
//                 role: "Director General, PEBEC",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "14:30PM",
//         timeEnd: "15:30PM",
//         tag: "LUNCH",
//         title: "Networking Lunch",
//         desc: "Invitation-Only Sectoral Working Lunches running in parallel.",
//         subsections: [],
//       },
//       {
//         timeStart: "15:30PM",
//         timeEnd: "16:30PM",
//         tag: "PLENARY",
//         title: "Plenary 2 — The Future of Technology & Innovation",
//         desc: "This session explores how emerging technologies and innovation ecosystems are shaping the next generation of African enterprise and economic transformation. With Lagos hosting Africa's most active startup ecosystem, panelists examine the convergence of artificial intelligence, digital infrastructure and fintech as drivers of inclusive growth. The discussion will identify the talent, regulatory and capital conditions needed to scale Lagos' technology sector to global competitiveness.",
//         subsections: [
//           {
//             label: "OPENING REMARKS",
//             items: [
//               {
//                 name: "Mr. Tosin Eniolorunda",
//                 role: "Managing Director/CEO, Moniepoint MFB",
//               },
//             ],
//           },
//           {
//             label: "MODERATOR",
//             items: [
//               {
//                 name: "Mr. Zaki Cooper",
//                 role: "Co-Founder and Director, Integra",
//               },
//             ],
//           },
//           {
//             label: "PANEL DISCUSSION",
//             items: [
//               {
//                 name: "Mr. Olugbenga Agboola",
//                 role: "Managing Director/CEO, Flutterwave",
//               },
//               {
//                 name: "Mr. Tubosun Alake",
//                 role: "Honourable Commissioner, Ministry of Innovation, Science & Technology, Lagos State Government",
//               },
//               { name: "Lord Christopher Geidt", role: "Director, Burstock" },
//               {
//                 name: "Mr. Kayode Adeleke",
//                 role: "Managing Director/CEO, Arridex 3D Printing & Manufacturing Company",
//               },
//               {
//                 name: "Mr. Mitchell Elegbe",
//                 role: "Founder and Group CEO, Interswitch",
//               },
//               {
//                 name: "Mrs. Olatomiwa Williams",
//                 role: "Chief Growth & AI Officer (Middle East & Africa), Microsoft",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "16:30PM",
//         timeEnd: "17:30PM",
//         tag: "PLENARY",
//         title: "Plenary 3 — Unlocking Investment",
//         desc: "Investors, financial institutions and policymakers examine the partnerships and financing models needed to unlock long-term economic growth across Africa. This plenary focuses on the mechanics of capital deployment: blended finance structures, development finance institution co-investment frameworks, and the conditions under which commercial capital follows public commitment. Panel lists will address the specific barriers to financial close on large infrastructure and urban development transactions in Lagos.",
//         subsections: [
//           {
//             label: "OPENING REMARKS",
//             items: [
//               {
//                 name: "Mr. Aig Aigboje Imoukhuede",
//                 role: "Co-Chair, Lagos International Financial Centre [LIFC]",
//               },
//             ],
//           },
//           {
//             label: "MODERATOR",
//             items: [
//               {
//                 name: "Mrs. Temi Marcella",
//                 role: "Managing Director, Alvarez Capital",
//               },
//             ],
//           },
//           {
//             label: "PANEL DISCUSSION",
//             items: [
//               {
//                 name: "Mrs. Adeola Ukhola",
//                 role: "Country Manager, British International Investment",
//               },
//               {
//                 name: "Mr Banji Fehintola",
//                 role: "Executive Board Member and Executive Director, Financial Services, Africa Finance Corporation",
//               },
//               {
//                 name: "Mr. Olusegun Alebiosu",
//                 role: "Managing Director/CEO, First Bank of Nigeria Plc",
//               },
//               {
//                 name: "Mr. Abubakar Suleiman",
//                 role: "Managing Director/CEO, Sterling Bank",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "17:30PM",
//         timeEnd: "17:45PM",
//         tag: "PLENARY",
//         title: "Closing Plenary",
//         desc: "",
//         subsections: [
//           {
//             label: "PANEL DISCUSSION",
//             items: [
//               {
//                 name: "Lagos International Financial Centre",
//                 role: "Video Presentation",
//               },
//               {
//                 name: "Mr. Aig Aigboje Imoukhuede",
//                 role: "Co-Chair, Lagos International Financial Centre [LIFC]",
//               },
//             ],
//           },
//           {
//             label: "CLOSING REMARKS",
//             items: [
//               { name: "Governor Babajide Olusola Sanwo-Olu of Lagos State" },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "19:00PM",
//         timeEnd: "LATE",
//         tag: "GALA",
//         title: "Gala Dinner & Networking Reception",
//         desc: "",
//         subsections: [
//           {
//             label: "HOSTED BY",
//             items: [
//               {
//                 name: "Dr. Kadri Obafemi Hamzat",
//                 role: "Deputy Governor of Lagos State",
//               },
//               { name: "Lagos Fashion Show" },
//               { name: "Falana" },
//               { name: "Chamber Orchestra" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "DAY 2",
//     date: "9TH JUNE",
//     sessions: [
//       {
//         timeStart: "09:00AM",
//         timeEnd: "10:30AM",
//         tag: "PLENARY",
//         title: "High-Level Panels: Infrastructure & Energy",
//         desc: "Deep dive into Lagos' pipeline of bankable infrastructure and energy projects with sector leaders, DFIs and institutional investors.",
//         subsections: [
//           {
//             label: "PANELLISTS",
//             items: [
//               {
//                 name: "Engr. Jani Ibrahim",
//                 role: "Minister of Power, Federal Republic of Nigeria",
//               },
//               // {
//               //   name: "Mr. Tom Cartledge",
//               //   role: "Chief Executive Officer, Actis",
//               // },
//             ],
//           },
//         ],
//       },
//       {
//         timeStart: "11:00AM",
//         timeEnd: "01:00PM",
//         tag: "DEAL ROOM",
//         title: "Deal Rooms & Investment Showcases",
//         desc: "Curated one-on-one meetings between project sponsors and qualified investors with pre-matched sessions and due-diligence support.",
//         subsections: [],
//       },
//       {
//         timeStart: "02:30PM",
//         timeEnd: "04:30PM",
//         tag: "PANEL",
//         title: "AfCFTA & Lagos Business Opportunities",
//         desc: "How Lagos businesses can leverage the AfCFTA for continental expansion through export-ready sectors, rules of origin and cross-border payments.",
//         subsections: [],
//       },
//       {
//         timeStart: "07:00PM",
//         timeEnd: "LATE",
//         tag: "NETWORKING",
//         title: "Music & Networking Evening",
//         desc: "Live performances and informal networking with delegates, investors and partners.",
//         subsections: [],
//       },
//     ],
//   },
//   {
//     label: "DAY 3",
//     date: "10TH JUNE",
//     sessions: [
//       {
//         timeStart: "08:00AM",
//         timeEnd: "05:00PM",
//         tag: "SITE TOUR",
//         title: "Industrial & Infrastructure Site Tour",
//         desc: "A curated full-day tour of flagship industrial and infrastructure assets including the Tolaram/Lagos Free Zone, Lekki Free Trade Zone, Dangote Fertilizer Plant, Dangote Petroleum Refinery and Arridex 3D Printing & Manufacturing Factory.",
//         subsections: [],
//       },
//     ],
//   },
// ];


const days = [
  {
    label: "DAY 1",
    date: "8TH JUNE",
    sessions: [
      {
        timeStart: "09:30AM",
        timeEnd: "11:30AM",
        tag: "OPENING",
        title: "Opening Ceremony",
        desc:
          "Official opening ceremony of Invest Lagos 3.0, bringing together government leaders, investors, business executives and development partners to set the tone for the summit.",
        subsections: [
          {
            label: "MASTERS OF CEREMONY",
            items: [
              { name: "Ms. Mojibade Sosanya" },
              { name: "Mr. Mark Eddo" },
            ],
          },
        ],
      },

      {
        timeStart: "11:30AM",
        timeEnd: "12:30PM",
        tag: "PANEL",
        title: "Panel 1 — Governors' Investment Showcase",
        desc:
          "The Nigerian Economy and Opportunities for Sub-national Economic Acceleration.",
        subsections: [],
      },

      {
        timeStart: "12:30PM",
        timeEnd: "01:30PM",
        tag: "TOUR",
        title: "Governors' Pavilion Walk-through",
        desc:
          "Guided walk-through of the Governors' Pavilion and investment exhibition.",
        subsections: [],
      },

      {
        timeStart: "01:30PM",
        timeEnd: "02:30PM",
        tag: "PLENARY",
        title: "Plenary 1 — Lagos: Africa's Global Gateway",
        desc:
          "Leaders discuss Lagos as Africa’s leading gateway for trade, investment and global economic engagement.",
        subsections: [
          {
            label: "OPENING REMARKS",
            items: [
              {
                name: "Her Excellency Dr. Jumoke Oduwole",
                role: "Hon. Minister for Trade & Investment",
              },
            ],
          },
          {
            label: "MODERATOR",
            items: [{ name: "Mrs. Rolake Akinkugbe-Filani" }],
          },
          {
            label: "PANEL DISCUSSION",
            items: [
              { name: "Mrs. Folashade Ambrose-Medebem", role: "HC, MCCTI" },
              { name: "Engr. Jani Ibrahim", role: "President, NACCIMA" },
              { name: "Princess Zahrah Mohammed Audu", role: "DG, PEBEC" },
              {
                name: "Mr. Yann Gilbert",
                role: "European Business Chamber, Nigeria",
              },
            ],
          },
        ],
      },

      {
        timeStart: "02:30PM",
        timeEnd: "03:30PM",
        tag: "LUNCH",
        title: "Networking Lunch",
        desc: "Invitation-only sectoral working lunches running in parallel.",
        subsections: [],
      },

      {
        timeStart: "03:30PM",
        timeEnd: "04:30PM",
        tag: "PLENARY",
        title: "Plenary 2 — The Future of Technology & Innovation",
        desc:
          "Exploring AI, fintech, digital infrastructure and innovation ecosystems shaping Africa’s economic transformation.",
        subsections: [
          {
            label: "OPENING REMARKS",
            items: [{ name: "Mr. Tosin Eniolorunda", role: "CEO, Moniepoint MFB" }],
          },
          {
            label: "MODERATOR",
            items: [{ name: "Mr. Zaki Cooper" }],
          },
          {
            label: "PANEL DISCUSSION",
            items: [
              { name: "Mr. Olugbenga Agboola", role: "CEO, Flutterwave" },
              {
                name: "Mr. Tunbosun Alake",
                role: "Commissioner, Innovation, Science & Technology",
              },
              { name: "Lord Geidt", role: "Director, Burstock" },
              { name: "Mr. Kayode Adeleke", role: "CEO, Arridex" },
              {
                name: "Mrs. Olatomiwa Williams",
                role: "Microsoft (MEA AI & Growth)",
              },
            ],
          },
        ],
      },

      {
        timeStart: "04:30PM",
        timeEnd: "05:30PM",
        tag: "PLENARY",
        title: "Plenary 3 — Unlocking Investment",
        desc:
          "Examining financing models, DFIs, and capital structures for African growth.",
        subsections: [
          {
            label: "OPENING REMARKS",
            items: [{ name: "Mr. Abubakar Suleiman", role: "CEO, Sterling Bank" }],
          },
          {
            label: "MODERATOR",
            items: [{ name: "Temi Marcella", role: "Alcent Capital" }],
          },
          {
            label: "PANEL DISCUSSION",
            items: [
              {
                name: "Ms. Adeola Ukhola",
                role: "British International Investment",
              },
              {
                name: "Mr. Banji Fehintola",
                role: "Africa Finance Corporation",
              },
              { name: "Mr. Olusegun Alebiosu", role: "First Bank of Nigeria" },
              { name: "Mr. Mitchell Elegbe", role: "Interswitch" },
            ],
          },
        ],
      },

      {
        timeStart: "05:30PM",
        timeEnd: "05:45PM",
        tag: "CLOSING",
        title: "Closing Plenary",
        desc: "",
        subsections: [
          {
            label: "SPECIAL FEATURE",
            items: [
              {
                name: "Lagos International Financial Centre",
                role: "Video Presentation",
              },
              {
                name: "Mr. Aig Imoukhuede",
                role: "Co-Chair, Invest Lagos 3.0",
              },
            ],
          },
          {
            label: "CLOSING REMARKS",
            items: [
              {
                name: "Governor Babajide Sanwo-Olu",
                role: "Governor, Lagos State",
              },
            ],
          },
        ],
      },

      {
        timeStart: "07:00PM",
        timeEnd: "LATE",
        tag: "GALA",
        title: "Private Gala Dinner",
        desc: "(By Invitation Only)",
        subsections: [],
      },
    ],
  },

  {
    label: "DAY 2",
    date: "9TH JUNE",
    sessions: [
      {
        timeStart: "09:00AM",
        timeEnd: "09:30AM",
        tag: "OPENING",
        title: "Day Two Opening",
        desc: "Opening Reflection Session",
        subsections: [
          {
            label: "SPEAKERS",
            items: [
              { name: "Mrs. Folasade Ambrose Medebem", role: "Commissioner" },
              { name: "Mr. Sam Egube", role: "Deputy Chief of Staff" },
              { name: "Zain Asher", role: "CNN" },
            ],
          },
        ],
      },

      {
        timeStart: "09:30AM",
        timeEnd: "10:30AM",
        tag: "PLENARY",
        title: "Plenary 4 — Building the Cities of the Future",
        desc:
          "Infrastructure, energy systems and industrial ecosystems shaping African cities.",
        subsections: [],
      },

      {
        timeStart: "10:30AM",
        timeEnd: "11:00AM",
        tag: "NETWORKING",
        title: "Networking Break",
        desc: "",
        subsections: [],
      },

      {
        timeStart: "11:00AM",
        timeEnd: "12:00PM",
        tag: "PLENARY",
        title: "Plenary 5 — Global Partnerships for Growth",
        desc: "International cooperation and cross-border investment.",
        subsections: [],
      },

      {
        timeStart: "12:00PM",
        timeEnd: "01:00PM",
        tag: "NETWORKING",
        title: "Networking Break",
        desc: "",
        subsections: [],
      },

      {
        timeStart: "01:00PM",
        timeEnd: "02:00PM",
        tag: "PLENARY",
        title: "Plenary 6 — Talent, Creativity & Culture",
        desc:
          "Creative industries as drivers of Africa’s economic growth.",
        subsections: [],
      },

      {
        timeStart: "02:00PM",
        timeEnd: "02:45PM",
        tag: "PLENARY",
        title: "Plenary 7 — Energy and Sustainability",
        desc: "Power systems, renewable energy and sustainability.",
        subsections: [],
      },

      {
        timeStart: "02:00PM",
        timeEnd: "02:45PM",
        tag: "MASTERCLASS",
        title: "Masterclasses — Music, Film and Fashion",
        desc: "",
        subsections: [
          {
            label: "SPEAKERS",
            items: [
              { name: "Tiwa Savage" },
              { name: "David Oyelowo OBE" },
              { name: "Omoyemi Akerele" },
            ],
          },
        ],
      },

      {
        timeStart: "02:45PM",
        timeEnd: "03:00PM",
        tag: "SHOWCASE",
        title: "Lagos Fashion Show",
        desc: "Closing performance",
        subsections: [],
      },

      {
        timeStart: "03:00PM",
        timeEnd: "03:15PM",
        tag: "CLOSING",
        title: "Closing Session",
        desc: "",
        subsections: [
          {
            label: "PROGRAMME",
            items: [
              { name: "MoU Signing", role: "Lagos State & Partners" },
              {
                name: "Governor Babajide Sanwo-Olu",
                role: "Closing Vision",
              },
              { name: "Mr. Babatunde Onigbanjo", role: "Vote of Thanks" },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "DAY 3",
    date: "10TH JUNE",
    sessions: [
      {
        timeStart: "HALF DAY",
        timeEnd: "",
        tag: "SITE VISIT",
        title: "Arridex Manufacturing Facility Visit",
        desc:
          "Advanced manufacturing and asset integrity facility tour.",
        subsections: [],
      },

      {
        timeStart: "FULL DAY",
        timeEnd: "",
        tag: "SITE VISIT",
        title:
          "Dangote Refinery, Dangote Fertilizer Plant, Lagos Free Zone, Lekki Free Trade zone, Lekki Deep Sea Port",
        desc: "Industrial and infrastructure site visits in Ibeju-Lekki.",
        subsections: [],
      },
    ],
  },
];

/* ─────────────────── SECTIONS ─────────────────── */

function AgendaHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#032F74CC] px-4 md:px-10 lg:px-20 py-16 text-white lg:py-20"
      style={{
        backgroundImage: "url(/agenda_hero_bg.png.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#032F74CC] via-[#032F74CC]/85 to-[#032F74CC]/70" />
      <div className="relative mx-auto max-w-310">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Programme flow: Explore sessions and build your unique schedule
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
          Through keynote addresses, sector sessions, deal rooms, exhibitions,
          networking engagements and cultural experiences, participants will
          engage directly with the people and institutions shaping Lagos'
          future.
        </p>
        <Link
          to="/register"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-green100 px-6 py-3 text-sm font-bold text-white transition hover:bg-green"
        >
          Register Now
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

/* ─ Download Bar ─────────────────────────────────────────────────────────── */
function ProgrammeDownloadBar() {
  return (
    <div className="bg-[#090e0c] px-4 md:px-10 lg:px-20 py-5 border-b border-white/10">
      <div className="mx-auto max-w-310 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ED212B]">Official Document</p> */}
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            View Agenda
          </h2>
        </div>
        {/* <a
          href="/DealBook for Invest Lagos 3.0.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2.5 rounded-full border-2 border-green100 bg-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#090e0c] transition hover:bg-green100 hover:text-white"
        >
          <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
            <rect x="0.75" y="0.75" width="11.5" height="14.5" rx="1.25" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3 5.5h7M3 8.5h7M3 11.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Download PDF
        </a> */}
      </div>
    </div>
  );
}

/* ─ PersonIcon ────────────────────────────────────────────────────────────── */
function PersonIcon() {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#11A892"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
    </svg>
  );
}

/* ─ Agenda Timeline ───────────────────────────────────────────────────────── */
function AgendaTimeline() {
  const [activeDay, setActiveDay] = useState(0);
  const current = days[activeDay];

  return (
    <section className="bg-[#04191D] text-white font-jost">
      {/* ── Day tabs ── */}
      <div className="bg-[#1A1A1A] border-b border-white/10">
        <div className="mx-auto max-w-310 grid grid-cols-3 divide-x divide-white/15">
          {days.map((day, i) => (
            <button
              key={`${day.title}-${i}`}
              onClick={() => setActiveDay(i)}
              className={`flex flex-col items-start px-5 py-5 transition sm:px-10 sm:py-7 ${
                activeDay === i ? "bg-green100" : "hover:bg-white/5"
              }`}
            >
              <span className="text-xl font-bold text-white sm:text-3xl">
                {day.label}
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-white/90 sm:text-xs">
                {day.date}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Sessions ── */}
      <div className="px-4 md:px-10 lg:px-20 py-14 lg:py-20">
        <div  key={activeDay} className="mx-auto max-w-310 space-y-0">
          {current.sessions.map((session, idx) => (
            <Reveal
              key={session.title}
              direction="up"
              delay={Math.min(idx * 70, 280)}
              distance={28}
            >
              <div
                className={`grid gap-6 py-12 lg:grid-cols-[200px_1fr] lg:gap-10 ${
                  idx < current.sessions.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                {/* Time column */}
                <div className="lg:border-r lg:border-white/10 lg:pr-8 flex flex-col gap-2 items-start">
                  <p className="text-3xl font-extralight leading-tight text-white sm:text-5xl">
                    {session.timeStart}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/30">
                    To {session.timeEnd}
                  </p>
                </div>

                {/* Content column — min-w-0 prevents grid blowout */}
                <div className="relative min-w-0">
                  {session.tag && (
                    <span className="absolute right-0 top-0 border border-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/50">
                      {session.tag}
                    </span>
                  )}
                  <h3 className="pr-20 text-xl font-bold text-green100 sm:text-2xl">
                    {session.title}
                  </h3>
                  {session.desc && (
                    <p className="mt-3 text-sm italic leading-7 text-gray-300">
                      {session.desc}
                    </p>
                  )}

                  {session.subsections.length > 0 && (
                    <div
                      className={`${session.desc ? "mt-7" : "mt-5"} space-y-6`}
                    >
                      {session.subsections.map((sub) => (
                        <div key={sub.label}>
                          <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-white/20 text-white/40">
                              <PersonIcon />
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                              {sub.label}
                            </p>
                          </div>
                          {sub.items.length > 0 && (
                            <div className="mt-2.5 space-y-2 pl-10">
                              {sub.plain
                                ? sub.items.map((item) => (
                                    <p
                                      key={item.name}
                                      className="text-sm font-semibold text-white"
                                    >
                                      {item.name}
                                    </p>
                                  ))
                                : sub.items.map((item) => (
                                    <div
                                      key={item.name}
                                      className="rounded-md border border-white/10 bg-[#0d1f18] px-5 py-4"
                                    >
                                      <p className="text-sm font-bold text-white">
                                        {item.name}
                                      </p>
                                      {item.role && (
                                        <p className="mt-1 text-xs leading-5 text-gray-400">
                                          {item.role}
                                        </p>
                                      )}
                                    </div>
                                  ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DontMissCTA() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-310 items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#007B5E]">
            Save Your Seat
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Don&apos;t miss out on these key events
          </h3>
          <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
            Register your interest to get session reminders, speaker briefs and
            access to the official Invest Lagos 3.0 delegate platform.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-6 transition hover:bg-gray-100"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#007B5E] text-2xl text-white shadow-md">
            ▶
          </span>
          <span className="text-sm font-bold text-gray-900">
            Watch the summit trailer
          </span>
        </a>
      </div>
    </section>
  );
}

/* ── Icon primitives for ContactCards ─────────────────────────────────────── */
const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
    />
  </svg>
);
const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <circle cx="12" cy="12" r="9" />
    <path
      strokeLinecap="round"
      d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5.5A2.5 2.5 0 015.5 3h1.372c.516 0 .966.354 1.087.856l.927 3.708a1.1 1.1 0 01-.31 1.06l-1.27 1.27a11.042 11.042 0 005.8 5.8l1.27-1.27a1.1 1.1 0 011.06-.31l3.708.927c.502.121.856.571.856 1.087V18.5A2.5 2.5 0 0118.5 21C9.94 21 3 14.06 3 5.5z"
    />
  </svg>
);
const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
    />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-3 w-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);
const CopyBtn = ({ text }) => (
  <button
    onClick={() => navigator.clipboard.writeText(text)}
    title="Copy"
    className="flex h-7 w-7 items-center justify-center rounded-md border border-white/20 text-white/50 transition hover:border-white/50 hover:text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path
        strokeLinecap="round"
        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      />
    </svg>
  </button>
);

function ContactCards() {
  const cards = [
    {
      Icon: PinIcon,
      label: "HEADQUARTERS",
      lines: [
        "Ministry of Commerce, Cooperatives, Trade and Investment,",
        "Alausa, Lagos, Nigeria.",
      ],
      action: "VISIT US",
      href: "https://maps.google.com/?q=Ministry+of+Commerce+Alausa+Lagos",
      copyText:
        "Ministry of Commerce, Cooperatives, Trade and Investment, Alausa, Lagos, Nigeria.",
    },
    {
      Icon: GlobeIcon,
      label: "DIGITAL CONNECT",
      lines: ["investinlagos@lagosmccti.com"],
      action: "EMAIL US",
      href: "mailto:investinlagos@lagosmccti.com",
      copyText: "investinlagos@lagosmccti.com",
    },
    {
      Icon: PhoneIcon,
      label: "HELP LINE",
      lines: ["+234.803.590.0000", "+234.707.662.3338"],
      action: "CALL US",
      href: "tel:+234.707.662.3338",
      copyText: "+234.707.662.3338",
    },
    {
      Icon: CameraIcon,
      label: "WE'RE SOCIAL",
      lines: ["@investlagos_"],
      action: "FOLLOW US",
      href: "https://instagram.com/investlagos_",
      copyText: "@investlagos_",
    },
  ];

  return (
    <section className="bg-green100 px-4 md:px-10 lg:px-20 py-16 lg:py-20">
      <div className="mx-auto max-w-310">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Reach out to our Information Center
        </h2>
        <div className="mt-3 h-0.75 w-20 rounded-full bg-white" />
        <p className="mt-6 max-w-lg text-sm leading-7 text-white/80">
          Need help with travel arrangements, hotel bookings, or media
          accreditation? Our team is ready to assist you every step of the way.
        </p>

        {/* Cards grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map(
            ({ Icon, label, lines, action, href, copyText }, cardIdx) => (
              <Reveal
                key={label}
                direction="up"
                delay={cardIdx * 90}
                distance={26}
              >
                <MouseTilt intensity={6}>
                  <div className="flex flex-col rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
                    {/* Icon box */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                      <Icon />
                    </div>

                    {/* Label */}
                    <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                      + {label}
                    </p>

                    {/* Content lines */}
                    <div className="mt-2 flex-1">
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-base font-bold leading-7 text-white"
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    {/* Action row */}
                    <div className="mt-8 flex items-center gap-3">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition hover:opacity-70"
                      >
                        {action}
                        <ExternalLinkIcon />
                      </a>
                      <div className="ml-auto">
                        <CopyBtn text={copyText} />
                      </div>
                    </div>
                  </div>
                </MouseTilt>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function AgendaFooterCTA() {
  return (
    <section className="bg-[#007B5E] px-6 py-12">
      <div className="mx-auto flex max-w-310 flex-col items-center gap-4 rounded-lg bg-[#0a1e15] p-6 sm:flex-row sm:justify-between sm:p-8">
        <div>
          <h4 className="text-lg font-bold text-white sm:text-xl">
            Get the full programme — PDF
          </h4>
          <p className="mt-1 text-xs text-white/70">
            Download the latest agenda with speaker bios and session links.
          </p>
        </div>
        <a
          href="#"
          className="rounded bg-[#F4C430] px-6 py-3 text-sm font-bold text-[#06120e] hover:bg-[#e0b321] transition"
        >
          Download Agenda →
        </a>
      </div>
    </section>
  );
}

export default function AgendaPage() {
  return (
    <>
      <Spotlight color="rgba(255, 255, 255, 0.16)" size={620}>
        <Reveal direction="fade" duration={900}>
          <AgendaHero />
        </Reveal>
      </Spotlight>
      <Reveal direction="down" duration={600}>
        <ProgrammeDownloadBar />
      </Reveal>
      <AgendaTimeline />
      <Reveal direction="up">
        <InformationSection />
      </Reveal>
      {/* <Reveal direction="up">
            <SpeakersCTA />
      </Reveal> */}
      {/* <Reveal direction="up">
        <AgendaFooterCTA />
      </Reveal> */}
    </>
  );
}
