import { FETCH_PAGE } from "../type";
import axios from "configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios
    .get(url)
    .then((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: {
          [page]: response.data,
        },
      });
    })
    .catch((response) => {
      dispatch({
        type: FETCH_PAGE,
        payload: response.error,
      });
    });
};
