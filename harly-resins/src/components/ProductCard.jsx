import React from 'react';
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

  if (!product) return null;

  const { addToCart } = useCart();

  return (
    <div className="product-card fadeIn">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name || "Harly Resin Product"}
          loading="lazy"
        />
      </div>

      <div className="product-info">
        <span className="product-category">Code: {product.code}</span>


        <h3 className="home-card-title">{product.category || "Resin Art"}</h3>

        <p className="home-card-desc">{product.description}</p>

        <div className="product-card-footer" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '15px'
        }}>
          <span className="product-price">
            {product.price ? `${product.price} ETB` : "Enquire for Price"}
          </span>

          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}