import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [ isCartOpen, setIsCartOpen ] = useState(false);

  return (
    <CartProvider>
      <Router>
  
        <Navbar onCartClick={() => setIsCartOpen(true)} />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <main className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;