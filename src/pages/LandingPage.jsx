
import React from "react";

const LandingPage = () => {
//   const foodItems = [
//     {
//       id: 1,
//       name: "Idiyappam",
//       description: "A juicy idiyappam with spicy mayo and fresh veggies.",
//       image: "/foods/idi.jpg",
//     },
//     {
//       id: 2,
//       name: "Dhosa",
//       description: "Crispy dhosa, jalapeños, and salsa.",
//       image: "/foods/dhosa.jpg",
//     },
//     {
//       id: 3,
//       name: "Appam",
//       description: "A healthy wrap packed with fresh veggies and hummus.",
//       image: "/foods/appam.jpg",
//     },
//   ];

//   const truckImages = [
//     "/trucks/truck1.jpg",
//     "/trucks/truck2.jpg",
//     // "/trucks/truck3.jpg",
//     // "/trucks/truck4.jpg",
//   ];

  return (
    <section id="landingpage" className="bg-black text-white font-sans pt-[30px]">
      {/* Food Truck Section */}
      <header className="text-center p-10 bg-black">
        {/* <h1 className="text-2xl font-bold text-orange-600">
          WELCOME TO MADHU IDIYAPPA KADAI
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          Fresh and flavorful meals crafted just for you.
        </p> */}
        
        {/* Add the poster image */}
        <div className="mt-6">
          <img
            src="/veg_post.png" // This references the image from the public directory
            alt="vegiez Poster"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {truckImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Food Truck ${index + 1}`}
              className="w-72 h-80 rounded-lg shadow-lg"
            />
          ))}
        </div> */}
      </header>
    </section>
  );
};

export default LandingPage;
