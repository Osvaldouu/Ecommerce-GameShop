import Carrito from "../Carrito/Carrito"
import logo from "../../assets/bxs-joystick.svg"
import "../Navbar/navbar.css"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar-container">
           <Link to="/" className="logo-container">
               <img src={logo} className="nav-logo"/>
               <h3 className="title-logo">GameShop</h3>
           </Link>
           <div className="button-nav">
            <NavLink to={`/category/playStation`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>PlayStation</NavLink>
            <NavLink to={`/category/xbox`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Xbox</NavLink>
            <NavLink to={`/category/nintendo`} className={({isActive})=> isActive ? "ActiveOption" : "Option"}>Nintendo</NavLink>
           </div>
            <Carrito />
        </nav>
    )
}

export default Navbar