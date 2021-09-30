import React from 'react'
import './Catalogo.css';

const Catalogo = ({estaAbierto, cerrarCatalogo}) => {
    return (
        <div className={`catalogo ${estaAbierto && 'catalogo-abierto'}`}>

            <h1> Aqui Colocaremos los modales del catalgo </h1>
          <button onClick={cerrarCatalogo}> Cerrar Catalgo </button>  
        </div>
    )
}

export default Catalogo
