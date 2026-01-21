import React from 'react';



export default function ProductCard({ product }) {

  if (!product) return null;

  return (
    <div className="product-card">
      {/* The image path will now work as long as it starts with "/" 
         and the images folder is in your "public" folder.
      */}
      <img
        src={product.image}
        alt={product.name || "Resin Product"}
        loading="lazy"
      />

      <div className="description">
        {/* Product Code (e.g., HRK#01) */}
        <h4>Product Code: {product.code}</h4>

        {/* The description text */}
        <p>{product.description}</p>

        {/* Only show the price if it exists for this specific product (useful for the Others section) */}
        {product.price && <h4 className="product-price">{product.price}</h4>}
      </div>
    </div>
  );
}