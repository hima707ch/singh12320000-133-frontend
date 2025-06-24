import React from 'react';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import { useProductListing } from './useProductListing';

const Body = () => {
  const { products, filters, handleFilterChange, loading, error } = useProductListing();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold mb-8 text-gray-800">Available Properties</h1>
      <div id="Body_3" className="flex flex-col lg:flex-row gap-8">
        <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
        {loading ? (
          <div id="Body_4" className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div id="Body_5" className="flex-1 text-red-500 text-center">{error}</div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </div>
  );
};

export default Body;