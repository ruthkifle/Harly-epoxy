import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/variables.css';
import './styles/global.css';

import Header from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

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
  );
}

export default App;

