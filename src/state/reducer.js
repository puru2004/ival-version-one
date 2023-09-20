import { combineReducers } from "redux";
import authReducer from "../components/auth/state/_reducer";
import modalReducer from "./commonReducers/_commonReducer";
const appReducer = combineReducers({
    authReducer,
    modalReducer,
})

export const rootReducer = (state , action) =>{
    if(action?.type === 'USER_LOGOUT'){
        return appReducer (undefined, action)
    }
    return appReducer (state , action)
}