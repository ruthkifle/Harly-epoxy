import React from "react";
import "../styles/global.css";

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: "all", label: "All" },
    { id: "keychain", label: "Keychains" },
    { id: "bookmark", label: "Bookmarks" },
    { id: "phonestand", label: "Phone Stands" },
    { id: "kitchenware", label: "Kitchenware" },
    { id: "others", label: "Others" },
  ];

  return (
    <nav className="category-nav-container fadeIn">
      <div className="category-scroll-wrapper">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav>
  );
}