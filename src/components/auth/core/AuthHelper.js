import { AuthModel } from "./_models";
import siteConfig from "../../../services/_siteConfig";
import LocalStorageService from "../../../services/_localStorageServices";

const getAuth = () => {
  if (!localStorage) {
    return;
  }

  const lsValue = localStorage.getItem(siteConfig.DC_AUTH_IVAL);
  if (!lsValue) {
    return;
  }

  try {
    const auth = JSON.parse(lsValue);
    if (auth) {
      // You can easily check auth_token expiration also
      return auth;
    }
  } catch (error) {
    console.error("AUTH LOCAL STORAGE PARSE ERROR", error);
  }
};

const setAuth = (auth) => {
  if (!localStorage) {
    return;
  }

  try {
    const lsValue = JSON.stringify(auth);
    localStorage.setItem(siteConfig.DC_AUTH_IVAL, lsValue);
    LocalStorageService.setToken(auth);
  } catch (error) {
    console.error("AUTH LOCAL STORAGE SAVE ERROR", error);
  }
};

const removeAuth = () => {
  if (!localStorage) {
    return;
  }

  try {
    localStorage.removeItem(siteConfig.ACCESS_TOKEN);
    LocalStorageService.removeToken();
  } catch (error) {
    console.error("AUTH LOCAL STORAGE REMOVE ERROR", error);
  }
};

export function setupAxios(axios) {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config) => {
      const auth = getAuth();
      console.log(auth,"auth");
      if (auth && auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }

      return config;
    },
    (err) => Promise.reject(err)
  );
}

export { getAuth, setAuth, removeAuth };
