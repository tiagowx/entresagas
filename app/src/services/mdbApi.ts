import axios from "axios";
import configs from "../configs";


const mdbApi = axios.create({
  baseURL: configs.api_url
});

export default mdbApi;