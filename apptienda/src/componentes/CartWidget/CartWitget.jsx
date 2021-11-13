import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import CartElementItem from "../CartElementItem/CartElementItem";
import { Link } from "react-router-dom";
import { sumarTotal } from "../../Helpers";
import Checkout from "../Checkout/Checkout";
import Swal from "sweetalert2";

const CartWitget = () => {
  const { cart, resetCart } = useContext(CartContext);
  let suma = sumarTotal(cart);
  const terminarCompra = () => {
    resetCart();
    Swal.fire("Su orden Num... ha sido creada", "Genial!!, Muchas Gracias Por la Compra!");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 col-md-6">
          {cart.length > 0 ? (
            cart.map((elemento) => <CartElementItem prod={elemento} />)
          ) : (
            <div className="d-flex">
              <h3 className="text">Esta Vacio el Carrito</h3>
            </div>
          )}
        </div>
        <div className="col col-sm-12 col-md-6">
          {cart.length > 0 && (
            <>
              <h2>Su total a pagar es : ${suma}</h2>
              <Checkout />
              <button
                onClick={terminarCompra}
                className="btn btn-primary w-100 my-4"
              >
                {" "}
                Terminar Con La Compra{" "}
              </button>
            </>
          )}

          {cart.length > 0 ? (
            <button className="btn btn-secondary w-100" onClick={resetCart}>
              Limpiar Carrito
            </button>
          ) : (
            <Link className="btn btn-primary" to="/">
              Volver a Comprar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartWitget;
