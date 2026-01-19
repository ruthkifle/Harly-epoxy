import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.alt} />

      <div className="description">
        <h3>{product.code}</h3>
        <p>{product.description}</p>
        {product.price && <h4>{product.price}</h4>}
      </div>
    </div>
  );
}
