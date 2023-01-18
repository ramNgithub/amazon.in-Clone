import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

const Login = () => {

    const [value,setValue]=useState({
        email:"",
        password:""
    })
    const [errorMsg,setErrormsg]=useState("");
    const navigate=useNavigate();

    const handlesingin=()=>{
      if( !value.email || !value.password){
         setErrormsg("Please fill all the fields");
         return;
      }
      setErrormsg("");
      signInWithEmailAndPassword(auth,value.email,value.password)
        .then((res)=>{
        navigate("/")
      }).catch((error)=>{
          setErrormsg(error.message)
      })
      setValue({
       
        email:"",
        password:""
    })
    }

  return (
    <div>
        <input value={value.email}  type="text" placeholder='Enter email' 
        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}
        />
        <input value={value.password}  type="text" placeholder='Enter password' 
        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        <button onClick={handlesingin}>Login</button>
        <b>{errorMsg}</b>
        <p>
            If you don't have an account ?
            <Link to="/signup">
              Signup
            </Link>
        </p>
    </div>
  )
}

export default Login