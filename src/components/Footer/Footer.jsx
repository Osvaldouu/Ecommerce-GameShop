import { Link } from "react-router-dom";
import {RiGameFill} from "react-icons/ri"
import {FiInstagram} from "react-icons/fi"
import {BsFacebook, BsTwitter} from "react-icons/bs"
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className=" footer-contenidos">
        <div className="footer-nosotros">
          <RiGameFill className="footer-logo"/>
          <h1 className="footer-title">GameShop</h1> 
        </div>
        <ul className="footer-listas">
          <li>
            <h3 className="footer-subtitle">Catalogos</h3>
          </li>
          <li>
            <Link to={`/category/playstation`} className="footer-link">PlayStation</Link>
          </li>
          <li>
            <Link to={`/category/xbox`} className="footer-link">Xbox</Link>
          </li>
          <li>
            <Link to={`/category/nintendo`} className="footer-link">Nintendo</Link>
          </li>
        </ul>
        <ul className="footer-listas">
          <li>
            <h3 className="footer-subtitle">Contacto</h3>
          </li>
          <li>
            <Link className="footer-link"></Link>
          </li>
          <li>
            <Link className="footer-link"></Link>
          </li>
          <li>
            <Link className="footer-link"></Link>
          </li>
        </ul>
        <u className="footer-listas">
                <h3 className="footer-subtitle">Nuestras Redes</h3>
                <div className="redes-sociales">
                    <a href="https://www.instagram.com/carriizoosvaldo/" target="blank" className="footer-link-social insta"><FiInstagram/></a>
                    <a href="https://www.facebook.com/oviitoOh" target="blank" className="footer-link-social fb"><BsFacebook /></a>
                    <a href="https://twitter.com/carrizoosvaldou" className="footer-link-social tw"><BsTwitter/></a>
                </div>
           </u>
      </div>
      <div className="footer-copyrigth">
        <a className="link-yo" href="https://www.linkedin.com/in/osvaldo-carrizo-94842023b/ " target="blank" >
          Proyecto by Osvaldo Carrizo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
