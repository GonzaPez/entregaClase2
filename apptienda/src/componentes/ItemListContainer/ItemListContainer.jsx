import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Spinner from "../UI/Spinner/Spinner";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = ({ addCarrito }) => {
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
