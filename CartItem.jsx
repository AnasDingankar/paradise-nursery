import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

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

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>Total Cart Amount: ${totalCartAmount.toFixed(2)}</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="150"
                  height="150"
                />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p>Unit Price: ${item.price.toFixed(2)}</p>

                  <p>Quantity: {item.quantity}</p>

                  <p>
                    Total Cost: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button onClick={() => decreaseQuantity(item)}>
                    -
                  </button>

                  <button onClick={() => increaseQuantity(item)}>
                    +
                  </button>

                  <button onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-actions">
          <a href="/products">
            <button>Continue Shopping</button>
          </a>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
