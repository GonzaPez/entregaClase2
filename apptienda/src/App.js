import "./App.css";
import Navbar from "./componentes/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartWitget from "./componentes/CartWidget/CartWitget";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./componentes/Context/CartContext";
import Checkout from "./componentes/Checkout/Checkout";

function App() {
  const [cart, setCart] = useState(0);

  const addCarrito = (items) => {
    setCart(cart + items);
  };

  useEffect(() => {
    console.log("se agrego producto");
  }, [cart]);

  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar cart={cart} />
          <Switch>
            <Route
              exact
              path="/"
              children={<ItemListContainer addCarrito={addCarrito} />}
            />
            <Route exact path="/cart" children={<CartWitget />} />
            <Route
              exact
              path="/ItemDetail/:id"
              children={<ItemDetailContainer />}
            />
            <Route exact path="/Checkout" children={<Checkout />} />
          </Switch>
        </CartContextProvider>
      </BrowserRouter>
      {/* <ItemListContainer addCarrito={addCarrito}/> */}
    </div>
  );
}

export default App;
