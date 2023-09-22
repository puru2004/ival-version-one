import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/component/Login";
import Home from "../Pages/home/Home";
import Singup from "../components/auth/component/Singup";
import ForgotPassword from "../components/auth/component/ForgotPassword";
import SwiperComponent from "../components/swiper/SwiperComponent";


const PublicRoutes = () => {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route index element={<Home />} />
      <Route path="/signup" element={<Singup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/swiper" element={<SwiperComponent/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export { PublicRoutes };
