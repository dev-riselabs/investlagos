import React from 'react'

const speakers = [
  { name: 'Asiwaju Bola Ahmed Tinubu, GCFR', title: 'President, Federal Republic of Nigeria', photo: '/speakers/Asiwaju Bola Ahmed Tinubu, GCFR.png' },
  { name: 'Dr. Obafemi Hamzat', title: 'Deputy Governor, Lagos State', photo: '/speakers/Dr Kadri_Obafemi Hamzat.png' },
  { name: 'Dr. Jumoke Oduwole', title: 'Special Adviser on Trade & Investment, Lagos State', photo: '/speakers/Dr. Jumoke Oduwole.png' },
  { name: 'Dr. Segun Ogunsanya', title: 'Group CEO, Airtel Africa PLC', photo: '/speakers/Dr. Segun Ogunsanya, Chairman.png' },
  { name: 'Engr. Jani Ibrahim', title: 'Director-General, PENCOM', photo: '/speakers/Engr. Jani Ibrahim.png' },
  { name: 'H.E. Jonny Baxter', title: 'British High Commissioner to Nigeria', photo: '/speakers/HE Jonny Baxter.png' },
  { name: 'H.E. Hannatu Musa Musawa', title: 'Minister of Art, Culture & Creative Economy', photo: '/speakers/Her Excellency Hannatu Musa  Musawa.png' },
  { name: 'H.E. Wamkele Mene', title: 'Secretary-General, African Continental Free Trade Area', photo: '/speakers/His Excellency Wamkele Mene.png' },
  { name: 'H.E. Caleb Mutfwang', title: 'Executive Governor, Plateau State', photo: '/speakers/His Excellency, Barrister Caleb Manasseh Mutfwang.png' },
  { name: 'H.E. Dr. Agbu Kefas', title: 'Executive Governor, Taraba State', photo: '/speakers/His Excellency, Dr. Agbu Kefas.png' },
  { name: 'Lord Christopher Geidt', title: 'Senior Adviser, UK Government & Business', photo: '/speakers/Lord Christopher Geidt.png' },
  { name: 'Lord Marland', title: 'Chairman, Commonwealth Enterprise & Investment Council', photo: '/speakers/LORD MARLAND.png' },
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
  { name: 'Mrs. Kanayo Awani', title: 'Executive Vice President, Afreximbank', photo: '/speakers/Mrs. Kanayo Awani.png' },
  { name: 'Mrs. Keke Hammond', title: 'CEO, Ghana Investment Promotion Centre', photo: '/speakers/Mrs. Keke Hammond .png' },
  { name: 'Mrs. Rolake Akinkugbe-Filani', title: 'Chief Investment Officer, Chapel Hill Denham', photo: '/speakers/Mrs. Rolake AkinkugbeFilani.png' },
  { name: 'Mrs. Toke Benson-Awoyinka', title: 'Commissioner for Agriculture, Lagos State', photo: '/speakers/Mrs. Toke Benson-Awoyinka.png' },
  { name: 'Mrs. Zain Asher', title: 'CNN International Anchor & Journalist', photo: '/speakers/Mrs. Zain Asher.png' },
  { name: 'Prof. Akin Abayomi', title: 'Commissioner for Health, Lagos State', photo: '/speakers/Prof. Akin Abayomi.png' },
  { name: 'Samantha Cohen', title: 'Senior Adviser, UK Foreign & Commonwealth Office', photo: '/speakers/Samantha Cohen.png' },
  { name: 'Temi Marcella', title: 'Executive Director, Lagos State PPP Office', photo: '/speakers/Temi Marcella.png' },
  { name: 'The Hon. Shirley Botchwey', title: 'Minister of Foreign Affairs, Ghana', photo: '/speakers/The Hon. Shirley Botchwey.png' },
]

function SpeakerCard({ name, title, photo }) {
  return (
    <article className="group overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>
      <div className="relative border-l-4 border-yellow bg-white p-4">
        <h3 className="text-sm font-black leading-snug text-gray-900 line-clamp-2">{name}</h3>
        <p className="mt-1.5 text-[11px] leading-5 text-gray-500 line-clamp-2">{title}</p>
      </div>
    </article>
  )
}

const SpeakersGrid = () => {
  return (
    <section className="bg-gray-50 px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-green100">
              Distinguished Voices
            </span>
            <h2 className="mt-3 text-2xl font-black text-gray-900 sm:text-3xl">
              The Invest Lagos <span className="text-green100">Speaker Line-up</span>
            </h2>
            <div className="mt-3 h-0.5 w-20 bg-yellow" />
          </div>
          <p className="max-w-sm text-xs leading-6 text-gray-500 sm:text-sm">
            More than 50 speakers across keynotes, fireside chats, plenaries and deal rooms.
            Roster updates weekly as the programme is finalised.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-3">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersGrid
