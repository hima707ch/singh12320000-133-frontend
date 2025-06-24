import React, { useState } from 'react';
import images from '../assets/images';

const ProfileInfo = ({ userData, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div id="ProfileInfo_1" className="bg-white shadow rounded-lg p-6">
      <div id="ProfileInfo_2" className="flex items-center space-x-6 mb-6">
        <img
          id="ProfileInfo_3"
          src={images[0] || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        {!isEditing ? (
          <div id="ProfileInfo_4">
            <h2 id="ProfileInfo_5" className="text-2xl font-bold text-gray-900">{userData?.name}</h2>
            <p id="ProfileInfo_6" className="text-gray-600">{userData?.email}</p>
          </div>
        ) : null}
      </div>

      {!isEditing ? (
        <div id="ProfileInfo_7" className="space-y-4">
          <div id="ProfileInfo_8" className="border-t pt-4">
            <button
              id="ProfileInfo_9"
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <form id="ProfileInfo_10" onSubmit={handleSubmit} className="space-y-4">
          <div id="ProfileInfo_11">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div id="ProfileInfo_12">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div id="ProfileInfo_13" className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileInfo;