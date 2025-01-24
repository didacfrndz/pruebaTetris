import './App.css'
import {TablaPartidas} from './vistas/vistapartidas.jsx';
function App() {
  console.log('Pruebas')
  return (
      <>
        <nav>
          <ul>
            <li>
              <button id='btnpartidas' onClick={cargarVista}>Partidas</button>
            </li>
          </ul>
        </nav>
        <div className='vistas'>
          <h2>Soy el div de vistas</h2>
        </div>
      </>
    )
  function cargarVista(vista){
    if(vista == 'partidas'){
      document.querySelector('.vistas'). innerHTML = TablaPartidas();
      console.log("Vista Tabla Partidas");
    }
  }
  document.getElementById('btnpartidas').addEventListener("click", function(){cargarVista('partidas')});
 
  
}


export default App;