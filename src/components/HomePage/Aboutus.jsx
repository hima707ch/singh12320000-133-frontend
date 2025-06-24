import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 id="AboutUs_2" className="text-4xl font-bold text-gray-900">We Help You Find The Perfect Property</h2>
            <p id="AboutUs_3" className="text-lg text-gray-600">With over 10 years of experience in real estate, we've helped thousands of clients find their dream properties. Our expertise and dedication ensure you get the best possible service.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900">1000+</h3>
                <p className="text-blue-700">Properties Sold</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900">500+</h3>
                <p className="text-blue-700">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={images[1]} alt="Team" className="rounded-lg shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-lg">
              <p className="text-lg font-semibold">Trusted by thousands of clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;