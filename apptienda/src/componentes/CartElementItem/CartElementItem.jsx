import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartElementItem = ({ prod }) => {
  const { deleteItem } = useContext(CartContext);

  return (
    <div className="container ">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={JSON.parse(prod.img)}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{prod.nombre}</h5>
              <p className="card-text">{prod.modelo}</p>
              <p className="card-text">
                Estas ordenando {prod.cantidad} unidades
              </p>
              <p className="card-text">
                Tu costo por este auto es de ${prod.precio}
              </p>
              <button
                onClick={() => deleteItem(prod)}
                className="btn btn-primary"
              >
                Borrar Del Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartElementItem;
