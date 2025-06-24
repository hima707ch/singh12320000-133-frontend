import React from 'react';

const ProductFilters = ({ filters, onFilterChange }) => {
  return (
    <div id="ProductFilters_1" className="w-full lg:w-64 bg-white p-4 rounded-lg shadow">
      <h2 id="ProductFilters_2" className="text-xl font-semibold mb-4">Filters</h2>
      
      <div id="ProductFilters_3" className="space-y-4">
        <div className="space-y-2">
          <label id="ProductFilters_4" className="block text-sm font-medium">Location</label>
          <input
            type="text"
            id="ProductFilters_5"
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>

        <div className="space-y-2">
          <label id="ProductFilters_6" className="block text-sm font-medium">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              id="ProductFilters_7"
              value={filters.minPrice}
              onChange={(e) => onFilterChange('minPrice', e.target.value)}
              className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Min"
            />
            <input
              type="number"
              id="ProductFilters_8"
              value={filters.maxPrice}
              onChange={(e) => onFilterChange('maxPrice', e.target.value)}
              className="w-1/2 p-2 border rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Max"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label id="ProductFilters_9" className="block text-sm font-medium">Property Type</label>
          <select
            id="ProductFilters_10"
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;