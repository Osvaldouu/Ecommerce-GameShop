import Carrito from "../Carrito/Carrito";
import { useState } from "react"
import {RiGameFill} from "react-icons/ri"
import "../Navbar/navbar.css";
import { GoMegaphone } from "react-icons/go";
import {GrClose} from "react-icons/gr"
import {FiMenu} from "react-icons/fi"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="header-navbar">
      <div className="anuncio">
        <GoMegaphone />
        <span className="anuncio-title">Nuevos ingresos</span>
        <GoMegaphone />
      </div>
      <nav className="navbar-container">
        <div className="menus">
          <i onClick={handleMenu}>
            {menuOpen ? (
              <GrClose className="close" />
            ) : (
              <FiMenu className="open" />
            )}
          </i>
        </div>
        <Link to="/" className="logo-container">
          <RiGameFill className="nav-logo"/>
          <h3 className="title-logo">GameShop</h3>
        </Link>
        <div className={`dat-container ${menuOpen ? "activeMenu" : ""}`}>
          <NavLink
            to={`/category/playstation`}
            className="tag"
          >
            PlayStation
          </NavLink>
          <NavLink
            to={`/category/xbox`}
            className="tag"
          >
            Xbox
          </NavLink>
          <NavLink
            to={`/category/nintendo`}
            className="tag"
          >
            Nintendo
          </NavLink>
        </div>
        <Carrito />
      </nav>
    </header>
  );
};

export default Navbar;
