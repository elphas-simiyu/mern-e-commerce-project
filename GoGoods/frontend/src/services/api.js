 
import axios from "axios";

const API_URL = "https://your-api-url.com/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (userData) => {
  return await api.post("/auth/register", userData);
};

export const loginUser = async (credentials) => {
  return await api.post("/auth/login", credentials);
};

export const fetchProducts = async () => {
  return await api.get("/products");
};

export const fetchProductById = async (id) => {
  return await api.get(`/products/${id}`);
};

export const placeOrder = async (orderData) => {
  return await api.post("/orders", orderData);
};

export const processMpesaPayment = async (paymentData) => {
  return await api.post("/mpesa/pay", paymentData);
};
