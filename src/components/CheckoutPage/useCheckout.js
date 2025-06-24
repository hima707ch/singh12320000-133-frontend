import { useState } from 'react';

const useCheckout = () => {
  const [shippingData, setShippingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleShippingSubmit = (data) => {
    setShippingData(data);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
  };

  const handlePlaceOrder = async () => {
    if (!shippingData || !paymentData) {
      setError('Please fill in all required information');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Mock API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form after successful submission
      setShippingData(null);
      setPaymentData(null);
      alert('Order placed successfully!');
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    shippingData,
    paymentData,
    handleShippingSubmit,
    handlePaymentSubmit,
    handlePlaceOrder,
    loading,
    error
  };
};

export default useCheckout;