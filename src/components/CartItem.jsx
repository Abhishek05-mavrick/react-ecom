import { formatCurrency } from '../utils/helpers';

function CartItem({ item, onChange, onRemove }) {
  return (
    <div className="cart-item">
      <div><strong>{item.name}</strong><span>{formatCurrency(item.price)} each</span></div>
      <input aria-label={`Quantity for ${item.name}`} type="number" min="1" value={item.quantity} onChange={(event) => onChange(item.id, Number(event.target.value))} />
      <strong>{formatCurrency(item.price * item.quantity)}</strong>
      <button className="delete-button" onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
