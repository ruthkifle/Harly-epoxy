export default function ProductCard({ name, img, price }) {
  return (
    <div className="product-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price} Birr</p>
      <button className="add-btn">Add to Cart</button>
    </div>
  );
}
