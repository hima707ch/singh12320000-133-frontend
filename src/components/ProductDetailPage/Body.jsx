import React from 'react';
import ProductDetails from './ProductDetails';
import AddToCart from './AddToCart';
import { useProductDetail } from './useProductDetail';

const Body = () => {
  const { product, loading, error, handleAddToCart } = useProductDetail();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
      <AddToCart onAddToCart={handleAddToCart} product={product} />
    </div>
  );
};

export default Body;