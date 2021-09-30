import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Catalogo from './componentes/Catalogo/Catalogo';
import React, { useState } from 'react';
import {BrowserRouter as Router, Swithc, Route} from 'react-router-dom'





function App() {

  const [catalogoAbierto, setCatalogoAbierto] = useState(false);

  const abrirCatalogo = () => {
    setCatalogoAbierto(true);
  }

  const cerrarCatalogo = () => {
    setCatalogoAbierto(false);
  }

  
  return (
    <div>
      <Navbar/> 
      <button onClick={abrirCatalogo}>
        Abrir Catalogo
      </button>
      <Catalogo 
       estaAbierto={catalogoAbierto}
       cerrarCatalogo={cerrarCatalogo}/>   
    </div>
  );
}

export default App;
