import { useState, useEffect } from 'react';

const useOrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderId: '123456789',
    items: [
      {
        name: 'Product 1',
        quantity: 2,
        price: '29.99',
        image: 'https://example.com/product1.jpg'
      },
      {
        name: 'Product 2',
        quantity: 1,
        price: '49.99',
        image: 'https://example.com/product2.jpg'
      }
    ],
    subtotal: '109.97',
    shipping: '5.99',
    tax: '9.50',
    total: '125.46',
    deliveryAddress: {
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  });

  useEffect(() => {
    // Here you would typically fetch the order details from your backend
    // using the order ID from the URL params or state management
  }, []);

  return {
    orderDetails
  };
};

export default useOrderConfirmation;