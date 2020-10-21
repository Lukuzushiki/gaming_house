import axios from "axios";
import errorHandling from "./errorHandling";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use((response) => response, errorHandling);

export default instance;
