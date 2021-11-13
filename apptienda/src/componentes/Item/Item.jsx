import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ prod }) => {
  return (
    <div>
      <div className="contenedor">
        <div className="card text-center col-sm-8">
          <div className="card-header"></div>
          <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">{prod.modelo}</p>
            <p className="card-text">Unidades disponibles {prod.stock}</p>
            <img
              src={JSON.parse(prod.img)}
              className="col-sm-8"
              alt="...imagen de producto"
            />

            <div>
              <div>
                <Link to={`/ItemDetail/${prod.id}`} className="btn btn-primary">
                  {" "}
                  Detalle Del Modelo{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
