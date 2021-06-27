import { AUTH } from "../constants/actionType";
import * as api from "../api/index.js";

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    router.push("/home");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/home");
  } catch (error) {
    console.log(error);
  }
};
