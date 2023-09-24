import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import "./gobal.css"
import { Provider } from "react-redux";
import { AuthProvider } from "../src/components/auth/core/Auth";

// import rootReducer from "../src/state/reducers";
import { persistor, store } from "./state/index";
import { PersistGate } from "redux-persist/integration/react";
import { AppRoutes } from "./routing/AppRoutes";

const container = document.getElementById("root");
if(container) {
  createRoot(container).render(
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <AppRoutes/>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}


reportWebVitals();