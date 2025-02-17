import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-blue-600 font-semibold">${product.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

