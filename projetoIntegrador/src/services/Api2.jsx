import axios from "axios";

const api2 = axios.create({
  baseURL: "https://simcaq.c3sl.ufpr.br/api/v1/school/count",
});


export default api2 ;
