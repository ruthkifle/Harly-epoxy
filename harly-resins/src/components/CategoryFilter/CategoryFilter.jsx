import React from "react";
import "./CategoryFilter.css";

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: "all", label: "All" },
    { id: "keychain", label: "Keychains" },
    { id: "bookmark", label: "Bookmarks" },
    { id: "phonestand", label: "Phone Stands" },
    { id: "kitchenware", label: "Kitchenware" },
    { id: "other", label: "Others" }
  ];

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
          onClick={() => onCategoryChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

