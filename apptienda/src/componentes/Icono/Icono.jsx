import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/CartContext";
import "./Icono.css";

const Icono = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="carrito">
      <div className="Icono" style={{ fontSize: "1.5em" }}>
        <FontAwesomeIcon icon={faCartPlus}  />
        <span className="contador" style={{ fontSize: "0.8em" }}>
          {cart.length}
        </span>
      </div>
    </div>
  );
};

export default Icono;
