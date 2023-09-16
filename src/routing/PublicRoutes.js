import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/component/Login'
import Home from '../Pages/home/Home'

const PublicRoutes = () => {
  return (
    <Routes>
        
    <Route path='/login' element={<Login/>}/>
    <Route index element={<Home/>}/>
    </Routes>
  )
}

export  {PublicRoutes}