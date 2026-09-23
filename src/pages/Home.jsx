function Home({ products, cartCount, user }) {
  const lowStock = products.filter((product) => !product.inStock).length;
  return <section className="page-section">
    <p className="eyebrow">Store overview</p><h1>Dashboard</h1>
    <div className="stats"><div><span>Products</span><strong>{products.length}</strong></div><div><span>Cart items</span><strong>{cartCount}</strong></div><div><span>Low stock</span><strong>{lowStock}</strong></div></div>
    <div className="welcome"><h2>{user ? `Welcome back, ${user}` : 'Welcome to your store'}</h2><p>Manage products, review your cart, and test the checkout flow from one simple dashboard.</p></div>
  </section>;
}

export default Home;
