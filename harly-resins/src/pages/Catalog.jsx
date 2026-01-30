import React, { useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import "../styles/global.css"

export default function Catalog({ products, onFilter, loading }) {
  // CATEGORY FILTER (All, Keychains, etc.)
  const [ selectedCategory, setSelectedCategory ] = useState("all");

  const [ productList, setProductList ] = useState([]);


  // ATTRIBUTE FILTERS
  const [ filters, setFilters ] = useState({
    color: [],
    flake: [],
    glitter: [],
    chain: [],
    tassle: [],
    handle: []
  });

  const handleClearFilters = () => {
    setFilters({
      color: [],
      flake: [],
      glitter: [],
      chain: [],
      tassle: [],
      handle: []
    });
  };

  // SLIDE PANEL (Open/Close)
  const [ showFilter, setShowFilter ] = useState(false);

  // FILTER SECTIONS INSIDE PANEL
  const [ openSection, setOpenSection ] = useState(null);

  function toggleSection(section) {
    setOpenSection(prev => (prev === section ? null : section));
  }

  // PRODUCT FILTERING LOGIC
  /*let filtered = selectedCategory === "all"
    ? productList
    : productList.filter(p => p.category === selectedCategory);

  Object.keys(filters).forEach(key => {
    if (filters[ key ].length > 0) {
      filtered = filtered.filter(p => filters[ key ].includes(p[ key ]));
    }
  });*/

  //const filteredProducts = filtered;

  function toggleFilter(key, value) {
    // 1. Update the local UI state (allowing only one selection at a time for simplicity)
    const newFilters = { ...filters, [ key ]: filters[ key ].includes(value) ? [] : [ value ] };
    setFilters(newFilters);

    // 2. Build the criteria object for the Backend
    const criteria = {
      category: selectedCategory,
      color: newFilters.color[ 0 ] || "All",
      flake: newFilters.flake[ 0 ] || "All",
      glitter: newFilters.glitter[ 0 ] || "All",
      chain: newFilters.chain[ 0 ] || "All",
      tassle: newFilters.tassle[ 0 ] || "All",
      handle: newFilters.handle[ 0 ] || "All"
    };

    // 3. THIS IS THE SANITY CHECK: 
    // Open your browser console (F12) to see this!
    console.log("🚀 Sending this to backend:", criteria);

    onFilter(criteria);
  }
  return (
    <div className="catalog-page">

      <section className="hero-section">
        <h1>Product Catalog</h1>
        <p>A little charm for your daily vibe</p>
      </section>

      <div className="catalog-intro">
        <h1>Our Resin Collection</h1>
        <p>
          Explore our curated collection of handmade resin pieces, crafted with care and
          designed to match every style. Each item is made individually with high-quality
          materials and attention to detail.
        </p>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          onFilter({ category: cat, color: filters.color[ 0 ] || "All" });
        }}
      />

      <button className="filter-toggle" onClick={() => setShowFilter(true)}>
        Filter
      </button>

      {/* SLIDE FILTER PANEL */}
      <div className={`filter-panel ${showFilter ? "open" : ""}`}>
        <div className="filter-header">
          <h2>Filter</h2>
          <button className="close-btn" onClick={() => setShowFilter(false)}>✕</button>
        </div>

        {/* --- ADDED FILTER BODY WRAPPER FOR SCROLLING --- */}
        <div className="filter-body">
          {/* COLOR SECTION */}
          <div className="filter-section">
            <div
              className="filter-title"
              onClick={() => toggleSection("color")}
            >
              Colour ▾
            </div>

            {openSection === "color" && (
              <div className="filter-options">
                {[ "Blue", "Pink", "Green", "Teal", "Black", "White", "Purple" ].map(c => (
                  <div
                    key={c}
                    className={`filter-option ${filters.color.includes(c) ? "active" : ""}`}
                    onClick={() => toggleFilter("color", c)}
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FLAKE SECTION */}
          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleSection("flake")}>
              Flake ▾
            </div>

            {openSection === "flake" && (
              <div className="filter-options">
                {[ "Golden", "Silver" ].map(f => (
                  <div
                    key={f}
                    className={`filter-option ${filters.flake.includes(f) ? "active" : ""}`}
                    onClick={() => toggleFilter("flake", f)}
                  >
                    {f}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GLITTER SECTION */}
          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleSection("glitter")}>
              Glitter ▾
            </div>

            {openSection === "glitter" && (
              <div className="filter-options">
                {[ "Blue", "Silver", "Rose Gold" ].map(g => (
                  <div
                    key={g}
                    className={`filter-option ${filters.glitter.includes(g) ? "active" : ""}`}
                    onClick={() => toggleFilter("glitter", g)}
                  >
                    {g}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CHAIN SECTION */}
          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleSection("chain")}>
              Chain ▾
            </div>

            {openSection === "chain" && (
              <div className="filter-options">
                {[ "Golden", "Silver" ].map(ch => (
                  <div
                    key={ch}
                    className={`filter-option ${filters.chain.includes(ch) ? "active" : ""}`}
                    onClick={() => toggleFilter("chain", ch)}
                  >
                    {ch}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TASSLE SECTION */}
          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleSection("tassle")}>
              Tassle ▾
            </div>

            {openSection === "tassle" && (
              <div className="filter-options">
                {[ "Golden", "Silver", "Red", "Pink", "Black", "Green", "Purple" ].map(t => (
                  <div
                    key={t}
                    className={`filter-option ${filters.tassle.includes(t) ? "active" : ""}`}
                    onClick={() => toggleFilter("tassle", t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* HANDLE SECTION */}
          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleSection("handle")}>
              Handle ▾
            </div>

            {openSection === "handle" && (
              <div className="filter-options">
                {[ "Golden", "Silver", "Epoxy" ].map(h => (
                  <div
                    key={h}
                    className={`filter-option ${filters.handle.includes(h) ? "active" : ""}`}
                    onClick={() => toggleFilter("handle", h)}
                  >
                    {h}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- ADDED CLEAR FILTERS BUTTON IN FOOTER --- */}
        <div className="filter-footer">
          <button className="clear-btn" onClick={handleClearFilters}>
            Clear All Filters
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}