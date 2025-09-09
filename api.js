import axios from "axios";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchProduct = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
