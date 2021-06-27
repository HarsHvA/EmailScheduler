import { MAIL, FETCH_SCHEDULE, FETCH_HISTORY } from "../constants/actionType";
import * as api from "../api/index.js";

export const emailService = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.emailService(formData);
    dispatch({
      type: MAIL,
      data,
    }).then(window.location.reload());
  } catch (error) {
    console.log(error);
  }
};

export const getSchedule = () => async (dispatch) => {
  try {
    const { data } = await api.schedule();
    dispatch({ type: FETCH_SCHEDULE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getHistory = () => async (dispatch) => {
  try {
    const { data } = await api.history();
    dispatch({ type: FETCH_HISTORY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
