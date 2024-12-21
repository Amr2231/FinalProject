import React from 'react'
import Style from "./ProtectRoutes.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectRoutes(props) {
    let [count , SetCount] = useState(0);
    if(localStorage.getItem('userToken')!==null){
      return props.children
    }else{
      return <Navigate to = "/login" />;
    }
    useEffect(()=>{
      
    },[])
  return (
    <div>ProtectRoutes</div>
  )
}
