import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "../UI/Spinner/Spinner";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = ({ categoria }) => {
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    db.collection("Autos")
      .get()
      .then((resp) =>
        setItems(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
      );
  }, []);

  const filtrado = categoria && items ? items.filter((i) => i.categoria === categoria) : items;

  return (
    <div className="container d-fluid-center col-12">
      {loading && <Spinner />}
      {items && 
        filtrado.map((producto) => {
          return <Item prod={producto} />;
        })}
    </div>
  );
};

export default ItemListContainer;
