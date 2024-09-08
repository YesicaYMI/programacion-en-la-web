import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://parcial.nucleoslabs.com.co/api/v1/productos/listar')
      .then(response => response.json())
      .then(data => setProductos(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {productos.map(producto => (
        <div key={producto._id} className="p-4 border rounded bg-white shadow-lg">
          <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
          <h2 className="text-xl font-bold">{producto.nombre}</h2>
          <p className="text-gray-600">${producto.precio}</p>
          <Link to={`/productos/${producto._id}`} className="text-blue-500">Ver Detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Productos;
