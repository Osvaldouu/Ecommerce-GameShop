import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((prod) => {
      setProducto(prod);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />;
    </div>
  );
};

export default ItemDetailContainer;
