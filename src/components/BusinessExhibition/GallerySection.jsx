const gallery = [
  "/business/be1.png",
  "/business/be2.png",
  "/business/be3.png",
  "/business/be4.png",
  "/business/be5.png",
  "/business/be6.png",
  "/business/be7.png",
  "/business/be8.png",
  "/business/be9.png",
  "/business/be10.png",
  "/business/be11.png",
  "/business/be12.png",
];

function GallerySection() {
  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 py-8 md:py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-3 max-w-310 mx-auto">
      {gallery.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`${i === 8 || i === 11 ? "md:col-span-2" : "md:col-span-1"}`}
        />
      ))}
      </div>
    </section>
  );
}

export default GallerySection;
