import React from 'react';
import CartList from './CartList';
import Checkout from './Checkout';
import { useCart } from './useCart';

const Body = () => {
  const { cartItems, updateQuantity, removeItem, handleCheckout, loading, error } = useCart();

  if (loading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <h1 id="Body_4" className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div id="Body_5" className="text-center py-8">
          <p id="Body_6" className="text-gray-500 text-lg">Your cart is empty</p>
        </div>
      ) : (
        <div id="Body_7" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div id="Body_8" className="lg:col-span-2">
            <CartList 
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
            />
          </div>
          <div id="Body_9" className="lg:col-span-1">
            <Checkout 
              items={cartItems}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;