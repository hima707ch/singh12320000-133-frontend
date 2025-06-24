import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated API call to fetch cart items
    const fetchCartItems = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockItems = [
          { id: 1, name: 'Product 1', price: 99.99, quantity: 1 },
          { id: 2, name: 'Product 2', price: 149.99, quantity: 2 },
          { id: 3, name: 'Product 3', price: 199.99, quantity: 1 }
        ];
        
        setCartItems(mockItems);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cart items');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log('Proceeding to checkout');
  };

  return {
    cartItems,
    updateQuantity,
    removeItem,
    handleCheckout,
    loading,
    error
  };
};