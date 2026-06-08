import React from "react";
import { InstitutionIcon } from "./SpeakersHero";
import { Reveal, MouseTilt } from "../../lib/animations";

const speakers = [

  {
    name: "H.E. Wamkele Mene",
    title: "Secretary-General, AfCFTA",
    photo: "/speakers/His Excellency Wamkele Mene.png",
  },
  {
    name: "Mrs. Kanayo Awani",
    title: "Executive Vice President, Afreximbank",
    photo: "/speakers/Mrs. Kanayo Awani.jpeg",
  },
  {
    name: "Lord Marland",
    title: "Chairman, Commonwealth Enterprise and Investment Council [CWEIC]",
    photo: "/speakers/LORD MARLAND.png",
  },
  {
    name: "Mr. Babajide Olusola Sanwo-Olu",
    title: "Governor of Lagos State",
    photo: "/speakers/MR_Babajide_Olusola_Sanwo_Olu.png",
  },
  {
    name: "Dr Kadri Obafemi Hamzat",
    title: "Deputy Governor, Lagos State",
    photo: "/speakers/Dr Kadri_Obafemi Hamzat.png",
  },
  {
    name: "The Hon. Shirley Botchwey",
    title: "Secretary General, The Commonwealth",
    photo: "/speakers/The Hon. Shirley Botchwey.png",
  },
  {
    name: "Dr. Jumoke Oduwole",
    title: "Hon. Minister of Trade & Investment",
    photo: "/speakers/Dr. Jumoke Oduwole.png",
  },
  {
    name: "Mrs. Folashade Ambrose-Medebem",
    title: "Hon. Commissioner, Ministry of Commerce, Cooperatives, Trade & Investment, Lagos State Government",
    photo: "/speakers/Mrs. Folashade KaosaratBada Ambrose-Medebem.png",
  },
  {
    name: "Mr. Aig Aigboje Imoukhuede",
    title: "Co-Chair, Lagos International Financial Centre [LIFC]",
    photo: "/speakers/Mr. Aig Aigboje Imoukhuede.png",
  },
  {
    name: "Alh. Abdul Samad Rabiu, CFR, CON",
    title: "Chairman of BUA Foods Plc",
    photo: "/speakers/Abdul Samad Rabiu BUA.jpeg",
  },
  {
    name: "His Excellency, Barrister Caleb Manasseh Mutfwang",
    title: "Governor of Plateau State",
    photo: "/speakers/His Excellency, Barrister Caleb Manasseh Mutfwang.png",
  },
  {
    name: "His Excellency, Dr. Agbu Kefas",
    title: "Governor, Taraba State",
    photo: "/speakers/His Excellency, Dr. Agbu Kefas.png",
  },
  {
    name: "His Excellency, Prince Dapo Abiodun",
    title: "Governor of Ogun State",
    photo: "/speakers/His Excellency Dapo Abiodun.jfif",
  },
  {
    name: "His Excellency, Alh. Abdulrahman abdulrazaq",
    title: "Governor of Kwara State",
    photo: "/speakers/AbdulRahman AbdulRasaq 4.jpeg",
  },
  {
    name: "His Excellency, SEN. HOPE UZODINMA",
    title: "Governor of Imo State",
    photo: "/speakers/His Excellency SEN HOPE UDODIMMA.png",
  },
  {
    name: "His Excellency, Barr. (Dr.) Peter Ndubuisi Mbah",
    title: "Governor of Enugu State",
    photo: "/speakers/His Excellency Peter Mbah.jpg",
  },
  {
    name: "His Excellency Dr. Alex Chioma Otti, OFR,",
    title: "Executive Governor, Abia State",
    photo: "/speakers/images-9.jpeg",
  },
  {
    name: "His Excellency, Engineer Abdullahi A. Sule",
    title: "Governor of Nasarawa State",
    photo: "/speakers/Abdullahi-Sule.jpeg",
  },
  {
    name: "His Excellency, Pastor Umo Bassey Eno",
    title: "Governor of Akwa Ibom State",
    photo: "/speakers/His Excellency Umo Eno.png",
  },
  
  {
    name: "Her Excellency Hannatu Musa  Musawa",
    title: "Minister of Art, Culture,Tourism & CreativeEconomy",
    // photo: "/speakers/Hannatu Musa Musawa 5.jpeg",
    photo: "/speakers/Her Excellency Hannatu Musa Musawa.jpeg",
  },
   {
    name: "Engr. Jani Ibrahim",
    title: "President, NACCIMA",
    photo: "/speakers/Engr. Jani Ibrahim.jpg",
  },
  {
    name: "Mr. David Oyelowo",
    title: "British/Nigerian Actor",
    photo: "/speakers/Mr. David Oyelowo.png",
  },
  {
    name: "Mr. Abubakar Suleiman",
    title: "Managing Director/CEO, Sterling Bank",
    photo: "/speakers/Mr. Abubakar Suleiman.png",
  },
  {
    name: "Mr. James Clinton",
    title: "Managing Director, EV Mass Transit",
    photo: "/speakers/Mr. James Clinton.jpeg",
  },
  {
    name: "Mrs. Toke Benson-Awoyinka",
    title: "Honourable Commissioner for Tourism, Arts and Culture",
    photo: "/speakers/Commissioner for Tourism.png",
  },
  {
    name: "Mr. Olugbenga Agboola",
    title: "Managing Director/CEO, Flutterwave",
    photo: "/speakers/Mr. Olugbenga Agboola.png",
  },
  {
    name: "Mr. Tubosun Alake",
    title: "Honourable Commissioner, Ministry of Innovation, Science & Technology, Lagos State Government",
    photo: "/speakers/Commissioner for Innovation.jpg.jpeg",
  },
  {
    name: "Lord Christopher Geidt",
    title: "Director, Burstock",
    photo: "/speakers/Lord Christopher Geidt.png",
  },
  {
    name: "Mr. Jacky Amprou",
    title: "Country Director, Agence Francaise de Developpement [AFD], Nigeria",
    photo: "/speakers/Mr. Jacky Amprou.png",
  },
  {
    name: "Madam Elsie Attafuah",
    title: "Resident Representative, United Nations Development Programme [UNDP]",
    photo: "/speakers/Elsie Attafuah.jpeg",
  },
  {
    name: "Mr. Kola Adesina",
    title: "Group MD/CEO, Sahara Energy Group",
    photo: "/speakers/Kola Adesina.png",
  },
  {
    name: "Mrs. Olatomiwa Williams",
    title: "Chief Growth & AI Officer (MiddleEast & Africa), Microsoft",
    photo: "/speakers/Mrs Olatomiwa Williams.png",
  },
  {
    name: "Mr. Zaki Cooper",
    title: "Co-Founder and Director, Integra",
    photo: "/speakers/Mr. Zaki Cooper.png",
  },
  {
    name: "Mr. Babatunde Onigbanjo",
    title: "Permanent Secretary, Ministry of Commerce, Co-operatives, Trade & Investment",
    photo: "/speakers/Mr. Babatunde Onigbanjo.png",
  },
  {
    name: "Barrister Festus Keyamo, SAN",
    title: "Honourable Minister for Aviation and Aerospace Development",
    photo: "/speakers/kanyo-fetus.jpeg",
  },
  {
    name: "Barrister Ismaeel Ahmed",
    title: "Chairman Presidential Initiative on CNG/EV",
    photo: "/speakers/Barr. Ismaeel Ahmed.jpeg",
  },


  {
    name: "Mr. Massimo de luca",
    title: "European Union Head of Cooperation",
    photo: "/speakers/Massimo de luca.png",
  },
  {
    name: "Mr. Alex Milne",
    title: "Director of Partnerships and Policy, Africa Speciality Risks",
    photo: "/speakers/Mr. Alex Milne.jpeg",
  },
  {
    name: "Mr. Sameh Shenouda",
    title: "Executive Director& Chief Investment Officer, Africa Finance Corporation",
    photo: "/speakers/Mr. Sameh Shenouda.png",
  },
  {
    name: "Mr. Olusegun Alebiosu",
    title: "Managing Director/CEO, First Bank of Nigeria Plc",
    photo: "/speakers/Mr. Olusegun Alebiosu.png",
  },
  {
    name: "Mr. Mitchell Elegbe",
    title: "Founder and Group CEO, Interswitch",
    photo: "/speakers/Mr. Mitchell Elegbe.png",
  },
  {
    name: "Dr. Segun Ogunsanya",
    title: "Chairman, Nigeria Sovereign Investment Authority (NSIA)",
    photo: "/speakers/Dr. Segun Ogunsanya, Chairman.png",
  },
  {
    name: "Prof. Akin Abayomi",
    title: "Honourable Commissioner for Health, Lagos State",
    photo: "/speakers/Commissioner for health.jpg.jpeg",
  },
  {
    name: "Ms. Chioma Ude ",
    title: "Founder & Convener, Africal International Film Festival [AFRIFF] ",
    photo: "/speakers/Mrs. Choma Ude.png",
  },
  {
    name: "Mr. Shahzad Athar",
    title: "Vice President, Adani Group",
    photo: "/speakers/Mr. Shahzad Athar.png",
  },
  {
    name: "Mr. Yann Gilbert",
    title: "The President of European Business Chamber, Nigeria",
    photo: "/speakers/Mr. Yann Gilbert.jpeg",
  },
  {
    name: "Mr. Banji Fehintola",
    title: "Executive Board Member and Executive Director, Financial Services",
    photo: "/speakers/Mr. Banji Fehintola.jpeg",
  },
  {
    name: "Dr. Valentine Obi",
    title: "Founder & Group CEO, eTranzact",
    photo: "/speakers/Dr. Valentine Obi.jpeg",
  },
  // {
  //   name: "Mr. Tom Cartledge",
  //   title: "CEO, Benoy",
  //   photo: "/speakers/Mr. Tom Cartledge.png",
  // },
  {
    name: "Ms. Samantha Cohen",
    title: "CVO, OBE, CEO, CWEIC",
    photo: "/speakers/Samantha Cohen.png",
  },
  {
    name: "Mrs. Adesuwa Ladoja",
    title: "CEO, Lagos Free Zone",
    photo: "/speakers/Mrs. Adesuwa Ladoja.jpg",
  },
  {
    name: "Mr. Abiodun Ogunleye",
    title: "Honourable Commissioner for Energy, Lagos State",
    photo: "/speakers/Mr. Abiodun Ogunleye.jpeg",
  },
  {
    name: "Mr. Tosin Eniolorunda",
    title: "CEO Moniepoint MFB",
    photo: "/speakers/Mr. Tosin Eniolorunda.jpg",
  },
  {
    name: "Mrs. Bolanle Austen-Peters",
    title: "Chief Executive Officer, Terra Kulture",
    photo: "/speakers/Mrs. Bolanle Austen-Peters.jpg",
  },
  {
    name: "Mr. Kayode Adeleke",
    title: "Chief Executive Officer, Arridex 3D Printing & Manufacturing Company",
    photo: "/speakers/Kayode Adeleke 2.jpeg",
  },
  {
    name: "Mr. Haresh Aswani",
    title: "Managing Director for Africa, Tolaram Group",
    photo: "/speakers/Mr. Haresh Aswani_2.jpeg",
  },
  {
    name: "Ms. Mojibade Sosanya, LadyMc",
    title: "Host/Anchor",
    photo: "/speakers/Mojibade Sosanya.jpeg",
  },
  {
    name: "Mrs. Rolake Akinkugbe-Filani",
    title: "Chief Investment Officer, Chapel Hill Denham",
    photo: "/speakers/Mrs. Rolake AkinkugbeFilani.png",
  },
  {
  name: "Mr. Mark Eddo",
  title: "Master of Ceremony",
  photo: "/speakers/Mr. Mark Eddo.jpeg",
},
  {
    name: "Mrs. Keke Hammond",
    title: "Co-Founder/COO, Flytime Promotions Africa",
    photo: "/speakers/Mrs. Keke Hammond_2.jpeg",
  },
    {
    name: "Mr. Osahon Akpata",
    title: "CEO CANEX Creations, Afreximbank",
    photo: "/speakers/Mr. Osahon Akpata.png",
  },
    {
    name: "Ms. Khanyi Mashimbye",
    title: "Manager, Creatives, Afreximbank",
    photo: "/speakers/Ms. Khanyi Mashimbye.jpeg",
  },
  {
    name: "Princess Zahrah Mohammed Audu",
    title: "Director General, PEBEC",
    photo: "/speakers/Princess Zahrah Mohammed_3.jpeg",
  },
  {
    name: "Ms. Zain Asher",
    title: "Cable News Network (CNN)",
    photo: "/speakers/Mrs. Zain Asher.png",
  },
  {
    name: "Mrs. Temi Marcella",
    title: "MD, Alcent Capital",
    photo: "/speakers/Temi Marcella.png",
  },
  {
    name: "Mrs. Omoyemi Akerele",
    title: "Founder/CEO, Lagos Fashion Week",
    photo: "/speakers/Mrs. Omoyemi Akerele.png",
  },
  {
    name: "Mrs. Adeola Ukoha",
    title: "British International Investment",
    photo: "/speakers/Mr. Adeola Ukoha.png",
  },
  // {
  //   name: "H.E. Jonny Baxter",
  //   title: "British High Commissioner to Nigeria",
  //   photo: "/speakers/HE Jonny Baxter.png",
  // },
 





 


];

const accents = ["bg-yellow", "bg-red"];

function SpeakerCard({ name, title, photo, accent }) {
  return (
    <article className="overflow-hidden rounded-b-lg il-card h-full flex flex-col bg-green350">
      <img
        src={photo}
        alt={name}
        className="block h-80 w-full object-cover"
        loading="lazy"
      />
      <div className="flex items-start gap-3  px-4 py-6 md:px-7.5 md:py-10">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/15 text-white">
          <InstitutionIcon className="h-4 w-4" />
        </div>
        <div className="text-left text-white">
          <h3 className="text-[12px] md:text-sm font-black uppercase tracking-wide leading-tight">
            {name}
          </h3>
          <p className="mt-1.5 text-[11px] md:text-xs leading-snug text-white/80">
            {title}
          </p>
        </div>
      </div>
      <div className={`h-1 rounded-b-lg ${accent} mt-auto`} />
    </article>
  );
}

const SpeakersGrid = () => {
  return (
    <section className="bg-green100 px-4 md:px-10 lg:px-40 pb-20 pt-2 lg:pb-24">
      <div className="mx-auto max-w-310">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 h-full">
          {speakers.map((s, i) => (
            <div key={s.name} className="h-full">
              <Reveal direction="up" delay={(i % 6) * 90} distance={28} className="h-full">
                <MouseTilt intensity={5} className="h-full">
                  <SpeakerCard {...s} accent={accents[i % accents.length]} />
                </MouseTilt>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;
