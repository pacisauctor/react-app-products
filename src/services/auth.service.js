import axios from "axios";

const API = "http://localhost:8080/api/";

const loginService = (user, password) => {
  return axios.post(API + "login", { user, password }).then((response) => {
    if (response.data.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.data)); 
    }
    return response.data;
  });
};

const logoutService = () => {
  localStorage.removeItem("user");}

export { loginService, logoutService };
