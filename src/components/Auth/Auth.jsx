import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
const location = useLocation();
useEffect (()=>{
console.log(location?.pathname)

},[location?.pathname])

useEffect (()=>{
    console.log('savrav')
    },[])

  return (
    <>
    {location?.pathname.includes('login')?<Login /> : <h1> Register Page </h1>} 
    </>
  );
};

export default Auth;
