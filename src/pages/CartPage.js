import React from "react";

const CartPage = ({ cart, updateCart }) => {
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              updateCart(product.id, parseInt(e.target.value) || 1)
            }
          />
        </div>
      ))}
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
