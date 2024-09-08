/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire('Success', 'User created successfully', 'success');
        navigate('/login');  // Redirigir a la pantalla de Login
      } else {
        Swal.fire('Error', data.message || 'Failed to create user', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An unexpected error occurred', 'error');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Create Account</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-4 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />
        <button type="submit" className="w-full p-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">Register</button>
      </form>
    </div>
  );
};

export default Register;
