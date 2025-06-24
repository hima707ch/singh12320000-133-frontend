import React from 'react';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import useCheckout from './useCheckout';

const Body = () => {
  const { 
    shippingData,
    paymentData,
    handleShippingSubmit,
    handlePaymentSubmit,
    handlePlaceOrder,
    loading,
    error 
  } = useCheckout();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>
      
      {error && (
        <div id="Body_3" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div id="Body_5" className="space-y-8">
          <ShippingForm onSubmit={handleShippingSubmit} />
          <PaymentForm onSubmit={handlePaymentSubmit} />
        </div>
        
        <div id="Body_6">
          <OrderSummary 
            shippingData={shippingData}
            paymentData={paymentData}
            onPlaceOrder={handlePlaceOrder}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;