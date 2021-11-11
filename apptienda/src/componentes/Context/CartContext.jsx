import React, { createContext, useState } from "react";
import { agruparItem, existeItem } from "../../Helpers";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (existeItem(cart, item)) {
      setCart(agruparItem(cart, item));

      return;
    }
    setCart([...cart, item]);
  };
  const resetCart = () => {
    setCart([]);
  };
  const deleteItem = (item) => {
    let filtrado = cart.filter((elemento) => elemento.id !== item.id);
    setCart(filtrado);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        resetCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
