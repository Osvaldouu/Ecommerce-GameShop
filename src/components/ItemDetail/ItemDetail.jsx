import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/itemdetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { id, logo, name, price, image, idCategory, stock, description } =
    producto;
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = { id, name, price };

    addItem(item, quantity);
  };

  return (
    <div className="container-detail">
      <div className="header-detail">
        <img src={image} alt={name} className="item-img" />
        <div className="det-container">
          <h2 className="item-name">{name}</h2>
          <p className="price">{price}</p>
          <div className="datos-detail">
            <p className="category">Stock: {stock}</p>
            <p>||</p>
            <p className="category">
              {" "}
              {logo} Categoria: {idCategory}{" "}
            </p>
          </div>
          <div className="detail-button">
            {quantityAdded > 0 ? (
              <Link to="/cart" className="bn633-hover bn25">
                Terminar Compra
              </Link>
            ) : (
              <ItemCount initialState={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="detail-product">Detalles del producto:</p>
        <h2 className="description">{description}</h2>
      </div>
    </div>
  );
};

export default ItemDetail;
