import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo2.png";
import imgCont from "../../assets/conversacion.png";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} className="logo"/>
            <div className="menuListItems">
                <Link className="menuListItem">Home</Link>
                <Link className="menuListItem">Acerca de</Link>
                <Link className="menuListItem">Portfolio</Link>
                <Link className="menuListItem">Clientes</Link>
            </div>
            <button className="menuBtn">
                <img src={imgCont} className="imgMenuBtn"/>
                Contáctame
            </button>
        </nav>
    )
}
