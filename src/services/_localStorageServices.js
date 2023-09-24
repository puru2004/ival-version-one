import siteConfig from './_siteConfig'

class LocalStorageService {

  getAccessToken() {
    try {
      let access_token = localStorage.getItem(siteConfig.ACCESS_TOKEN);
      return access_token;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  setToken(token) {
    try {
      localStorage.setItem(siteConfig.ACCESS_TOKEN, token);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  removeToken() {
    try {
      localStorage.removeItem(siteConfig.ACCESS_TOKEN);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  getRefreshToken() {
    try {
      let access_token = localStorage.getItem(siteConfig.ACCESS_TOKEN);
      return access_token;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default new  LocalStorageService();
