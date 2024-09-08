import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import RegistroUsuario from './pages/RegistroUsuario.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Bienvenido a la Tienda</h1>
        <nav className="flex justify-center mb-4">
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</Link>
          <Link to="/registro" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">Registro</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
