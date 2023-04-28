import Carrito from "../Carrito/Carrito"
import logo from "../../assets/bxs-joystick.svg"
import "../Navbar/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar-container">
           <div className="logo-container">
               <img src={logo} className="nav-logo"/>
               <h3 className="title-logo">GameShop</h3>
           </div>
           <div className="button-nav">
               <a>PlayStation</a>
                <a>Xbox</a>
                <a>Nintendo</a>
           </div>
            <Carrito className="carrito" />
        </nav>
    )
}

export default Navbar