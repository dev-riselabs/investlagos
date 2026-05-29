import React from 'react'

/* ─── Icons ──────────────────────────────────────────────────────────────── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </svg>
)

/* ─── Data ───────────────────────────────────────────────────────────────── */
const locMembers = [
  { name: 'Mr. Babatunde Onigbanjo', role: 'Member, Local Organising Committee', photo: '/governance/Babatunde Onigbanjo.png' },
  { name: 'Mr. Ope George', role: 'Member, Local Organising Committee', photo: '/governance/Ope George.png' },
  { name: 'Mrs. Solape Hammond', role: 'Member, Local Organising Committee', photo: '/governance/Solape Hammond.png' },
  { name: 'Mrs. Adesuwa Ladoja', role: 'Member, Local Organising Committee', photo: '/governance/Adesuwa Ladoja.png' },
  { name: 'Mr. Akintayo Sanwo-Olu', role: 'Member, Local Organising Committee', photo: '/governance/Akintayo Sanwo-Olu.png' },
  { name: 'Mr. Ayiri Oladunmoye', role: 'Member, Local Organising Committee', photo: '/governance/Ayiri Oladunmoye.png' },
  { name: 'Mr. Ayo Otuyalo', role: 'Member, Local Organising Committee', photo: '/governance/Ayo Otuyalo.png' },
  { name: 'Ms. Biola Alabi', role: 'Member, Local Organising Committee', photo: '/governance/Biola Alabi.png' },
  { name: 'Mrs. Bukola Odoe', role: 'Member, Local Organising Committee', photo: '/governance/Bukola Odoe.png' },
  { name: 'Mr. Charles Edosomwan', role: 'Member, Local Organising Committee', photo: '/governance/Charles Edosomwan.png' },
  { name: 'Dr. Olamide Adekunle Okulaja', role: 'Member, Local Organising Committee', photo: '/governance/Dr. Olamide Adekunle Okulaja.png' },
  { name: 'Dr. Toyosi Akerele-Ogunsiji', role: 'Member, Local Organising Committee', photo: '/governance/Dr. Toyosi Akerele-Ogunsiji.png' },
  { name: 'Mr. Gbenga Omotosho', role: 'Member, Local Organising Committee', photo: '/governance/Gbenga Omotosho.png' },
  { name: 'Mr. Kunle Fagbemi', role: 'Member, Local Organising Committee', photo: '/governance/Kunle Fagbemi.png' },
  { name: 'Mr. Abdeen Bolaji Abimbola', role: 'Member, Local Organising Committee', photo: '/governance/Mr Abdeen Bolaji Abimbola.png' },
  { name: 'Mr. Gboyega Akosile', role: 'Member, Local Organising Committee', photo: '/governance/Mr Gboyega Akosile.png' },
  { name: 'Mr. Lami Adekola', role: 'Member, Local Organising Committee', photo: '/governance/Mr Lami Adekola.png' },
  { name: 'Mr. Taiye Nelson', role: 'Member, Local Organising Committee', photo: '/governance/Mr. Taiye Nelson.png' },
  { name: 'Mrs. Ire Odega', role: 'Member, Local Organising Committee', photo: '/governance/Mrs Ire Odega.png' },
  { name: 'Mrs. Mary Aderinola Ojulari', role: 'Member, Local Organising Committee', photo: '/governance/Mrs Mary Aderinola Ojulari.png' },
  { name: 'Mrs. Ajibola Yewande Ponnle', role: 'Member, Local Organising Committee', photo: '/governance/Mrs. Ajibola Yewande Ponnle.png' },
  { name: 'Mrs. Moji Hunponu-Wusu', role: 'Member, Local Organising Committee', photo: '/governance/Mrs. Moji Hunponu-Wusu.png' },
  { name: 'Mrs. Nana Hauwa Adeeyo', role: 'Member, Local Organising Committee', photo: '/governance/Mrs. Nana Hauwa Adeeyo.png' },
  { name: 'Ms. Lola Talabi-Oni', role: 'Member, Local Organising Committee', photo: '/governance/Ms Lola Talabi-Oni.png' },
  { name: 'Ms. Omofolahan Olowu', role: 'Member, Local Organising Committee', photo: '/governance/Ms Omofolahan Olowu.png' },
  { name: 'Mr. Obinna Anyanwu', role: 'Member, Local Organising Committee', photo: '/governance/Obinna Anyanwu.png' },
  { name: 'Mrs. Peju Ibekwe', role: 'Member, Local Organising Committee', photo: '/governance/Peju Ibekwe.png' },
  { name: 'Mr. Yomi Oluyomi', role: 'Member, Local Organising Committee', photo: '/governance/Yomi Oluyomi.png' },
]

const cweicPartners = [
  { name: 'Mr. AQ Hamza', role: 'CWEIC Partner', photo: '/governance/AQ Hamza (CWEIC).png' },
  { name: 'Ms. Charlotte Bailey', role: 'CWEIC Partner', photo: '/governance/Charlotte Bailey (CWEIC).png' },
  { name: 'Ms. Megan Wright', role: 'CWEIC Partner', photo: '/governance/Ms.Megan Wright (CWEIC).png' },
  { name: 'Mr. Pride Azefor', role: 'CWEIC Partner', photo: '/governance/Pride Azefor (CWEIC).png' },
  { name: 'Mr. Sean Leno', role: 'CWEIC Partner', photo: '/governance/Sean Leno (CWEIC).png' },
]
