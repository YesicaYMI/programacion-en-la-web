/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const response = await fetch(`https://parcial.nucleoslabs.com.co/api/v1/productos/listar/${id}`);
      const data = await response.json();
      setProducto(data);
    };
    fetchProducto();
  }, [id]);

  if (!producto) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <img src={producto.imagen} alt={producto.nombre} className="w-full h-60 object-cover rounded-md mb-4" />
        <h2 className="text-3xl font-bold mb-4">{producto.nombre}</h2>
        <p className="text-xl mb-4">{producto.descripcion}</p>
        <p className="text-2xl font-bold">${producto.precio}</p>
      </div>
    </div>
  );
};

export default DetalleProducto;
