import React from 'react'
import { InstitutionIcon } from './SpeakersHero'

const speakers = [
  { name: 'Mr. Babajide Olusola Sanwo-Olu', title: 'Governor of Lagos State', photo: '/speakers/MR_Babajide_Olusola_Sanwo_Olu.png' },
  { name: 'H.E. Wamkele Mene', title: 'Secretary-General, AfCFTA', photo: '/speakers/His Excellency Wamkele Mene.png' },
  { name: 'Mrs. Kanayo Awani', title: 'Executive Vice President, Afreximbank', photo: '/speakers/Mrs. Kanayo Awani.png' },
  { name: 'Lord Marland', title: 'Chairman, CWEIC', photo: '/speakers/LORD MARLAND.png' },
  { name: 'Dr Kadri Obafemi Hamzat', title: 'Deputy Governor, Lagos State', photo: '/speakers/Dr Kadri_Obafemi Hamzat.png' },
  { name: 'Dr. Jumoke Oduwole', title: 'Special Adviser on Trade & Investment, Lagos State', photo: '/speakers/Dr. Jumoke Oduwole.png' },
  { name: 'Dr. Segun Ogunsanya', title: 'Group CEO, Airtel Africa PLC', photo: '/speakers/Dr. Segun Ogunsanya, Chairman.png' },
  { name: 'Engr. Jani Ibrahim', title: 'Director-General, PENCOM', photo: '/speakers/Engr. Jani Ibrahim.png' },
  { name: 'H.E. Jonny Baxter', title: 'British High Commissioner to Nigeria', photo: '/speakers/HE Jonny Baxter.png' },
  { name: 'H.E. Hannatu Musa Musawa', title: 'Minister of Art, Culture & Creative Economy', photo: '/speakers/Her Excellency Hannatu Musa  Musawa.png' },
  { name: 'H.E. Caleb Mutfwang', title: 'Executive Governor, Plateau State', photo: '/speakers/His Excellency, Barrister Caleb Manasseh Mutfwang.png' },
  { name: 'H.E. Dr. Agbu Kefas', title: 'Executive Governor, Taraba State', photo: '/speakers/His Excellency, Dr. Agbu Kefas.png' },
  { name: 'Lord Christopher Geidt', title: 'Senior Adviser, UK Government & Business', photo: '/speakers/Lord Christopher Geidt.png' },
  { name: 'Madam Elsie Attafuah', title: 'UNDP Resident Representative, Nigeria', photo: '/speakers/Madam Elsie Attafuah.png' },
  { name: 'Mr. Abubakar Suleiman', title: 'CEO, Sterling Financial Holdings', photo: '/speakers/Mr. Abubakar Suleiman.png' },
  { name: 'Mr. Adeola Ukoha', title: 'Executive Secretary, PPPRA', photo: '/speakers/Mr. Adeola Ukoha.png' },
  { name: 'Mr. Aig-Imoukhuede', title: 'Co-Founder, Access Bank PLC', photo: '/speakers/Mr. Aig Aigboje Imoukhuede.png' },
  { name: 'Mr. Babatunde Onigbanjo', title: 'Attorney-General & Commissioner for Justice, Lagos State', photo: '/speakers/Mr. Babatunde Onigbanjo.png' },
  { name: 'Mr. David Oyelowo', title: 'Award-Winning Actor & Filmmaker', photo: '/speakers/Mr. David Oyelowo.png' },
  { name: 'Mr. Kayode Adeleke', title: 'Special Adviser, Economic Planning & Budget, Lagos State', photo: '/speakers/Mr. Kayode Adeleke.png' },
  { name: 'Mr. Mitchell Elegbe', title: 'Founder & Group MD/CEO, Interswitch', photo: '/speakers/Mr. Mitchell Elegbe.png' },
  { name: 'Mr. Olugbenga Agboola', title: 'Co-founder & CEO, Flutterwave', photo: '/speakers/Mr. Olugbenga Agboola.png' },
  { name: 'Mr. Olusegun Alebiosu', title: 'MD/CEO, Access Bank PLC', photo: '/speakers/Mr. Olusegun Alebiosu.png' },
  { name: 'Mr. Osahon Akpata', title: 'President, Nigerian Bar Association', photo: '/speakers/Mr. Osahon Akpata.png' },
  { name: 'Mr. Sameh Shenouda', title: 'Country Director, International Finance Corporation', photo: '/speakers/Mr. Sameh Shenouda.png' },
  { name: 'Mr. Shahzad Athar', title: 'Director, UK Department for Business & Trade', photo: '/speakers/Mr. Shahzad Athar.png' },
  { name: 'Mr. Tom Cartledge', title: 'CEO, Stirling & Hamilton Group', photo: '/speakers/Mr. Tom Cartledge.png' },
  { name: 'Mr. Tosin Eniolorunda', title: 'Founder & CEO, Moniepoint', photo: '/speakers/Mr. Tosin Eniolorunda.png' },
  { name: 'Mr. Tubosun Alake', title: 'Commissioner for Innovation, Science & Technology, Lagos State', photo: '/speakers/Mr. Tubosun Alake.png' },
  { name: 'Mr. Zaki Cooper', title: 'Senior Adviser, British-Asian Trust', photo: '/speakers/Mr. Zaki Cooper.png' },
  { name: 'Mrs. Olatomiwa Williams', title: 'MD/CEO, Central Securities Clearing System', photo: '/speakers/Mrs Olatomiwa Williams.png' },
  { name: 'Mrs. Adesuwa Ladoja', title: 'Executive Director, Lagos State Investment & PPP Office', photo: '/speakers/Mrs. Adesuwa Ladoja.png' },
  { name: 'Mrs. Bolanle Austen-Peters', title: 'Filmmaker & Artistic Director, Terra Kulture', photo: '/speakers/Mrs. Bolanle Austen-Peters.png' },
  { name: 'Mrs. Choma Ude', title: 'Executive Director, Strategy & Innovation', photo: '/speakers/Mrs. Choma Ude.png' },
  { name: 'Mrs. Folashade Ambrose-Medebem', title: 'Commissioner for Commerce & Industry, Lagos State', photo: '/speakers/Mrs. Folashade KaosaratBada Ambrose-Medebem.png' },
  { name: 'Mrs. Keke Hammond', title: 'CEO, Ghana Investment Promotion Centre', photo: '/speakers/Mrs. Keke Hammond .png' },
  { name: 'Mrs. Rolake Akinkugbe-Filani', title: 'Chief Investment Officer, Chapel Hill Denham', photo: '/speakers/Mrs. Rolake AkinkugbeFilani.png' },
  { name: 'Mrs. Toke Benson-Awoyinka', title: 'Commissioner for Agriculture, Lagos State', photo: '/speakers/Mrs. Toke Benson-Awoyinka.png' },
  { name: 'Mrs. Zain Asher', title: 'CNN International Anchor & Journalist', photo: '/speakers/Mrs. Zain Asher.png' },
  { name: 'Prof. Akin Abayomi', title: 'Commissioner for Health, Lagos State', photo: '/speakers/Prof. Akin Abayomi.png' },
  { name: 'Samantha Cohen', title: 'Senior Adviser, UK Foreign & Commonwealth Office', photo: '/speakers/Samantha Cohen.png' },
  { name: 'Temi Marcella', title: 'Executive Director, Lagos State PPP Office', photo: '/speakers/Temi Marcella.png' },
  { name: 'The Hon. Shirley Botchwey', title: 'Minister of Foreign Affairs, Ghana', photo: '/speakers/The Hon. Shirley Botchwey.png' },
]

const accents = ['bg-yellow', 'bg-red']

function SpeakerCard({ name, title, photo, accent }) {
  return (
    <article className="overflow-hidden">
      <img
        src={photo}
        alt={name}
        className="block aspect-[4/5] w-full object-cover"
        loading="lazy"
      />
      <div className="flex items-start gap-3 bg-green200 px-4 py-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/15 text-white">
          <InstitutionIcon className="h-4 w-4" />
        </div>
        <div className="text-left text-white">
          <h3 className="text-[12px] font-black uppercase tracking-wide leading-tight">
            {name}
          </h3>
          <p className="mt-1.5 text-[11px] leading-snug text-white/80">
            {title}
          </p>
        </div>
      </div>
      <div className={`h-[3px] ${accent}`} />
    </article>
  )
}

const SpeakersGrid = () => {
  return (
    <section className="bg-green100 px-6 pb-20 pt-2 lg:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <SpeakerCard
              key={s.name}
              {...s}
              accent={accents[i % accents.length]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersGrid
