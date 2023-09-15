import { combineReducers } from "redux";
import authReducer from "../components/auth/state/_reducer";
const appReducer = combineReducers({
    authReducer,
})

export const rootReducer = (state , action) =>{
    if(action?.type === 'USER_LOGOUT'){
        return appReducer (undefined, action)
    }
    return appReducer (state , action)
}