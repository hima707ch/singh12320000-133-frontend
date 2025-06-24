import React from 'react';
import OrderSummary from './OrderSummary';
import useOrderConfirmation from './useOrderConfirmation';
import images from '../assets/images';

const Body = () => {
  const { orderDetails } = useOrderConfirmation();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-3xl mx-auto">
        <div id="Body_3" className="text-center mb-12">
          <img
            id="Body_4"
            src={images[0]}
            alt="Success"
            className="mx-auto h-24 w-24"
          />
          <h1 id="Body_5" className="mt-4 text-3xl font-bold text-green-600">
            Order Confirmed!
          </h1>
          <p id="Body_6" className="mt-2 text-gray-600">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>
        <OrderSummary orderDetails={orderDetails} />
      </div>
    </div>
  );
};

export default Body;