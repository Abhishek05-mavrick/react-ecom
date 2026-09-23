import { useState } from 'react';
import ProductList from '../components/ProductList';

function Products({ products, onAdd, onDelete }) {
  const [search, setSearch] = useState('');
  const filtered = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()));
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">Catalog</p><h1>Products</h1></div><input className="search" placeholder="Search products" value={search} onChange={(event) => setSearch(event.target.value)} /></div><ProductList products={filtered} onAddToCart={onAdd} onDelete={onDelete} /></section>;
}

export default Products;
