import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const iniciarSesion = async () => {
    try {
      const response = await fetch('https://parcial.nucleoslabs.com.co/api/v1/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        navigate('/productos');
      } else {
        Swal.fire('Email o contraseña incorrectos', '', 'error');
      }
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Iniciar Sesión</h1>
      <form onSubmit={(e) => { e.preventDefault(); iniciarSesion(); }}>
        <input className="block w-full mb-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="block w-full mb-4 p-2 border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        <button className="bg-green-500 text-white px-4 py-2 w-full">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
