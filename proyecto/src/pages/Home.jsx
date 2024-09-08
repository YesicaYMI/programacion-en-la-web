// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Our App</h1>
      <div className="flex space-x-4">
        <button 
          onClick={() => handleNavigate('/login')} 
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Iniciar
        </button>
        <button 
          onClick={() => handleNavigate('/register')} 
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Registro
        </button>
      </div>
    </div>
  );
};

export default Home;
