import ProductList from '../components/ProductList';

function Products({ products, onAdd, onDelete }) {
    return (
        <section className="page-section">
            <div className="section-heading">
                <div>
                    <p className="eyebrow">Inventory</p>
                    <h1>Products</h1>
                </div>
            </div>
            <ProductList products={products} onAddToCart={onAdd} onDelete={onDelete} />
        </section>
    );
}

export default Products;