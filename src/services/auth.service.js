import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const loginService = (username, password) => {
  return axios
    .post(API_URL + "login", { username, password })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logoutService = () => localStorage.removeItem("user");

export {loginService, logoutService};