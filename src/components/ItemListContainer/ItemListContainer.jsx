import { useEffect, useState } from "react";
import "../ItemListContainer/itemlistcontainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";
import Notice from "../notice/Notice";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

 
  useEffect(() => {
    if (idCategory) {
      getProducts().then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategory === idCategory
        );

        const cardProductos = <ItemList productsList={productsList} />;
        setProductos(cardProductos);
      });
    } else {
      getProducts().then((productsList) => {
        const cardProductos = <ItemList productsList={productsList} />;
        setProductos(cardProductos);
      });
    }
  }, [idCategory]);

  return (
    <>
      <div className="container-list">
        {loading ? <h1>loading...</h1> : (productos)}
        <Notice />
      </div>
    </>
  );
};
export default ItemListContainer;
