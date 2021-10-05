import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import React from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Swithc, Route} from 'react-router-dom'





function App() {

  
    
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>                  
    </div>
  );
}

export default App;
