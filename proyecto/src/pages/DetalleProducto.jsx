import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://parcial.nucleoslabs.com.co/api/v1/productos/listar/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="p-4">
      <img src={producto.imagen} alt={producto.nombre} className="w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p className="text-2xl text-gray-800">${producto.precio}</p>
    </div>
  );
};

export default DetalleProducto;
