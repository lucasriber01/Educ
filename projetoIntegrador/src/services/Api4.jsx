import axios from "axios";

const api4 = axios.create({
  baseURL: "http://educacao.dadosabertosbr.com/api/escolas?nome=aplicacao",
});


export default api4 ;
