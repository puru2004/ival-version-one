import React from "react";
import { useAuth } from "../components/auth/core/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import Singup from "../components/auth/component/Singup";
import Stepper from "../Pages/Stages/Stepper";
import About from "../Pages/About";

const PrivateRoutes = () => {
    const  {currentUser} = useAuth();
    // console.log(currentUser.id);
  return (
    <Routes>
        <Route path='/signup' element={<Navigate to="/stepper"/>}/>
        {currentUser?.id ? (
       
        
            <>
             <Route path="/stepper" element={<Stepper/>}/>
            </>
        ):(
            <>
            <Route path='/signup' element={<Singup/>}/>
            </>
        )}
    </Routes>
  );
};

export { PrivateRoutes };
