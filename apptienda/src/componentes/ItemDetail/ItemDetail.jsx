import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ autos }) => {
  return (
    <div>
      <div className="card text-center"  style={{ width: "25rem" }}>
        <div className="card-body">
          <img
            src={JSON.parse(autos.img)}
            className="col-sm-8"
            alt="...imagen de producto"
          />
          <h2 className="card-title">{autos.nombre}</h2>
          <h2 className="card-title">{autos.detalle}</h2>
          <h3 className="card-subtitle mb-2 text-muted">Oportunidad!!!</h3>
          <p className="card-text">
            Todos los modelos cuentan con amplia financiacion.
          </p>
          {autos && <ItemCount producto={autos} stock={autos.stock} />}
          <Link to={`/CartWitget/${autos.id}`} className="btn btn-primary btn-red">           
            Ir Al Carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
