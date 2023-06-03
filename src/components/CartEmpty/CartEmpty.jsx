import { Link } from "react-router-dom";
import "../CartEmpty/cartempty.css";
import { TiArrowLeft } from "react-icons/ti";
import {BsEmojiFrownFill} from "react-icons/bs"

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <h2>Tu carrito está vacío <BsEmojiFrownFill/></h2>
      <span>Comenzá a llenarlo con nuestro productos.</span>
      <Link className="vacio" to={"/"}>
        <p>
          <TiArrowLeft className="arrowLeft" /> Ir de compras
        </p>
      </Link>
    </div>
  );
};

export default CartEmpty;
