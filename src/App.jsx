import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TablaPartidas } from './vistas/vistapartidas.jsx';
import React from 'react';

// Otros componentes, si los tienes
// import { Inicio } from './vistas/Inicio.jsx';
// import { Perfil } from './vistas/Perfil.jsx';

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
          <Route path="/partidas" element={<TablaPartidas />} />
          <Route path="/perfil" element={<h2>Vista de Perfil</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
