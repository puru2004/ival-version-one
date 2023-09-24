// import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

const appStore = createStore(rootReducer);

export default appStore;
