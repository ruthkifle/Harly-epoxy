import './ProductCard.css';

const ProductCard = ({ image, name, price, category }) => {
  return (
    <div className='product-card fade-in'>
      <div className='product-image-container'>
        <img src={image} alt={name} loading="lazy" />
        <div className='product-overlay'>
          <span>View Details</span>
        </div>
      </div>
      <div className='product-info'>
        <span className='product-category'>{category}</span>
        <h3>{name}</h3>
        <p className='product-price'>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;