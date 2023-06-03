import { useEffect, useState } from "react";
import "../ItemListContainer/itemlistcontainer.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/firebase";
import Notice from "../notice/Notice";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";

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

  const [productsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProd = currentPage * productsPerPage;
  const indexOfFirstProd = indexOfLastProd - productsPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const currentProds = productos.slice(indexOfFirstProd, indexOfLastProd);

  useEffect(() => {
    if (idCategory) {
      getProducts().then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategory === idCategory
        );
        setProductos(productsList);
      });
    } else {
      getProducts().then((productsList) => {
        setProductos(productsList);
      });
    }
  }, [idCategory]);

  return (
    <>
      <div className="container-list">
        {loading ? <Loading/> : (
          <>
          <ItemList currentProds={currentProds}/>
          <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productos.length}
          currentPage={currentPage}
          paginate={paginate}
        />
          </>
        ) }

        <Notice />
      </div>
    </>
  );
};
export default ItemListContainer;