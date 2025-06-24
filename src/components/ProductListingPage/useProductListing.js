import { useState, useEffect } from 'react';

export const useProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
      if (filters.type) queryParams.append('type', filters.type);

      const response = await fetch(`/api/properties/search?${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch properties');

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  return {
    products,
    filters,
    handleFilterChange,
    loading,
    error
  };
};