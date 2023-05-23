import "../Cart/cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getItemQuantity, getTotal } = useContext(CartContext);

  if (getItemQuantity() === 0) {
    return (
      <div>
        <CartEmpty />
      </div>
    );
  } else {
    return (
        <div>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <h3>Total: ${getTotal()}</h3>
        <button onClick={() => clearCart()} className="button-clear">
          Limpiar Carrito
        </button>
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
};

export default Cart;
