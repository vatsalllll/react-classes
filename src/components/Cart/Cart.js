import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const cartItems = Object.values(cart);

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <button onClick={() => decreaseQuantity(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
