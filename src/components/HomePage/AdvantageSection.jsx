

function AdvantageSection() {
  return (
    <section className="bg-green100! advantage-bg px-4 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-10">
        <h2 className="uppercase text-5xl md:text-7xl font-bold font-inter text-transparent text-stroke">the Lagos advantage</h2>
        
        <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-5">
            <p className="text-white font-bold font-jost text-lg md:text-2xl uppercase md:max-w-[40ch] md:flex-1">Beyond attracting investments, Lagos <span className="text-yellow">delivers measurable impact</span>, scalable growth and long-term value.</p>
            <div className="md:flex-1">
                <img src="./advantage-img.png" alt="" />
            </div>
            

        </div>
    </section>
  )
}

export default AdvantageSection