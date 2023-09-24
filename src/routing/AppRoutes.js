import React from 'react'
import { useAuth } from '../components/auth/core/Auth';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Logout } from '../components/auth/component/Logout';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { App } from '../App';
import Home from '../Pages/home/Home';
import "../gobal.css"
import siteConfig from '../services/_siteConfig';

const {PUBLIC_URL} = process.env;

const AppRoutes = () => {
    const {currentUser} = useAuth();
    const token = localStorage.getItem(siteConfig.ACCESS_TOKEN);
    console.log(token,"sgdjsagdjagsd");
    console.log(currentUser)
  return (
    <>
    <BrowserRouter >
        <Routes>
            <Route element={<App/>}/>
            <Route path='logout' element={<Logout/>}/>
            {currentUser ? (
                <>
                <Route path='/*' element={<PrivateRoutes/>}/>
                <Route index element={<Navigate to='/stepper'/>}/>
                </>
            ):(
                <>
                <Route path='/*' element={<PublicRoutes/>}/>
                <Route path='*' element={<Navigate to="/signup"/>}/>
                </>
            )}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export  {AppRoutes}