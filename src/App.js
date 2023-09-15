// import React from "react";
// // import Home from "./Pages/Stages/Home/Home.jsx";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./gobal.css"
// import Stepper from "./Pages/Stages/Stepper";
// import Login from "./components/auth/component/Login";
// import Home from "./Pages/home/Home"



// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path ="/" element={<Home/>}/>
//         <Route path="/stepper" element={<Stepper/>}/>
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import "./gobal.css";
// import PublicRoutes from "./routes/routeservices/publicRoutesService"; // Import the PublicRoutes component
// import PrivateRoutes from "./routes/routeservices/privateRoutesService"; // Import the PrivateRoutes component
// import Login from "./components/auth/component/Login"
// import Home from "./Pages/home/Home"
// import Stepper from "./Pages/Stages/Stepper";

// const publicRoutes = [
//   { path: "/", component: <Home/> },
//   { path: "/login", component: <Login/> },
//   // Add more public routes as needed
// ];

// const privateRoutes = [
//   { path: "/stepper", component: <Stepper/> },
//   // Add more private routes as needed
// ];

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         {/* Render both public routes and protected routes */}
//         <PublicRoutes routes={publicRoutes} />
//         <PrivateRoutes routes={privateRoutes} />
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { AuthInit } from './components/auth/core/Auth'
import "./gobal.css"

const App =() =>{
  return(
    <Suspense>
    <AuthInit>
    <Outlet/>
    </AuthInit>
    </Suspense>
  )
}
export {App}








