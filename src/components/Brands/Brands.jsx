
import React, { Component } from 'react'
import Style from "./Brands.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import {Helmet} from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GetHook from '../Hooks/GetHook';
import BrandsInfo from '../BrandsInfo/BrandsInfo';
// import BrandsInfo from '../BrandsInfo/BrandsInfo';

export default function Brands() {
 
 
    const[isOpen , setIsOpen] = useState(false);  
    const[cardId , setcardId] = useState(false);  


      let{data , isLoading} =  GetHook({
        queryKey:['brands'],
       url:`https://ecommerce.routemisr.com/api/v1/brands`,
      //  select : (data) => data?.data.data ,
      })

    if(isLoading){
      return <>
      <div>
        <span className='flex bg-[#6e6e6e] transition-opacity opacity-35 duration-700 ease-in-out h-screen fixed top-11 -left-0 w-full'></span>
        <span className="loader"></span>
      </div>
       </>
      }

      
  return (
    <>

{cardId && <BrandsInfo id={cardId} isOpen = {isOpen} setisOpen = {setIsOpen}/>}

    <Helmet>
      <title>brands</title>
    </Helmet>
 
  
    <div  className='flex flex-wrap gap-10 '>
 {data?.data?.data.map((prod)=>{return <>
  <div onClick={()=>{
    setIsOpen(true) , setcardId(prod._id);
}} className="relative max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 cursor-default border-solid dark:border-gray-700  transition-all duration-500 hover:shadow-md hover:shadow-green-600 hover:border-green-600  max-lg:left-14 max-sm:left-9  ">
    <div  className='cursor-default'>
      <img className="rounded-t-lg" src={prod.image} alt />
    </div>
    
    <div className="p-5">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod?.name}</h5>
      </div>
    </div>
  </div>
    </>})}
 </div>
    </>
  )
}