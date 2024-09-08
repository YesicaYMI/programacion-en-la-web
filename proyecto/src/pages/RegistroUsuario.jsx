import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registrarUsuario = async () => {
    try {
      const response = await fetch('https://parcial.nucleoslabs.com.co/api/v1/usuarios/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password })
      });

      if (response.ok) {
        Swal.fire('Usuario registrado con éxito', '', 'success');
        navigate('/login');
      } else {
        throw new Error('Error en el registro');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Registrar Usuario</h1>
      <form onSubmit={(e) => { e.preventDefault(); registrarUsuario(); }}>
        <input className="block w-full mb-4 p-2 border" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input className="block w-full mb-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="block w-full mb-4 p-2 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        <button className="bg-blue-500 text-white px-4 py-2 w-full">Registrar</button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
