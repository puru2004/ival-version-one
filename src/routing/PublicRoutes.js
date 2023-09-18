import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/component/Login'
import Home from '../Pages/home/Home'
import Singup from '../components/auth/component/Singup'

const PublicRoutes = () => {
  return (
    <Routes>
        
    <Route path='/login' element={<Login/>}/>
    <Route index element={<Home/>}/>
    <Route path='/signup' element={<Singup/>}/>
    </Routes>
  )
}

export  {PublicRoutes}