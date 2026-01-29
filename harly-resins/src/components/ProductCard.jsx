import React from 'react';
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  if (!product) return null;

  // Connect to the cart "brain"
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name || "Resin Product"}
        loading="lazy"
      />

      <div className="description">
        {/* Product Code */}
        <h4>Product Code: {product.code}</h4>

        {/* The description text */}
        <p>{product.description}</p>

        {/* Price and Add to Cart Action */}
        <div className="product-card-footer">
          {product.price && <h4 className="product-price">{product.price}</h4>}

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}