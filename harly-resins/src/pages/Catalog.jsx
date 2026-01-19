import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products"; // your static product list for now

export default function Catalog() {
  const [ selectedCategory, setSelectedCategory ] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="catalog-page">
      <h1>Our Products</h1>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
