import { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { formatCurrency, getCartTotal } from '../utils/helpers';

function Checkout({ cart, onSubmit }) {
  const [complete, setComplete] = useState(false);
  function submit(form) { onSubmit(form); setComplete(true); }
  if (complete) return <section className="page-section"><div className="success-box"><h1>Order placed</h1><p>Thanks, your demo order has been submitted.</p></div></section>;
  return <section className="page-section"><p className="eyebrow">Secure demo checkout</p><h1>Checkout</h1><div className="checkout-layout"><CheckoutForm onSubmit={submit} /><aside className="summary"><h2>Total</h2><strong>{formatCurrency(getCartTotal(cart))}</strong></aside></div></section>;
}

export default Checkout;
