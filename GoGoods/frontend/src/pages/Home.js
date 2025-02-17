import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to GoGoods</h1>
      <p className="text-gray-600 mb-6">Your one-stop shop for the best products!</p>
      <Link 
        to="/products" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;

