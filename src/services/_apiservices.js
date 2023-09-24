'use strict';
import axios from 'axios'
import siteConfig from './_siteConfig'
import {globalConstant} from "../utils/_gConstant/index.js"
import LocalStorageService from './_localStorageServices'

const API_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: siteConfig.BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = LocalStorageService.getAccessToken();

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      alert('Your session has been expired!');
      window.location.href = '/login';
      LocalStorageService.removeToken();
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      // originalRequest._retry = true
      // const refreshToken = LocalStorageService.getRefreshToken();
      // return axios.post('/auth/token', { refresh_token: refreshToken })
      //   .then(res => {
      //     if (res.status === 201) {
      //       LocalStorageService.setToken(res.data)
      //       axios.defaults.headers.common['Authorization'] =
      //         'Bearer ' + LocalStorageService.getAccessToken()
      //       return axios(originalRequest)
      //     }
      //   })
    }
    return Promise.reject(error);
  }
);

class ApiService {
  handleError(error) {
    try {
      if (error.response) return error.response;
      else if (error.request) return error.request;
      else return globalConstant.INTERNAL_SERVER_ERROR;
    } catch (err) {
      console.log(err);
    }
  }

  async get(url) {
    let res;
    await api
      .get(
        siteConfig.BASE_URL + url
        //@ts-ignore
        // this.getHeader()
      )
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = this.handleError(err);
      });
    return res;
  }


  async post(url, body) {
    let res;
    await api
      .post(siteConfig.BASE_URL + url, body)
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = this.handleError(err);
      });

    return res;
  }

  async put(url, body) {
    let res;
    await api
      .put(siteConfig.BASE_URL + url, body)
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = this.handleError(err);
      });

    return res;
  }
  async delete(url) {
    let res;
    await api
      .delete(siteConfig.BASE_URL + url)
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = this.handleError(err);
      });

    return res;
  }
  async patch(url, body) {
    let res;
    await api
      .patch(siteConfig.BASE_URL + url, body)
      .then((data) => {
        res = data;
      })
      .catch((err) => {
        res = this.handleError(err);
      });

    return res;
  }
}

export default  new ApiService
