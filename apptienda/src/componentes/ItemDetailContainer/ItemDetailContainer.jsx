import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../UI/Spinner/Spinner";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    db.collection("Autos")
      .doc(id)
      .get()
      .then((resp) => setItem({ id: resp.id, ...resp.data() }));
  }, []);
  return (
    <div>
      {loading && <Spinner />}
      {item && <ItemDetail autos={item} />}
    </div>
  );
};

export default ItemDetailContainer;
