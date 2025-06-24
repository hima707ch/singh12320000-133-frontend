import React from 'react';
import ProfileInfo from './ProfileInfo';
import useProfile from './useProfile';

const Body = () => {
  const { userData, handleUpdate, loading, error } = useProfile();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_4" className="max-w-3xl mx-auto">
        <h1 id="Body_5" className="text-3xl font-bold text-gray-900 mb-8 text-center">User Profile</h1>
        <ProfileInfo userData={userData} onUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default Body;