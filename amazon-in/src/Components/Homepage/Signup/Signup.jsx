import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Signup = () => {
    const [value,setValue]=useState({
        name:"",
        email:"",
        password:""
    })
    const [errorMsg,setErrormsg]=useState("");
    const navigate=useNavigate();

    const handlesingup=()=>{
      if(!value.name || !value.email || !value.password){
         setErrormsg("Please fill all the fields");
         return;
      }
      setErrormsg("");
      createUserWithEmailAndPassword(auth,value.email,value.password)
        .then(async (res)=>{
        const user=res.user;
       
        await updateProfile(user,{displayName:value.name})
       
        navigate("/login")
      }).catch((error)=>{
          setErrormsg(error.message)
      })
      setValue({
        name:"",
        email:"",
        password:""
    })
    }
  return (
    <div>
        <input value={value.name} type="text" placeholder='Enter name' 

        onChange={(e)=>setValue((prev)=>({...prev,name:e.target.value}))}/>

        <input value={value.email} type="email" placeholder='Enter email' 

        onChange={(e)=>setValue((prev)=>({...prev,email:e.target.value}))}/>

        <input value={value.password} type="password" placeholder='Enter password' 

        onChange={(e)=>setValue((prev)=>({...prev,password:e.target.value}))}/>
        
         <b>{errorMsg}</b>

        <button onClick={handlesingup}>Signup</button>
        <p>
            Already have an account?
            <Link to="/login">Login</Link>
        </p>
    </div>
  )
}

export default Signup;