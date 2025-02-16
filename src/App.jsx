import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VistaPartidas from "./vistas/vistapartidas.jsx";
import VistaRanking from "./vistas/vistaranking.jsx";
import Menu from "./vistas/menu.jsx";
import VistaJuego from "./vistas/vistajuego.jsx";
import VistaInicio from "./vistas/vistainicio.jsx";


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<VistaInicio/>} />
        <Route path="/juego" element={<VistaJuego />} />
        <Route path="/partidas" element={<VistaPartidas />} />
        <Route path="/ranking" element={<VistaRanking />} />
      </Routes>
    </Router>

  );
}

export default App;