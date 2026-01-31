import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";



import { fetchProducts, filterProducts } from "./services/api";

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
  const [ error, setError ] = useState(null);


  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      const data = await fetchProducts();

      if (data.length === 0) {
        setError("Could not load products. Please check if the server is running.");
      } else {
        setProducts(data);
        setError(null);
      }
      setLoading(false);
    };

    loadInitialData();
  }, []);


  const handleFilter = async (filterCriteria) => {
    setLoading(true);
    const filteredData = await filterProducts(filterCriteria);
    setProducts(filteredData);
    setLoading(false);
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
          {error && <div className="error-banner">{error}</div>}

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