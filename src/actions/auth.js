import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import { loginService, logoutService } from "../services/auth.service";


export const login = (user, password) => (dispatch) => {
  return loginService(user, password).then(
    (data) => {

      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.data },
      });
      dispatch({
        type: SET_MESSAGE,
        payload: { status: data.status, message: data.message},
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.response.data;
      
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: { status: message.status, message: message.message},
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  logoutService();

  dispatch({
    type: LOGOUT,
  });

  return Promise.resolve();
};
