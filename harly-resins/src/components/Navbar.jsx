import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">HARLY</div>

            <button
                className="menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <nav className={`navs ${isMenuOpen ? "show" : ""}`}>
                <Link to="/" onClick={closeMenu}>
                    Home
                </Link>

                <Link to="/catalog" onClick={closeMenu}>
                    Products
                </Link>

                <Link to="/about" onClick={closeMenu}>
                    About
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
