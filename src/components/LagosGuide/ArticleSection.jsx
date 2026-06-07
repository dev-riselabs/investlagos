const articles = [
  {
    img: "/art1.png",
    title: "Climate Preparation",
    desc: [
      "Lagos generally experiences warm weather, so pack light and breathable clothing like cotton shirts, dresses and shorts. While temperatures are high, occasional rainfall may occur, so include a light jacket or sweater for cooler evenings.",
      "Comfortable shoes are essential for exploring the bustling streets. Also, make sure to pack sunscreen with a high SPF to protect yourself from the sun.",
    ],
  },
  {
    img: "/art2.png",
    title: "Tech Gear & Accessories",
    desc: [
      "Don’t forget your phone or camera to capture all the memorable moments during the Invest Lagos summit. Be sure to bring necessary chargers, adapters and power banks to keep your devices charged throughout your stay.",
    ],
  },
  {
    img: "/art3.png",
    title: "Health & Vaccinations",
    desc: [
      "Travelers to Nigeria may need specific vaccinations. If you’re arriving from a country where yellow fever is prevalent, you must have a yellow fever vaccination certificate. It’s recommended to check the latest health guidelines on the Nigerian International Travel Portal. Also, pack any personal medications and basic remedies for common issues like headaches or allergies.",
    ],
  },
];

function ArticleSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-20">
      <div className="flex flex-col gap-10 max-w-310 mx-auto">
        <div className="flex flex-col gap-6 font-jost">
          <h2 className="text-green400 text-2xl md:text-3xl font-bold">
            Getting Ready for Your Journey to Lagos, Nigeria
          </h2>
          <p className="text-green400 text-sm md:text-base">
            Everything you need to prepare for Invest Lagos 3.0—from travel
            information and accommodation to local insights and event
            essentials.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
            {
                articles.map((article, i) => <article key={article.title} className={`flex flex-col bg-slate600 rounded-b-2xl shadow-article border-b-4 ${
                    i === 0 ? 'border-b-red': 
                    i === 1 ? 'border-b-blue':
                    i === 2 ? 'border-b-yellow':
                    'border-b-orange'
                }`}>
                    <img src={article.img} alt="" />
                    <div className="flex flex-col gap-6 px-5 py-7.5 font-jost">
                        <h4 className="font-semibold text-base text-black100">{article.title}</h4>
                        <div className="flex flex-col gap-5">
                            {
                                article.desc.map(item => <p key={item} className="text-sm text-black500">{item} </p>)
                            }
                        </div>
                    </div>
                </article>)
            }
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
