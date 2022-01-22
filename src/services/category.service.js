import axios from "axios";
import authHeader from "./auth-header";

const API = "http://localhost:8080/api/";

const getCategories = () =>
  axios.get(API + "categories/", { headers: authHeader() });
const deleteCategories = (id) =>
  axios.delete(`${API}categories/${id}`, {headers:authHeader()})

export { getCategories, deleteCategories };
