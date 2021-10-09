import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import React, {useState, useEffect} from 'react';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemCount from './componentes/ItemCount/ItemCount';
import Item from './componentes/Item/Item';
import CartWitget from './componentes/CartWidget/CartWitget';


function App() {

  const [cart, setCart]= useState (0);

  const addCarrito = (items) => {setCart(cart+items)}

  useEffect(() => {
    console.log("se agrego producto")
   
  }, [cart])

  return (
    <div>

      <Navbar cart={cart} />
      <ItemListContainer addCarrito={addCarrito}/>
      <CartWitget/>
      

      

      
    </div>
  );
}

export default App;
