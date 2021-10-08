import axios from "axios";

// Backend URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Intercepting the request and adding Bearer to request headers.
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

// HTTP methods for authentication
export const signin = (formData) => API.post("/users/auth/signin", formData);
export const signup = (formData) => API.post("/users/auth/signup", formData);

// HTTP methods for product
export const getProducts = () => API.get("/product");
export const getProductDetails = (productId) =>
  API.get(`/product/${productId}`);

// HTTP methods for cart
export const addCartItem = (newItemToCart) => API.post("/cart", newItemToCart);
export const getUserCart = (userId) => API.get(`/cart/find/${userId}`);
export const removeFromCart = (cartId) => API.delete(`/cart/${cartId}`);
