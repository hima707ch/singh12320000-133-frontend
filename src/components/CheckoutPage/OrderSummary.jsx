import React from 'react';
import images from '../assets/images';

const OrderSummary = ({ shippingData, paymentData, onPlaceOrder, loading }) => {
  return (
    <div id="OrderSummary_1" className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h2 id="OrderSummary_2" className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div id="OrderSummary_3" className="space-y-4 mb-6">
        <div className="flex items-center border-b pb-4">
          <img src={images[0]} alt="Product" className="w-20 h-20 object-cover rounded" />
          <div className="ml-4">
            <h3 className="font-medium">Sample Product</h3>
            <p className="text-gray-600">Quantity: 1</p>
            <p className="text-gray-600">$99.99</p>
          </div>
        </div>
      </div>

      {shippingData && (
        <div id="OrderSummary_4" className="mb-4">
          <h3 className="font-medium mb-2">Shipping Details</h3>
          <p className="text-sm text-gray-600">{shippingData.fullName}</p>
          <p className="text-sm text-gray-600">{shippingData.address}</p>
          <p className="text-sm text-gray-600">{shippingData.city}, {shippingData.postalCode}</p>
        </div>
      )}

      {paymentData && (
        <div id="OrderSummary_5" className="mb-4">
          <h3 className="font-medium mb-2">Payment Method</h3>
          <p className="text-sm text-gray-600">Card ending in {paymentData.cardNumber.slice(-4)}</p>
        </div>
      )}

      <div id="OrderSummary_6" className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>$99.99</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$9.99</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>$109.98</span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        disabled={!shippingData || !paymentData || loading}
        className="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
};

export default OrderSummary;