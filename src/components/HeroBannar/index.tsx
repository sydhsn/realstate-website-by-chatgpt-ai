import React from "react";

function HeroBanner() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-xl text-white mb-12">
          Discover Amazing Products and Services
        </p>
        <a
          href="/products"
          className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105"
        >
          Explore
        </a>
      </div>
      <div className="bg-cover bg-center py-4 relative">
        <div className="bg-black bg-opacity-40 inset-0"></div>
        <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10">
          <h1 className="text-white text-4xl font-extrabold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-white text-lg mb-6">
            Discover the perfect property for you.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300 ease-in-out">
            View Listings
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
