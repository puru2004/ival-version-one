import React from 'react'
import { useAuth } from '../components/auth/core/Auth'
import { Navigate, Route, Routes } from 'react-router-dom';
import Singup from '../components/auth/component/Singup';
import Stepper from '../Pages/Stages/Stepper';

const PrivateRoutes = () => {
    const { currentUser} = useAuth();
  return (
    <Routes>
        {currentUser?.id ? (
       
        
            <>
             <Route path="/*" element={<Stepper/>}/>
            </>
        ):(
            <>
            <Route path='/signup' element={<Singup/>}/>
            </>
        )}
    </Routes>
    
  )
}

export  {PrivateRoutes}