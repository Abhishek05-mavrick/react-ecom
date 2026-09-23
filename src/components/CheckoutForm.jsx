import { useState } from 'react';

function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', address: '', card: '' });

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    onSubmit(form);
  }

  return <form className="checkout-form" onSubmit={submit}>
    <label>Name<input name="name" value={form.name} onChange={update} required /></label>
    <label>Address<input name="address" value={form.address} onChange={update} required /></label>
    <label>Card number<input name="card" value={form.card} onChange={update} minLength="12" required /></label>
    <button type="submit">Place order</button>
  </form>;
}

export default CheckoutForm;
