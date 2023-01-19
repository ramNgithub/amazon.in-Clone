import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom";
import Bestseller from '../../BestSeller/Bestseller';
import { auth } from '../firebase';
import Homepage from '../Home/Homepage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const MainRoutes = () => {
    const [userName,setuserName]=useState("");
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
            setuserName(user.displayName)
        }else{
            setuserName("");
        }
     })
    },[])
   
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage name={userName}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/bestseller' element={<Bestseller/>}/>

        </Routes>
       
    </div>
  )
}

export default MainRoutes