import React from 'react';

const Checkout = ({ items, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div id="Checkout_1" className="bg-white rounded-lg shadow-md p-6">
      <h2 id="Checkout_2" className="text-xl font-semibold mb-4">Order Summary</h2>
      
      <div id="Checkout_3" className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-3 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        id="Checkout_4"
        onClick={onCheckout}
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;