import axios from "axios";

const api = axios.create({ baseURL: `${process.env.REACT_APP_API_SEARCH_MOVIE}` }) 

export default api;
