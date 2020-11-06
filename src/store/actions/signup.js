import { SIGN_UP } from "../type";
import axios from "configs/axios";

export const signUp = (payload) => (dispatch) => {
  dispatch({
    type: SIGN_UP,
    payload: payload,
  });
};

export const submitUser = (payload) => () => {
  return axios.post(`/signup`, payload, {
    headers: { contentType: "multipart/form-data" },
  });
};
