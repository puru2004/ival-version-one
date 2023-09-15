import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import "./gobal.css"
import { Provider } from "react-redux";
import { AuthProvider } from "../src/components/auth/core/Auth";
import {createStore } from "redux";
// import rootReducer from "../src/state/reducers";
import { persistor, store } from "./state/index";
import { PersistGate } from "redux-persist/integration/react";
import { AppRoutes } from "./routing/AppRoutes";


// const appStore = createStore(rootReducer);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={}>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


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
