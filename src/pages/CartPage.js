import React from "react";

const CartPage = ({ cart, updateCart }) => {
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const isCartEmpty = cart.length === 0;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {/* Display a message when the cart is empty */}
      {isCartEmpty ? (
        <p className="empty-cart-message">No items in the cart. Add some products to your cart!</p>
      ) : (
        <div className="cart-container">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <div className="cart-item-details">
                <h3 className="cart-item-title">{product.title}</h3>
                <p className="cart-item-price">Price: ₹{product.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                  <input
                    id={`quantity-${product.id}`}
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      updateCart(product.id, parseInt(e.target.value) || 1)
                    }
                    min="1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display total price if cart is not empty */}
      {!isCartEmpty && (
        <div className="cart-summary">
          <h2>Total Price:</h2>
          <p className="total-price">₹{totalPrice.toFixed(2)}</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
