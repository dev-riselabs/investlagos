import React from 'react';

const GalleryPicture = () => {
  // 1. I removed the leading slash from the 'img' values to prevent double slashes later.
  const galleryItems = [
    { id: 1, spanClasses: "lg:col-span-3 lg:row-span-2", img: "grid_1_1" },
    { id: 2, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_1_2" },
    { id: 3, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_1_3" },
    { id: 4, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_2_1" },
    { id: 5, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_2_2" },
    { id: 6, spanClasses: "sm:col-span-2 lg:col-span-6 sm:row-span-2", img: "grid_3_1" },
    { id: 7, spanClasses: "lg:col-span-2 lg:row-span-1", img: "grid_1_1" },
    { id: 8, spanClasses: "lg:col-span-2 lg:row-span-1" , img: "grid_4_1"},
    { id: 9, spanClasses: "lg:col-span-2 lg:row-span-1", img: "grid_4_2" },
    // Fill in the rest with your actual image names...
    { id: 10, spanClasses: "lg:col-span-3 lg:row-span-2", img: "grid_4_1" },
    { id: 11, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_1_2" },
    { id: 12, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_2_2" },
    { id: 13, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_5_1" },
    { id: 14, spanClasses: "lg:col-span-3 lg:row-span-1", img: "grid_1_3" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[250px] gap-4 p-4 md:py-10 md:px-10 lg:px-20 max-w-310 mx-auto my-10">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          // 2. Use React's style prop for the dynamic background URL
          style={{ backgroundImage: `url('/gallery/${item.img}.jpg')` }}
          className={`
            bg-gray-200 
            bg-cover 
            bg-center 
            bg-no-repeat 
            rounded-lg 
            w-full 
            h-full
            ${item.spanClasses}
          `}
        >
          {/* Content here */}
        </div>
      ))}
    </div>
  );
};

export default GalleryPicture;