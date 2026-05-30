import React from "react";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const locMembers = [
  {
    name: "Mr. Babatunde Onigbanjo",
    role: "Permanent Secretary, Ministry of Commerce, Co-operatives, Trade & Investment of Lagos State Government & Member, Technical & Programmes Committee",
    photo: "/governance-images/Babatunde Onigbanjo.png",
  },
  {
    name: "Mr. Ope George",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Ope George.png",
  },
  {
    name: "Mrs. Solape Hammond",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Solape Hammond.png",
  },
  {
    name: "Mrs. Adesuwa Ladoja",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Adesuwa Ladoja.png",
  },
  {
    name: "Mr. Akintayo Sanwo-Olu",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Akintayo Sanwo-Olu.png",
  },
  {
    name: "Mr. Ayiri Oladunmoye",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Ayiri Oladunmoye.png",
  },
  {
    name: "Mr. Ayo Otuyalo",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Ayo Otuyalo.png",
  },
  {
    name: "Ms. Biola Alabi",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Biola Alabi.png",
  },
  {
    name: "Mrs. Bukola Odoe",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Bukola Odoe.png",
  },
  {
    name: "Mr. Charles Edosomwan",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Charles Edosomwan.png",
  },
  {
    name: "Dr. Olamide Adekunle Okulaja",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Dr. Olamide Adekunle Okulaja.png",
  },
  {
    name: "Dr. Toyosi Akerele-Ogunsiji",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Dr. Toyosi Akerele-Ogunsiji.png",
  },
  {
    name: "Mr. Gbenga Omotosho",
    role: "Honourable Commissioner for Information & Strategy of Lagos State Government & Chair, Media, Publicity & Communications Committee",
    photo: "/governance-images/Gbenga Omotosho.png",
  },
  {
    name: "Mr. Kunle Fagbemi",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Kunle Fagbemi.png",
  },
  {
    name: "Mr. Abdeen Bolaji Abimbola",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mr Abdeen Bolaji Abimbola.png",
  },
  {
    name: "Mr. Gboyega Akosile",
    role: "Special Adviser on Media and Publicity to the Governor of Lagos State and Member, Media & Publicity, Communications Committee",
    photo: "/governance-images/Mr Gboyega Akosile.png",
  },
  {
    name: "Mr. Lami Adekola",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mr Lami Adekola.png",
  },
  {
    name: "Mr. Taiye Nelson",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mr. Taiye Nelson.png",
  },
  {
    name: "Mrs. Ire Odega",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mrs Ire Odega.png",
  },
  {
    name: "Mrs. Mary Aderinola Ojulari",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mrs Mary Aderinola Ojulari.png",
  },
  {
    name: "Mrs. Ajibola Yewande Ponnle",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mrs. Ajibola Yewande Ponnle.png",
  },
  {
    name: "Mrs. Moji Hunponu-Wusu",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mrs. Moji Hunponu-Wusu.png",
  },
  {
    name: "Mrs. Nana Hauwa Adeeyo",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Mrs. Nana Hauwa Adeeyo.png",
  },
  {
    name: "Ms. Lola Talabi-Oni",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Ms Lola Talabi-Oni.png",
  },
  {
    name: "Ms. Omofolahan Olowu",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Ms Omofolahan Olowu.png",
  },
  {
    name: "Mr. Obinna Anyanwu",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Obinna Anyanwu.png",
  },
  {
    name: "Mrs. Peju Ibekwe",
    role: "Member, Local Organising Committee",
    photo: "/governance-images/Peju Ibekwe.png",
  },
  {
    name: "Mr. Yomi Oluyomi",
    role: "Honourable Commissioner for Finance of Lagos State Government & Chair, Finance Committee",
    photo: "/governance-images/Yomi Oluyomi.png",
  },
];

const cweicPartners = [
  {
    name: "Mr. AQ Hamza",
    role: "CWEIC Partner",
    photo: "/governance-images/AQ Hamza (CWEIC).png",
  },
  {
    name: "Ms. Charlotte Bailey",
    role: "CWEIC Partner",
    photo: "/governance-images/Charlotte Bailey (CWEIC).png",
  },
  {
    name: "Ms. Megan Wright",
    role: "CWEIC Partner",
    photo: "/governance-images/Ms.Megan Wright (CWEIC).png",
  },
  {
    name: "Mr. Pride Azefor",
    role: "CWEIC Partner",
    photo: "/governance-images/Pride Azefor (CWEIC).png",
  },
  {
    name: "Mr. Sean Leno",
    role: "CWEIC Partner",
    photo: "/governance-images/Sean Leno (CWEIC).png",
  },
];
