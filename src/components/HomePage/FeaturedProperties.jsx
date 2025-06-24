import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties }) => {
  return (
    <section id="Featured_1" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="Featured_2" className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={images[index + 2]} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold">${property.price.toLocaleString()}</span>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;