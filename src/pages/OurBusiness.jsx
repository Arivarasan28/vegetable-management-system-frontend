import React from "react";
import Footer from "../components/Footer"; // Assuming Footer is another component

const OurBusiness = () => {
  return (
    <div className="font-sans text-gray-400 pt-[100px]">
      {/* Hero Section
      <header className="text-center py-12 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Food Truck</h1>
        <p className="text-xl mb-6">
          Serving Fresh, Delicious, and Affordable Meals on the Go!
        </p>
      </header> */}

      {/* About Section */}
      <section className="bg-black py-8 px-4 text-center">
        {/* <h2 className="text-3xl text-orange-600 mb-4">About Us</h2> */}
        <p className="text-lg">
        At VEGIEZ, we believe fresh produce isn’t just food – it’s a foundation for healthy living.
        We bring you a seamless way to manage, track, and distribute farm-fresh vegetables, inspired by sustainable practices and delivered with efficiency, right to your community.
 </p>
      </section>

      {/* Features Section */}
      <section className="py-8 px-4 bg-black">
        <h2 className="text-3xl text-green-500 text-center mb-8">Why Choose Vegiez?</h2>
        <div className="flex flex-wrap justify-around gap-4">
          <div className="max-w-xs p-6 bg-gray-900 border rounded-lg shadow-md">
            <h3 className="text-xl text-green-500 mb-4">Farm-to-Table Freshness</h3>
            <p>Manage and track the freshest, locally-sourced vegetables to ensure quality and sustainability in every supply.</p>
          </div>
          <div className="max-w-xs p-6 bg-gray-900 border rounded-lg shadow-md">
            <h3 className="text-xl text-green-500 mb-4">Seamless Inventory Management</h3>
            <p>
            Simplify your vegetable stock management with real-time tracking and automated updates, all in one platform.
            </p>
          </div>
          <div className="max-w-xs p-6 bg-gray-900 border rounded-lg shadow-md">
            <h3 className="text-xl text-green-500 mb-4">Sustainable Practices</h3>
            <p>Promote eco-friendly farming and distribution methods, contributing to a healthier planet while managing your produce efficiently.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="bg-black py-8 px-4">
        <h2 className="text-3xl text-orange-600 text-center mb-8">Our Gallery</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="/public/trucks/truck2.jpg"
            alt="Food Truck"
            className="w-full sm:w-72 max-w-xs rounded-lg shadow-lg"
          />
          <img
            src="/public/trucks/truck1.jpg"
            alt="Delicious Dish"
            className="w-full sm:w-72 max-w-xs rounded-lg shadow-lg"
          />
          <img
            src="/public/trucks/truck3.jpg"
            alt="Tasty Meal"
            className="w-full sm:w-72 max-w-xs rounded-lg shadow-lg"
          />
        </div>
      </section> */}

      <section className=" bg-black py-8">

      </section>

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default OurBusiness;
