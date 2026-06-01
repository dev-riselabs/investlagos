import React from 'react';

const FutureLeaderCropEngagement = () => {
  return (
    <section className="bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#2B1C3B] sm:text-4xl">
            Future Leader Corps Engagement
          </h2>
          <p className="text-[15px] text-[#756A82] sm:text-base">
            Participation in Future Leader Corps innovation initiatives continues to grow, with strong representation of women founders.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
       
            <img 
              src="/crop_img_1.png" 
              alt="Youth Participation Growth Chart" 
              className="w-full h-auto "
            />
        

       
 <img 
                src="/crop_img_2.png" 
                alt="Gender Representation Chart" 
                className="w-full h-auto"
              />
             
           
         
        </div>
      </div>
    </section>
  );
};

export default FutureLeaderCropEngagement;