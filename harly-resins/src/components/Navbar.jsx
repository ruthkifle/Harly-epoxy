import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/global.css";

const Navbar = ({ onCartClick }) => { // 1. Receive the prop here
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">HARLY</div>

            <div className="nav-actions">
                {/* 2. Change Link to a button that triggers the drawer */}
                <button className="cart-icon-wrapper" onClick={onCartClick}>
                    🛒
                    {totalItems > 0 && (
                        <span className="cart-badge">{totalItems}</span>
                    )}
                </button>

                <button
                    className="menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            <nav className={`navs ${isMenuOpen ? "show" : ""}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/catalog" onClick={closeMenu}>Products</Link>
                <Link to="/about" onClick={closeMenu}>About</Link>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;