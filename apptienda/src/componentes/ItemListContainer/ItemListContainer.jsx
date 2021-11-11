import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "../UI/Spinner/Spinner";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = ({ addCarrito }) => {
  //*sirve para ocultar o mostrar el spinner
  const [loading, setLoading] = useState(false);
  //*sirve para mapear los elementos que luego levanto en card
  const [items, setItems] = useState(null);
  //detalle de los elementos
 
  //es para llamar a los objetos de firebase

  useEffect(() => {
    const db = getFirestore();
    db.collection("Autos")
      .get()
      .then((resp) =>
        setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
      );
  }, []);

  
  return (
    <div className="container d-fluid-center col-12">
      {loading && <Spinner />}
      {items &&
        items.map((producto) => {
          return <Item prod={producto} addCarrito={addCarrito} />;
        })}
    </div>
  );
};

export default ItemListContainer;
