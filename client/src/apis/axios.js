import axios from "axios";
//hello abdullah

const API = axios.create({
  baseURL: "http://localhost:9000/api",
});

export default API;
