import React from 'react';
import images from '../assets/images';

const CartList = ({ items, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div id="CartList_1" className="bg-white rounded-lg shadow-md p-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          id={`CartList_${item.id}`}
          className="flex items-center gap-4 py-4 border-b last:border-b-0"
        >
          <img 
            src={images[0] || item.image} 
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-1 rounded-md hover:bg-gray-100"
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;