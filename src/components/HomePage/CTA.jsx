import React from 'react';

const CTA = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Join thousands of satisfied customers who found their perfect property through our platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started Now</button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;