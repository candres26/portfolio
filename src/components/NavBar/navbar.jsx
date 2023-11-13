import "./navbar.css";
import { Link } from "react-scroll";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" className="logo"/>
            <div className="menuListItems">
                <Link className="menuListItem">Home</Link>
                <Link className="menuListItem">Acerca de</Link>
                <Link className="menuListItem">Portfolio</Link>
                <Link className="menuListItem">Clientes</Link>
            </div>
            <button className="menuBtn">
                <img src="" className="imgMenuBtn"/>
                Contactame
            </button>
        </nav>
    )
}
