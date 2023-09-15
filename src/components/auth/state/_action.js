
// Action creators for login

const loginStarted = () => ({
    type: "LOGIN_STARTED",
  });
  
  const loginSuccess = (user, authToken) => ({
    type: "LOGIN_SUCCESS",
    payload: { user, authToken },
  });
  
  const loginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: { error },
  });
  
  export const login = (username, password) => {
    return async (dispatch) => {
      dispatch({ type: "LOGIN_STARTED" });
  
      try {
        // Make API call for user login with username and password
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const { user, authToken } = await response.json();
          dispatch(loginSuccess(user, authToken));
        } else {
          const { error } = await response.json();
          dispatch(loginFailure(error));
        }
      } catch (error) {
        dispatch(loginFailure('Failed to perform login'));
      }
    };
  };
  
  // Action creators for fetching user details
  export const fetchAuthUserSuccess = (user) => ({
    type: "FETCH_AUTH_USER_SUCCESS",
    payload: { user },
  });
  
  const fetchAuthUserFailure = (error) => ({
    type: "FETCH_AUTH_USER_FAILURE",
    payload: { error },
  });
  
  export const fetchUserDetails = (authToken) => {
    return async (dispatch) => {
      dispatch(loginStarted());
      try {
        // Make API call for fetching user details with auth token
        const response = await fetch("/account/me/", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
  
        if (response.ok) {
          const user = await response.json();
          dispatch(fetchAuthUserSuccess(user));
        } else {
          const { error } = await response.json();
          dispatch(fetchAuthUserFailure(error));
        }
      } catch (error) {
        dispatch(fetchAuthUserFailure('Failed to fetch user details'));
      }
    };
  };
  
  export const setForgotPasswordEmailAction = (data) => ({
    type: "auth/SET_FORGOT_PASSWORD_EMAIL",
    payload: data.email,
  });
  
  export const setForgotPasswordTokenAction = (data) => ({
    type: "auth/SET_FORGOT_PASSWORD_TOKEN",
    payload: data.token,
  });
  