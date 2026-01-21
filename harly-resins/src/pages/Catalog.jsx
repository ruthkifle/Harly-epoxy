import React, { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/global.css";

export default function Catalog() {
  const [ selectedCategory, setSelectedCategory ] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
