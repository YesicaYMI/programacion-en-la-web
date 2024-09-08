import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Home from './pages/Home';
import './app.css';  // Importa el archivo CSS aquí

const App = () => {
  return (
    <Router>
      <header>
        <h1 className="text-4xl font-bold">Mi Aplicación</h1>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
