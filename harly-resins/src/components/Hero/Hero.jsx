import { useState } from "react";
import "./Hero.css";

export default function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false);

  return (
    <header className="header">
      <div className="logo">HARLY</div>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={`navs ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <div className="dropdown">
          <span className="button">Products</span>
          <div className="dropcontent">
            <a href="/catalog#keychain">Keychains</a>
            <a href="/catalog#bookmark">Bookmarks</a>
            <a href="/catalog#phonestand">Phonestands</a>
            <a href="/catalog#kitchenware">Kitchenware</a>
            <a href="/catalog#other">Others</a>
          </div>
        </div>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
