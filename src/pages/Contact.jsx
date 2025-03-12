
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white font-sans px-4 py-10"
    >

      <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Our Restaurants. Where to Find Us?</h3>
          <p className="mb-6">
            Want to have a superb meal in an exceptional setting with family,
            friends or work colleagues? Here are the addresses of our
            restaurants.
          </p>
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
            Find The Nearest VEGIEZ
          </button>
        </div>
        <div className="md:w-1/2">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0251995028524!2d144.958421915866!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778f99ef4a77e!2sSeddon%20Park!5e0!3m2!1sen!2slk!4v1614386063738!5m2!1sen!2slk"
            className="w-full h-64 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
