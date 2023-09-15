const initialAuthState = {
    user: null,
    authToken: null,
    error: null,
    isLoading: false,
    forgotPassword: { email: "", token: "" }
  };
  
  const authReducer = (state = initialAuthState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'LOGIN_STARTED':
        return { ...state, isLoading: true, error: null };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: payload.user,
          authToken: payload.authToken,
          isLoading: false,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          authToken: null,
          isLoading: false,
          error: payload.error,
        };
      case 'FETCH_AUTH_USER_SUCCESS':
        return {
          ...state,
          user: payload.user,
          isLoading: false,
          error: null,
        };
      case 'FETCH_AUTH_USER_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: payload.error,
        };
      // case 'SET_FORGOT_PASSWORD_EMAIL':
      //   return {
      //     ...state,
      //     forgotPassword: {
      //       ...state.forgotPassword,
      //       email: payload
      //     }
      //   };
      case "auth/SET_FORGOT_PASSWORD_TOKEN":
        let obj = {
          ...state,
          forgotPassword: {
            ...state.forgotPassword,
            token: payload
          }
        };
  
        console.log(obj, "SET_FORGOT_PASSWORD_TOKEN");
        return obj;
      default:
        return state;
    }
  };
  
  export default authReducer;
  