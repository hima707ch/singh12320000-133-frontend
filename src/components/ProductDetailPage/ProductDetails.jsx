import React from 'react';
import images from '../assets/images';

const ProductDetails = ({ product }) => {
  return (
    <div id="ProductDetails_1" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div id="ProductDetails_2" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="ProductDetails_3" className="space-y-4">
          <img
            src={images[0] || product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg"
            id="ProductDetails_4"
          />
        </div>
        <div id="ProductDetails_5" className="space-y-4">
          <h1 id="ProductDetails_6" className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p id="ProductDetails_7" className="text-xl text-gray-700">${product.price}</p>
          <div id="ProductDetails_8" className="border-t border-gray-200 pt-4">
            <h2 id="ProductDetails_9" className="text-xl font-semibold mb-2">Description</h2>
            <p id="ProductDetails_10" className="text-gray-600">{product.description}</p>
          </div>
          <div id="ProductDetails_11" className="border-t border-gray-200 pt-4">
            <h2 id="ProductDetails_12" className="text-xl font-semibold mb-2">Features</h2>
            <ul id="ProductDetails_13" className="list-disc list-inside text-gray-600">
              {product.features?.map((feature, index) => (
                <li key={index} id={`ProductDetails_14_${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;