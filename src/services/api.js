import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-api.vercel.app',
});

export default api;
