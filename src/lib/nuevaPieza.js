import modeloPieza from "./modeloPieza.js";
import { modelos } from "./modelos.js";

export function nuevaPieza() {
  const numeroAleatorio = Math.floor(Math.random() * modelos.piezas.length);

  const piezaAleatoria = modelos.piezas[numeroAleatorio];
  const nombre = piezaAleatoria.nombre;
  const matriz = piezaAleatoria.matriz[0];

  const columnaAleatoria = Math.floor(Math.random() * (10 - matriz[0].length)); 

  return new modeloPieza(numeroAleatorio, nombre, 0, 0, columnaAleatoria, matriz);
}