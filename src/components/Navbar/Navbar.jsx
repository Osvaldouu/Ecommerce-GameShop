import Carrito from "../Carrito/Carrito"
import "../Navbar/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar-container">
           <h3 className="nav-title">GameShop</h3>
           <div className="button-nav">
               <a>PlayStation</a>
                <a>Xbox</a>
           </div>
            <Carrito />
        </nav>
    )
}

export default Navbar