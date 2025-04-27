import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/products" className="header-link">
        Paradise Nursery
      </Link>
      <Link to="/cart" className="cart-icon">
        <FaShoppingCart size={24} />
        <span className="cart-count">{totalQuantity}</span>
      </Link>
    </header>
  );
}
