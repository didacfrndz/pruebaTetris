
import React, { useState } from "react";

const arrayPartidasInicio = [
  {
    nick: "Player 1",
    puntos: 900,
    fecha: "21/02/2006",
    imagen: "https://www.example.com/imagen1.jpg",
  },
  {
    nick: "Player 2",
    puntos: 1000,
    fecha: "16/11/2006",
    imagen: "https://www.example.com/imagen2.jpg",
  },
  {
    nick: "Player 3",
    puntos: 1900,
    fecha: "01/06/2016",
    imagen: "https://www.example.com/imagen3.jpg",
  },
  {
    nick: "Player 4",
    puntos: 800,
    fecha: "08/09/2020",
    imagen: "https://www.example.com/imagen4.jpg",
  },
  {
    nick: "Player 5",
    puntos: 9999,
    fecha: "16/01/2025",
    imagen: "https://www.example.com/imagen5.jpg",
  },
];

// Función para ordenar por columna (por ejemplo, "puntos" o "fecha")
export function ordenarPartidas(arrayPartidasInicio, columna, orden) {
  return arrayPartidasInicio.sort((a, b) => {
    if (orden === "asc") {
      return a[columna] < b[columna] ? -1 : 1;
    } else {
      return a[columna] > b[columna] ? -1 : 1;
    }
  });
}

export function TablaPartidas() {
  const [partidas, setPartidas] = useState(arrayPartidasInicio);

  const manejarOrden = (columna, orden) => {
    const partidasOrdenadas = ordenarPartidas(partidas, columna, orden);
    setPartidas(partidasOrdenadas);
  };

  const agregarPartida = () => {
    const nuevaPartida = {
      nick: `Jugador${partidas.length + 1}`,
      puntos: Math.floor(Math.random() * 2000), // Puntos aleatorios
      fecha: new Date().toISOString().split("T")[0], // Fecha actual
      imagen: "https://www.example.com/imagen.jpg", // Imagen por defecto
    };
    setPartidas([...partidas, nuevaPartida]);
  };

  return (
    <div className="container mt-5 bg-dark p-2">
      <button onClick={agregarPartida} className="btn btn-primary mb-4">
        Agregar Partida
      </button>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nick</th>
            <th>
              Puntuación
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("puntos", "asc")}
              >
                ↑
              </button>
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("puntos", "desc")}
              >
                ↓
              </button>
            </th>
            <th>
              Fecha
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("fecha", "asc")}
              >
                ↑
              </button>
              <button
                className="btn btn-link"
                onClick={() => manejarOrden("fecha", "desc")}
              >
                ↓
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {partidas.map((partida, index) => (
            <tr key={index}>
              <td>
                <img
                  src={partida.imagen}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  alt="imagen"
                />
              </td>
              <td>{partida.nick}</td>
              <td>{partida.puntos}</td>
              <td>{partida.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaPartidas;