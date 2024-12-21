import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Helmet } from 'react-helmet';

export default function Allorders() {
    let [count , SetCount] = useState(0);
    useEffect(()=>{
      
    },[])
    
  return (
    <>
    <div>Allorders</div>

        <Helmet>
                <title>Allorders</title>
            </Helmet>
    </>
  )
}
