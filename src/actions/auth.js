import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    // login the user..
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, ...data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    // signUp the user..
    const { data } = await api.signUp(formData);
    console.log("actions: signUP:", data);

    dispatch({ type: AUTH, ...data });

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
