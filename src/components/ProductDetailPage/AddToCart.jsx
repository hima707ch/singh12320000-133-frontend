import React from 'react';

const AddToCart = ({ onAddToCart, product }) => {
  return (
    <div id="AddToCart_1" className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
      <div id="AddToCart_2" className="container mx-auto flex items-center justify-between">
        <div id="AddToCart_3" className="text-xl font-bold text-gray-900">
          ${product.price}
        </div>
        <button
          id="AddToCart_4"
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;