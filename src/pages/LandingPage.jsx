
import React from "react";

const LandingPage = () => {

  return (
    <section id="landingpage" className="bg-black text-white font-sans pt-[30px]">
      {/* Food Truck Section */}
      <header className="text-center p-10 bg-black">        
        {/* Add the poster image */}
        <div className="mt-6">
          <img
            src="/veg_post.png" // This references the image from the public directory
            alt="vegiez Poster"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        
      </header>
    </section>
  );
};

export default LandingPage;
