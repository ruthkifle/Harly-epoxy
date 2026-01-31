import React, { useState } from "react";
import Hero from "../components/Hero"; // Use our high-quality Hero
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import FilterPanel from "../components/FilterPanel";
import "../styles/global.css";

export default function Catalog({ products, onFilter, loading }) {
  const [ selectedCategory, setSelectedCategory ] = useState("all");
  const [ showFilter, setShowFilter ] = useState(false);

  const [ filters, setFilters ] = useState({
    color: [],
    flake: [],
    glitter: [],
    chain: [],
    tassle: [],
    handle: []
  });

  // 2. FILTER HANDLER (Syncs UI state to Parent/Backend)
  const applyFiltersToBackend = (updatedFilters, category = selectedCategory) => {
    const criteria = {
      category: category,
      color: updatedFilters.color[ 0 ] || "All",
      flake: updatedFilters.flake[ 0 ] || "All",
      glitter: updatedFilters.glitter[ 0 ] || "All",
      chain: updatedFilters.chain[ 0 ] || "All",
      tassle: updatedFilters.tassle[ 0 ] || "All",
      handle: updatedFilters.handle[ 0 ] || "All"
    };
    onFilter(criteria);
  };

  // 3. CATEGORY CHANGE HANDLER
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);

    // Reset category-specific logic
    const resetAttributes = {
      color: [], flake: [], glitter: [],
      chain: [], tassle: [], handle: []
    };
    setFilters(resetAttributes);

    // Immediate fetch for new category
    onFilter({
      category: cat,
      color: "All", flake: "All", glitter: "All",
      chain: "All", tassle: "All", handle: "All"
    });
  };

  return (
    <div className="catalog-page-container">
      {/* 1. REUSABLE HERO */}
      <Hero
        title="Our Collection"
        subtitle="Handcrafted pieces designed for your aesthetic."
        showBtn={false}
      />

      <div className="container">
        {/* 2. INTRO DESCRIPTION */}
        <section className="catalog-intro text-center mt-2">
          <p className="description-text">
            Explore our curated selection of handmade resin pieces.
            Each item is made individually with high-quality materials and gold-leaf attention to detail.
          </p>
        </section>

        {/* 3. CATEGORY NAVIGATION */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* 4. FILTER TOGGLE */}
        <div className="filter-controls">
          <button className="filter-toggle-btn" onClick={() => setShowFilter(true)}>
            <i className="filter-icon">⚙️</i>
            FILTER {selectedCategory !== "all" ? `: ${selectedCategory.toUpperCase()}` : ""}
          </button>
        </div>

        {/* 5. SLIDE-OUT PANEL */}
        <FilterPanel
          show={showFilter}
          onClose={() => setShowFilter(false)}
          filters={filters}
          setFilters={setFilters}
          selectedCategory={selectedCategory}
          onApplyFilters={(newFilters) => applyFiltersToBackend(newFilters)}
        />

        {/* 6. DYNAMIC GRID */}
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Polishing the resin...</p>
          </div>
        ) : (
          <div className="product-grid fade-in">
            {products && products.length > 0 ? (
              products.map(item => (
                <ProductCard key={item._id || item.id} product={item} />
              ))
            ) : (
              <div className="no-results-box">
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search for something else.</p>
                <button
                  className="view-all-btn"
                  onClick={() => handleCategoryChange("all")}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}