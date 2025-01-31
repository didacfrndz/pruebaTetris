import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { VistaPartidas } from './vistas/vistapartidas.jsx';
import {VistaInicio} from './vistas/vistainicio.jsx';
import { VistaJuego } from './vistas/vistajuego.jsx';
import { VistaRanking } from './vistas/vistaranking.jsx';



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
            <Link to="/juego">Juego</Link> {/* Redirige a la vista de Perfil */}
          </li>
          <li>
            <Link to="/ranking">Ranking</Link> {/* Redirige a la vista de Perfil */}
          </li>
        </ul>
      </nav>

      <div className="vistas">
        {/* Define las rutas y sus componentes */}
        <Routes>
          <Route path="/" element={<VistaInicio/>} />
          <Route path="/partidas" element={<VistaPartidas />} />
          <Route path="/juego" element={<VistaJuego/>} />
          <Route path="/ranking" element={<VistaRanking/>} />
        </Routes>
      </div>
    </Router>

  
  );
}

export default App;
