import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M45,-78C58.7,-70.3,70.3,-58.7,78,-45C85.7,-31.3,89.3,-15.7,89.3,0C89.3,15.7,85.7,31.3,78,45C70.3,58.7,58.7,70.3,45,78C31.3,85.7,15.7,89.3,0,89.3C-15.7,89.3,-31.3,85.7,-45,78C-58.7,70.3,-70.3,58.7,-78,45C-85.7,31.3,-89.3,15.7,-89.3,0C-89.3,-15.7,-85.7,-31.3,-78,-45C-70.3,-58.7,-58.7,-70.3,-45,-78C-31.3,-85.7,-15.7,-89.3,0,-89.3C15.7,-89.3,31.3,-85.7,45,-78Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full md:w-1/2 space-y-8">
          <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Find Your Dream
              <span className="animate-bounce inline-block ml-2">Home</span>
            </span>
          </h1>
          <p id="Hero_3" className="text-blue-100 text-xl">Discover the perfect property that matches your lifestyle and dreams.</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Explore Now</button>
        </div>
        <div className="hidden md:block w-1/2 transform translate-x-12">
          <img src={images[0]} alt="Modern home" className="rounded-lg shadow-2xl animate-float" />
        </div>
      </div>
    </div>
  );
};

export default Hero;