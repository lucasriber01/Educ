import axios from "axios";

const api3 = axios.create({
  baseURL: "https://simcaq.c3sl.ufpr.br/api/v1/class",
});


export default api3 ;
