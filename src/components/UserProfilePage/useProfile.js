import { useState, useEffect } from 'react';

const useProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulated user data fetch
    const fetchUserData = async () => {
      try {
        // In a real app, this would be an API call
        const mockUserData = {
          name: 'John Doe',
          email: 'john.doe@example.com',
        };
        setUserData(mockUserData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (updatedData) => {
    try {
      setLoading(true);
      // In a real app, this would be an API call
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUserData(updatedData);
      setLoading(false);
    } catch (err) {
      setError('Failed to update profile');
      setLoading(false);
    }
  };

  return { userData, handleUpdate, loading, error };
};

export default useProfile;