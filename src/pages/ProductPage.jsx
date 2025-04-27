import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import plants from '../data/plants';

export default function ProductPage() {
  const { addToCart, cartItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [disabledButtons, setDisabledButtons] = useState([]);

  const categories = ['All', ...new Set(plants.map((plant) => plant.category))];

  const filteredPlants =
    selectedCategory === 'All'
      ? plants
      : plants.filter((plant) => plant.category === selectedCategory);

  useEffect(() => {
    const idsInCart = cartItems.map((item) => item.id);
    setDisabledButtons(idsInCart);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredPlants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-img" />
            <h2 className="product-name">{plant.name}</h2>
            <p>${plant.price}</p>
            <button
              onClick={() => addToCart(plant)}
              disabled={disabledButtons.includes(plant.id)}
              className={`button add-to-cart ${
                disabledButtons.includes(plant.id) ? 'disabled' : ''
              }`}
            >
              {disabledButtons.includes(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
