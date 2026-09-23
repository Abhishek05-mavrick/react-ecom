import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../utils/mockData';

function ProductList({ products, onAddToCart, onDelete }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const filteredProducts = selectedCategory === 'All' ? products : products.filter((product) => product.category === selectedCategory);
  const sortedProducts = [...filteredProducts].sort((firstProduct, secondProduct) => {
    if (sortBy === 'price-low') return firstProduct.price - secondProduct.price;
    if (sortBy === 'price-high') return secondProduct.price - firstProduct.price;
    if (sortBy === 'rating') return secondProduct.rating - firstProduct.rating;
    return firstProduct.name.localeCompare(secondProduct.name);
  });

  return (
    <div className="product-list-container">
      <div className="product-controls">
        <label>Category:
          <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} className="control-select">
            {CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </label>
        <label>Sort by:
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="control-select">
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </label>
      </div>
      <p className="products-info">Showing {sortedProducts.length} products</p>
      {sortedProducts.length === 0 ? <div className="empty-state"><p>No products found in this category.</p></div> : (
        <div className="products-grid">
          {sortedProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddToCart} onDelete={onDelete} />)}
        </div>
      )}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onDelete: PropTypes.func
};

export default ProductList;
