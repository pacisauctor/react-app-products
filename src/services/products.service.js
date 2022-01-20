import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

const getProducts = () => {
  return axios.get(API_URL + "products", { headers: authHeader() });
};


export {getProducts};