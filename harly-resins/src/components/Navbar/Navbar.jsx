import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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

                <div className="dropdown">
                    <button
                        className="dropdown-btn"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Products ▾
                    </button>

                    <div className={`dropcontent ${isDropdownOpen ? "show" : ""}`}>
                        <Link to="/catalog#keychain" onClick={closeMenu}>
                            Keychains
                        </Link>
                        <Link to="/catalog#bookmark" onClick={closeMenu}>
                            Bookmarks
                        </Link>
                        <Link to="/catalog#phonestand" onClick={closeMenu}>
                            Phonestands
                        </Link>
                        <Link to="/catalog#kitchenware" onClick={closeMenu}>
                            Kitchenware
                        </Link>
                        <Link to="/catalog#other" onClick={closeMenu}>
                            Others
                        </Link>
                    </div>
                </div>

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
