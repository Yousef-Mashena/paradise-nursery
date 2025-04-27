import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        <p className="cart-summary">Total Items: {totalItems}</p>
        <p className="cart-summary">Total Cost: ${totalCost.toFixed(2)}</p>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p>${item.price} each</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => decreaseQty(item.id)} className="button">
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="button">
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="cart-buttons">
          <button onClick={() => navigate('/products')} className="button">
            Continue Shopping
          </button>
          <button
            onClick={() => alert('Checkout will be Coming Soon.')}
            className="button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
