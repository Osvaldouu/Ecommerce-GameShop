import "../Carrito/carrito.css"
import {RiShoppingCart2Fill} from "react-icons/ri"


const Carrito = ()=>{
    return (
        <div>
           <RiShoppingCart2Fill className="carrito" />
           <span className="number">0</span>
        </div>
    )
}

export default Carrito