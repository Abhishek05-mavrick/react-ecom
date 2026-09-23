import CartComponent from '../components/Cart';

function CartPage({ cart, onChange, onRemove, onCheckout }) {
  return <CartComponent cart={cart} onChange={onChange} onRemove={onRemove} onCheckout={onCheckout} />;
}

export default CartPage;
