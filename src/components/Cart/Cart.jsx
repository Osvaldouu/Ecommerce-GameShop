import "../Cart/cart.css";
import { UseCart } from "../../context/CartContext";
// import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getItemQuantity, getTotal } = UseCart();
  if (getItemQuantity() === 0) {
    return (
      <div>
        <CartEmpty />
      </div>
    );
  } else {
    return (
      <div>
        {cart.map((p, index) => (
          <CartItem key={index} item={p} />
        ))}
        ;
        <div className="cart-container">
          <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
          </div>
          <button onClick={() => clearCart()} className="button-clear">
            Limpiar Carrito
          </button>
        </div>
        <Link className="checkout" to="/checkout">Checkout</Link>
      </div>
    );
  }
};

export default Cart;
