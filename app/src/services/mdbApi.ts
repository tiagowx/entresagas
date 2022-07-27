import axios from "axios";

const authorization = process.env.AUTH_TOKEN;

const mdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default mdbApi;