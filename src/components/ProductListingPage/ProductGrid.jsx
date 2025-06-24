import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../assets/images';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div id="ProductGrid_1" className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          id={`ProductGrid_${index + 2}`}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => navigate(`/property/${product.id}`)}
        >
          <img
            src={images[index % images.length] || 'https://via.placeholder.com/300x200'}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">{product.type}</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm truncate">{product.location}</p>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <div id="ProductGrid_99" className="col-span-full text-center text-gray-500 py-8">
          No properties found matching your criteria
        </div>
      )}
    </div>
  );
};

export default ProductGrid;