import React,{
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
// import { LayoutSplashScreen } from '../../../../_dcode/layout/core';
// import { AuthModel, MeUserModel } from './_models';
import * as authHelper from "./AuthHelper";
import { getUserByToken } from "./_request";
// import { WithChildren } from '../../../../_dcode/helpers';
// import { useDispatch } from 'react-redux';
// import { fetchAuthUserSuccess } from '../state';
// import { setMiniMasterDataList } from '../../../../store/actions/_commonActions';
import { apiResponse } from "../../../utils/_gTypes/index";
import { fetchAuthUserSuccess } from "../state/_action";
import { useDispatch } from "react-redux";
// import { Logout } from '../component/Logout';


// Define the types

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: (auth) => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
};

const AuthContext = createContext(initAuthContextPropsState);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState();
  const saveAuth = (auth) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };

  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthInit = () => {
  const dispatch = useDispatch();
  const { auth, logout, setCurrentUser } = useAuth();
  const didRequest = useRef(false);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  console.log(auth);
  useEffect(() => {
    const requestUser = async (apiToken) => {
      try {
        if (!didRequest.current) {
          const {
            data:  user ,
          } = await getUserByToken(apiToken);
          console.log(user);
          if (user) {
            setCurrentUser(user);
          }

          if (user?.id) {
            dispatch(fetchAuthUserSuccess(user));
          }
        }
      } catch (error) {
        console.error(error);
        if (!didRequest.current) {
          logout();
        }
      } finally {
        setShowSplashScreen(false);
      }

      return () => (didRequest.current = true);
    };

    console.log(auth.access);

    if (auth && auth.access) {
      requestUser(auth.access);
    } else {
      logout();
      setShowSplashScreen(false);
    }
    // eslint-disable-next-line
  }, []);

  return "hello";
};

export { AuthProvider, AuthInit, useAuth };
