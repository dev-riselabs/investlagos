const imgs = [
    '/business/bb1.png',
    '/business/bb2.png',
    '/business/bb3.png',
    '/business/bb4.png',
    '/business/bb5.png',
    '/business/bb6.png',
    '/business/bb7.png',
    '/business/bb8.png',
]

function CultureSection() {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-10 md:py-15 flex flex-col gap-6 bg-white items-center">
        <h2 className="font-jost text-black font-bold text-2xl md:text-3xl">Behold the Beauty of Culture in Lagos...</h2>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-4 gap-y-5">
            {
imgs.map((img, i) => <img src={img} className={`${i === 6 || i === 7 ? "md:col-span-3" : "md:col-span-2"}`}/>)
            }
        </div>

    </section>
  )
}

export default CultureSection