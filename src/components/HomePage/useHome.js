import { useState, useEffect } from 'react';

export const useHome = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const response = await fetch('/api/properties/search?featured=true');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setFeaturedProperties(data);
      } catch (err) {
        setError(err.message);
        // Fallback data for demonstration
        setFeaturedProperties([
          { id: 1, title: 'Luxury Villa', location: 'Beverly Hills', price: 2500000 },
          { id: 2, title: 'Modern Apartment', location: 'Manhattan', price: 1200000 },
          { id: 3, title: 'Seaside Cottage', location: 'Malibu', price: 1800000 }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  return { featuredProperties, loading, error };
};