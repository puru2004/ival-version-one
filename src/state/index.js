import {createStore , applyMiddleware} from "redux";

import storage from "redux-persist/lib/storage";
import {composeWithDevTools} from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middleware = [thunk];


const persistConfig = {
    key:rootReducer, // key for the objeect in the storage
    storage, // storage engine to use for the persisting data
};

const persistedReducer = persistReducer(persistConfig , rootReducer);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);