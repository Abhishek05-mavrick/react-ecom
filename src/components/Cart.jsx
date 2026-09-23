import CartItem from './CartItem';
import { formatCurrency, getCartTotal } from '../utils/helpers';

function Cart({ cart, onChange, onRemove, onCheckout }) {
  return (
    <section className="page-section">
      <h1>Shopping cart</h1>
      {!cart.length ? <p className="empty-state">Your cart is empty.</p> : (
        <div className="cart-layout">
          <div>{cart.map((item) => <CartItem key={item.id} item={item} onChange={onChange} onRemove={onRemove} />)}</div>
          <aside className="summary"><h2>Order summary</h2><p>Total <strong>{formatCurrency(getCartTotal(cart))}</strong></p><button onClick={onCheckout}>Continue to checkout</button></aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
