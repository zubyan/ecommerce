import React from 'react';
import { useCart } from '../store/Cart-Context';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const incrementQuantity = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const decrementQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={() => decrementQuantity(item.id, item.quantity)}
                className="bg-red-500 text-white px-2 py-1 rounded-lg"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                readOnly
                className="mx-2 w-16 text-center border rounded-lg"
              />
              <button
                onClick={() => incrementQuantity(item.id, item.quantity)}
                className="bg-green-500 text-white px-2 py-1 rounded-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
