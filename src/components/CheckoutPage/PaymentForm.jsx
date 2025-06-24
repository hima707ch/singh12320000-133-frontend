import React from 'react';

const PaymentForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div id="PaymentForm_1" className="bg-white p-6 rounded-lg shadow-md">
      <h2 id="PaymentForm_2" className="text-xl font-semibold mb-4">Payment Information</h2>
      <form id="PaymentForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="PaymentForm_4">
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            required
            pattern="[0-9]{16}"
            placeholder="1234 5678 9012 3456"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div id="PaymentForm_5" className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              required
              placeholder="MM/YY"
              pattern="(0[1-9]|1[0-2])/?([0-9]{2})"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              required
              pattern="[0-9]{3,4}"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Save Payment Info
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;