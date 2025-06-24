import React from 'react';
import RegistrationForm from './RegistrationForm';
import useRegister from './useRegister';
import images from '../assets/images';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = useRegister();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <img className="mx-auto h-12 w-auto" src={images[0]} alt="Logo" id="Body_3" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
          Create your account
        </h2>
      </div>
      <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
      {error && (
        <div className="mt-4 text-center text-red-600" id="Body_5">{error}</div>
      )}
      {success && (
        <div className="mt-4 text-center text-green-600" id="Body_6">{success}</div>
      )}
    </div>
  );
};

export default Body;