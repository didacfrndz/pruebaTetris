import React from "react";

//poner las instrucciones de tetris

export function VistaInicio(){
    return(
        <div className="text-light">
            <header className="d-flex align-items-center justify-content-center">
                <h2 className="mt-5">Instrucciones</h2>
            </header>
            <main>
                <h2>Instrucciones:</h2>
                <p>Puedes mover las piezas usando las flechas izquierda y derecha</p>
                <p>Con la flecha hacia abajo puedes girar la pieza</p>
            </main>
        </div>
    );
}

export default VistaInicio;