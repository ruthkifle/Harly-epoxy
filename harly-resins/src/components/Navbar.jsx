import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/global.css";

const Navbar = ({ onCartClick }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const { cart } = useCart();

    // Derived state: calculate total items in the cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header fadeIn">
            <div className="logo">HARLY</div>

            <nav className={`navs ${isMenuOpen ? "show" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/catalog" onClick={handleLinkClick}>Products</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </nav>

            <div className="nav-actions">
                <button
                    className="cart-icon-wrapper"
                    onClick={onCartClick}
                    aria-label="Open Cart"
                >
                    <span role="img" aria-label="cart">🛒</span>
                    {totalItems > 0 && (
                        <span className="cart-badge">{totalItems}</span>
                    )}
                </button>

                <button
                    className="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>
        </header>
    );
};

export default Navbar;