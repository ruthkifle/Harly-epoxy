import React, { useState, useEffect } from "react";
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
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  // 1. Initial Fetch of all products from MongoDB
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 2. Filter Function to be passed to Catalog
  const handleFilter = async (filterCriteria) => {
    try {
      const response = await fetch("http://localhost:4000/api/products/filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filterCriteria)
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Filter error:", error);
    }
  };

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
            <Route
              path="/catalog"
              element={
                <Catalog
                  products={products}
                  onFilter={handleFilter}
                  loading={loading}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;