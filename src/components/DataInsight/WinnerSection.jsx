

function WinnerSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-15 md:py-20 bg-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center bg-green100 rounded-4xl p-6 md:p-10 max-w-310 mx-auto">
            <div className="flex flex-col gap-8 md:basis-1/2 w-full">
                <h3 className="text-white font-jost font-medium text-lg md:text-xl">2025 Winner - Ease of Doing Business</h3>
                <h4 className="text-white font-jost font-medium text-base md:text-lg">Best Subnational Investment Environment</h4>
                <p className="text-white font-jost text-sm md:text-base">Lagos State continues to receive recognition for improving the business environment, simplifying investment processes, and supporting private sector growth.</p>
            </div>
            <div className="md:basis-1/2 border-4 border-white h-100 md:h-120 rounded-2xl px-5 md:px-10 w-full">
                <img src="/data-insight-win-img.jpg" alt="" className="w-full h-full"/>
            </div>
            
        </div>
    </section>
  )
}

export default WinnerSection