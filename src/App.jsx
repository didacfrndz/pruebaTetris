import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { VistaPartidas } from './vistas/vistapartidas.jsx';




function App() {
  return (
    <Router>
      {/* Barra de navegación con Link */}
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link> {/* Redirige a la vista de inicio */}
          </li>
          <li>
            <Link to="/partidas">Partidas</Link> {/* Redirige a la vista de Partidas */}
          </li>
          <li>
            <Link to="/perfil">Perfil</Link> {/* Redirige a la vista de Perfil */}
          </li>
        </ul>
      </nav>

      <div className="vistas">
        {/* Define las rutas y sus componentes */}
        <Routes>
          <Route path="/" element={<h2>Bienvenido a la vista de inicio</h2>} />
          <Route path="/partidas" element={<VistaPartidas />} />
          <Route path="/perfil" element={<h2>Vista de Perfil</h2>} />
        </Routes>
      </div>
    </Router>

    //añadir aqui la vista de inicio con las instrucciones
  );
}

export default App;
