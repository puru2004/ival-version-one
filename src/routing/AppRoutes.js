import React from 'react'
import { useAuth } from '../components/auth/core/Auth';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Logout } from '../components/auth/component/Logout';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { App } from '../App';
import Home from '../Pages/home/Home';

const {PUBLIC_URL} = process.env;

const AppRoutes = () => {
    const {currentUser} = useAuth();
  return (
    <>
    <BrowserRouter basename={PUBLIC_URL}>
        <Routes>
            <Route element={<App/>}/>
            <Route path='logout' element={<Logout/>}/>
            {currentUser ? (
                <>
                <Route path='/*' element={<PrivateRoutes/>}/>
                <Route index element={<Navigate to='/'/>}/>
                </>
            ):(
                <>
                <Route path='/*' element={<PublicRoutes/>}/>
                <Route path='/' element={<Home/>}/>
                </>
            )}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export  {AppRoutes}