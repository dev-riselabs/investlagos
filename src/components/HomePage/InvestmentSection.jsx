

function InvestmentSection() {
  return (
    <section className="bg-green100! invest-bg px-4 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-15 ">
        <div className="flex flex-col gap-4 items-center">
            <h3 className="text-white font-medium font-jost text-5xl">Investment Hub</h3>
            <p className="text-base font-manrope text-white/70 font-medium text-center max-w-[80ch]">Connecting global capital with transformative opportunities in Africa's largest subnational economy. Discover projects that drive growth, innovation, sustainability and inclusive prosperity.</p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-8">
                <button></button>
            </div>
            <img src="/investment-img.png" alt="" />
        </div>

    </section>
  )
}

export default InvestmentSection