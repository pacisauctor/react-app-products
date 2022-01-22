import axios from "axios";
import authHeader from "./auth-header";

const API = "http://localhost:8080/api/";

const getProducts = () =>
  axios.get(API + "products/", { headers: authHeader() });
const deleteProducts = (id) =>
  axios.delete(`${API}products/${id}`, {headers:authHeader()})

const updateProduct = (id, body) =>
  axios.put(`${API}products/${id}`, body, {headers:authHeader()});

const createProduct = (id, body) =>
  axios.post(`${API}products/`, body, {headers:authHeader()});

export { getProducts, deleteProducts, createProduct, updateProduct };
