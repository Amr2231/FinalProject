import React from 'react'
import Style from "./Layout.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet, Routes } from "react-router"
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
export default function Layout() {
    let [count , SetCount] = useState(0);
    useEffect(()=>{
      
    },[])
  return (<>

  <Navbar></Navbar>
  <div className='container mx-auto relative   p-4 pt-20'>
    <Outlet/></div>
  <Toaster></Toaster>
  <Footer></Footer>
  </>
  )
}
