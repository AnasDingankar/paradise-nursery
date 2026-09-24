import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  // Air Purifying Plants - 6
  { id: 1, name: "Snake Plant", price: 15, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 2, name: "Spider Plant", price: 12, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1614594575810-13e4c7f3f82e?w=400" },
  { id: 3, name: "Peace Lily", price: 18, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
  { id: 4, name: "Aloe Vera", price: 10, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400" },
  { id: 5, name: "Rubber Plant", price: 20, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1614594575810-13e4c7f3f82e?w=400" },
  { id: 6, name: "Boston Fern", price: 14, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },

  // Aromatic Plants - 6
  { id: 7, name: "Lavender", price: 16, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 8, name: "Rosemary", price: 11, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },
  { id: 9, name: "Mint", price: 8, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400" },
  { id: 10, name: "Basil", price: 9, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=400" },
  { id: 11, name: "Jasmine", price: 17, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 12, name: "Lemon Balm", price: 13, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400" },

  // Low Maintenance Plants - 6
  { id: 13, name: "ZZ Plant", price: 22, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
  { id: 14, name: "Pothos", price: 13, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
  { id: 15, name: "Jade Plant", price: 14, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4?w=400" },
  { id: 16, name: "Cactus", price: 10, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400" },
  { id: 17, name: "Monstera", price: 25, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1614594575810-13e4c7f3f82e?w=400" },
  { id: 18, name: "Succulent", price: 9, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedPlants, setAddedPlants] = useState([]);

  const categories = [
    "Air Purifying Plants",
    "Aromatic Plants",
    "Low Maintenance Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedPlants([...addedPlants, plant.id]);
  };

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Plants</a>
          <a href="/cart">
            Cart 🛒 <span>{totalCartItems}</span>
          </a>
        </div>
      </nav>

      <main>
        <h1>Our Houseplants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="plant-list">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      width="200"
                      height="200"
                    />

                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedPlants.includes(plant.id)}
                    >
                      {addedPlants.includes(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
