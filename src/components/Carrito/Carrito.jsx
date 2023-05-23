import "../Carrito/carrito.css"
import {RiShoppingCart2Fill} from "react-icons/ri"
import { CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useContext } from "react"



const Carrito = ()=>{
    const { totalQuantity } = useContext(CartContext);

    return (
      <div>
        <Link to="/cart" className="cart-widget">
          <RiShoppingCart2Fill className="carrito" />
          <span className="number">{totalQuantity()}</span> {/* Utiliza getItemQuantity() para obtener la cantidad actualizada */}
        </Link>
      </div>
    );
  };

export default Carrito