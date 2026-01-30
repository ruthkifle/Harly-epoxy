import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import "../styles/global.css";

export default function Catalog({ products, onFilter, loading }) {
  // 1. STATE MANAGEMENT
  const [ selectedCategory, setSelectedCategory ] = useState("all");
  const [ showFilter, setShowFilter ] = useState(false);

  // These are the active attributes sent to the database
  const [ filters, setFilters ] = useState({
    color: [],
    flake: [],
    glitter: [],
    chain: [],
    tassle: [],
    handle: []
  });

  // 2. FILTER HANDLER (The Bridge to your Backend)
  const applyFiltersToBackend = (updatedFilters, category = selectedCategory) => {
    const criteria = {
      category: category,
      // We send the first item in the array or "All" if empty
      color: updatedFilters.color[ 0 ] || "All",
      flake: updatedFilters.flake[ 0 ] || "All",
      glitter: updatedFilters.glitter[ 0 ] || "All",
      chain: updatedFilters.chain[ 0 ] || "All",
      tassle: updatedFilters.tassle[ 0 ] || "All",
      handle: updatedFilters.handle[ 0 ] || "All"
    };

    console.log("🚀 Syncing with Database:", criteria);
    onFilter(criteria);
  };

  // 3. CATEGORY CHANGE HANDLER
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);

    // Reset specific attributes when switching categories (e.g., don't search for a keychain chain in kitchenware)
    const resetAttributes = {
      ...filters,
      chain: [],
      tassle: [],
      handle: []
    };
    setFilters(resetAttributes);

    applyFiltersToBackend(resetAttributes, cat);
  };

  return (
    <div className="catalog-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Product Catalog</h1>
        <p>A little charm for your daily vibe</p>
      </section>

      {/* INTRO TEXT */}
      <div className="catalog-intro">
        <h1>Our Resin Collection</h1>
        <p>
          Explore our curated collection of handmade resin pieces, crafted with care and
          designed to match every style. Each item is made individually with high-quality
          materials and attention to detail.
        </p>
      </div>

      {/* TOP NAVIGATION (Categories) */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* FILTER BUTTON (Opens the Side Panel) */}
      <div className="filter-controls">
        <button className="filter-toggle" onClick={() => setShowFilter(true)}>
          <span className="filter-icon">⚙</span> FILTER {selectedCategory !== "all" ? selectedCategory.toUpperCase() : ""}
        </button>
      </div>

      {/* THE SLIDE-OUT PANEL (Your FilterPanel.jsx file) */}
      <FilterPanel
        show={showFilter}
        onClose={() => setShowFilter(false)}
        filters={filters}
        setFilters={setFilters}
        selectedCategory={selectedCategory}
        onApplyFilters={(newFilters) => applyFiltersToBackend(newFilters)}
      />

      {/* THE PRODUCT GRID */}
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Finding your items...</p>
        </div>
      ) : (
        <div className="product-grid">
          {products && products.length > 0 ? (
            products.map(item => (
              <ProductCard key={item._id || item.id} product={item} />
            ))
          ) : (
            <div className="no-results">
              <h3>No items found.</h3>
              <p>We couldn't find anything matching those specific filters. Try clearing some options!</p>
              <button
                className="reset-btn"
                onClick={() => handleCategoryChange("all")}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}