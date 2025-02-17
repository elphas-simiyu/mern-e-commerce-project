import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

