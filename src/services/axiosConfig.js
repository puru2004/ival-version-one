// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.10.98.132:5000/account',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;