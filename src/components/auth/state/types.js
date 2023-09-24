export const AuthActionTypes = {
    LOGIN_STARTED: 'LOGIN_STARTED',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    FETCH_AUTH_USER_SUCCESS: 'FETCH_AUTH_USER_SUCCESS',
    FETCH_AUTH_USER_FAILURE: 'FETCH_AUTH_USER_FAILURE',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    GET_AUTH_USER: 'GET_AUTH_USER',
    SET_AUTH_USER: 'SET_AUTH_USER',
    GET_USER_PERMISSIONS: 'GET_USER_PERMISSIONS',
    SET_USER_PERMISSIONS: 'SET_USER_PERMISSIONS',
    SET_FORGOT_PASSWORD_EMAIL: 'auth/SET_FORGOT_PASSWORD_EMAIL',
    SET_FORGOT_PASSWORD_TOKEN: 'auth/SET_FORGOT_PASSWORD_TOKEN',
  };
  
  const initialAuthState = {
    user: null,
    authToken: null,
    error: null,
    isLoading: false,
    forgotPassword: { email: '', token: '' },
  };
  