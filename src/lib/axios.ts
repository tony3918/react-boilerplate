import Axios from 'axios';
import { API_HOST } from './constants';

Axios.defaults.withCredentials = true;

const baseURL = API_HOST;
const axios = Axios.create({
  baseURL,
  withCredentials: true,
});
axios.defaults.timeout = 3000;

export default axios;
