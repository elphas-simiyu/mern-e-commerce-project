 
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center text-gray-600">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-xl mx-auto border rounded-lg p-4 shadow-md">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <span className="block text-blue-600 font-semibold mt-4">${product.price}</span>
        <button 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
