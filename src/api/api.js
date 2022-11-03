import axios from "axios";

const api = axios.create({
  baseURL: "https://astroverso-json-api.herokuapp.com",
  timeout: 10000,
});

export default api;
