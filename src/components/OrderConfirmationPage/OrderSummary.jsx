import React from 'react';
import images from '../assets/images';

const OrderSummary = ({ orderDetails }) => {
  return (
    <div id="OrderSummary_1" className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div id="OrderSummary_2" className="px-6 py-4 border-b border-gray-200">
        <h2 id="OrderSummary_3" className="text-xl font-semibold text-gray-800">
          Order Summary
        </h2>
        <p id="OrderSummary_4" className="text-sm text-gray-600">
          Order #{orderDetails?.orderId || '12345'}
        </p>
      </div>
      
      <div id="OrderSummary_5" className="px-6 py-4">
        <div id="OrderSummary_6" className="space-y-4">
          {orderDetails?.items?.map((item, index) => (
            <div key={index} id={`OrderSummary_7_${index}`} className="flex justify-between items-center">
              <div id={`OrderSummary_8_${index}`} className="flex items-center space-x-4">
                <img
                  src={item.image || images[1]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <span className="font-medium text-gray-800">${item.price}</span>
            </div>
          ))}
        </div>
        
        <div id="OrderSummary_9" className="mt-6 pt-6 border-t border-gray-200">
          <div id="OrderSummary_10" className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${orderDetails?.subtotal || '0.00'}</span>
          </div>
          <div id="OrderSummary_11" className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">${orderDetails?.shipping || '0.00'}</span>
          </div>
          <div id="OrderSummary_12" className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${orderDetails?.tax || '0.00'}</span>
          </div>
          <div id="OrderSummary_13" className="flex justify-between pt-4 border-t border-gray-200">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">${orderDetails?.total || '0.00'}</span>
          </div>
        </div>
        
        <div id="OrderSummary_14" className="mt-6 pt-6 border-t border-gray-200">
          <h3 id="OrderSummary_15" className="text-lg font-semibold mb-4">Delivery Information</h3>
          <div id="OrderSummary_16" className="text-gray-600">
            <p>{orderDetails?.deliveryAddress?.name || 'John Doe'}</p>
            <p>{orderDetails?.deliveryAddress?.street || '123 Main St'}</p>
            <p>{orderDetails?.deliveryAddress?.city || 'New York'}, {orderDetails?.deliveryAddress?.state || 'NY'} {orderDetails?.deliveryAddress?.zip || '10001'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
