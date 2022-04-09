import axios from "axios";

const api = axios.create({
  baseURL: "https://simcaq.c3sl.ufpr.br/api/v1/enrollment",
});

export default api;