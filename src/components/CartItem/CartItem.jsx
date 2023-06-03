import "../CartItem/cartitem.css";
import { AiFillDelete } from "react-icons/ai";
import { UseCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { id, image, name, price, quantity } = item;

  const { removeItem } = UseCart();

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} width={100} className="image-cart" />
      </div>
      <div className="cart-item-info">
        <div className="cart-dat">
          <h4>{name}</h4>
        </div>
        <div className="cart-dat">
          <p>${price}</p>
        </div>
        <div className="cart-dat">
          <h3>Cantidad:</h3>
          <p>{quantity}</p>
        </div>
        <div className="cart-dat">
          <button onClick={() => removeItem(id)}>
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
