import { formatCurrency } from '../utils/helpers';

function ProductCard({ product, onAdd, onDelete }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-card-body">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">{formatCurrency(product.price)}</p>
        <p className={!product.inStock ? 'low-stock' : ''}>{product.inStock ? 'In stock' : 'Out of stock'}</p>
        <div className="card-actions">
          <button onClick={() => onAdd(product)} disabled={!product.inStock}>Add to cart</button>
          <button className="delete-button" onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
