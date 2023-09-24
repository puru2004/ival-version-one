const siteConfig = Object.freeze({
    BASE_URL: process.env.REACT_APP_API_URL,
  
    //LOCAL STORAGE PROPERTIES
    DC_AUTH_IVAL: "dc_auth_ival",
    ACCESS_TOKEN: "access_token",
  
    //Query Param Keys
    AUTH_URL: "auth_url",
    REDIRECTED_URL: "redirected_url",
    // PCONNECTOR_BASE_URL: ``,


    //ENDPOINTS PROPERTIES
    SIGNUP:"/account/users/",
    LOGIN:"/account/api/login/",
    GET_USER_BY_ACCESSTOKEN_URL:"/account/me/",
    STAGE1:"/app/api/scheme-details/",
    STAGE2:"/app/api/service-charge/",
    STAGE3:"/app/api/accomodations-schedule/",
    STAGE4:"/app/api/values/",

  });
  
  export default siteConfig;