/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('https://parcial.nucleoslabs.com.co/api/v1/productos/listar');
      const data = await response.json();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-yellow-100 to-orange-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Productos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map(producto => (
          <div key={producto._id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-lg font-bold">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
