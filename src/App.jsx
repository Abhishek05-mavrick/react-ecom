import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DebugPanel from './components/DebugPanel';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { getProducts, saveOrder } from './utils/api';

function App() {
  const [page, setPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('');
  const [logs, setLogs] = useState(['App started']);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    getProducts().then((data) => { setProducts(data); setLoadTime(Math.round(performance.now() - startedAt)); setLogs((old) => [...old, 'Products loaded']); });
  }, []);

  function log(message) { setLogs((old) => [...old, message]); }
  function addToCart(product) {
    setCart((old) => { const found = old.find((item) => item.id === product.id); if (found) return old.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item); return [...old, { ...product, quantity: 1 }]; });
    log(`${product.name} added to cart`);
  }
  function changeQuantity(id, quantity) { if (quantity > 0) setCart((old) => old.map((item) => item.id === id ? { ...item, quantity } : item)); }
  function removeFromCart(id) { setCart((old) => old.filter((item) => item.id !== id)); log('Cart item removed'); }
  function deleteProduct(id) { setProducts((old) => old.filter((product) => product.id !== id)); log('Product deleted'); }
  function submitOrder(order) { saveOrder({ ...order, items: cart }).then(() => { setCart([]); log('Order submitted'); }); }
  function showCart() { setPage('cart'); }

  let content = <Home products={products} cartCount={cart.reduce((total, item) => total + item.quantity, 0)} user={user} />;
  if (page === 'products') content = <Products products={products} onAdd={addToCart} onDelete={deleteProduct} />;
  if (page === 'cart') content = <Cart cart={cart} onChange={changeQuantity} onRemove={removeFromCart} onCheckout={() => setPage('checkout')} />;
  if (page === 'checkout') content = <Checkout cart={cart} onSubmit={submitOrder} />;

  return <ErrorBoundary><Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} onCartClick={showCart} /><div className="app-layout"><Navigation currentPage={page} onNavigate={setPage} /><main>{content}</main></div><DebugPanel logs={logs} loadTime={loadTime} /></ErrorBoundary>;
}

export default App;
