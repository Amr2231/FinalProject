import React from 'react'
import Style from "./Categories.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import { Helmet } from 'react-helmet';
import CategoryHook from '../Hooks/CategoryHook';
import BrandsInfo from '../BrandsInfo/BrandsInfo';
import CategoriesInfo from '../CategoriesInfo/CategoriesInfo';
import SubCategories from '../SubCategories/SubCategories';

export default function Catrgories() {
      const[isOpen , setIsOpen] = useState(false);  
      const[cardId , setcardId] = useState(false);
      const[title , setTitle] = useState(null);  
      const[id , setid] = useState(null);
  let{data , isLoading} = CategoryHook({
    queryKey:['Catrgories'],
     url:`https://ecommerce.routemisr.com/api/v1/categories`,
  })
 
  
  if(isLoading){
    return <>
    <div>
      <span className='flex bg-[#6e6e6e] transition-opacity opacity-35 duration-700 ease-in-out h-screen fixed top-11 -left-0 w-full'></span>
      <span className="loader"></span>
    </div>
     </>
    }
  return (<>

<Helmet>
  <title>Categories | E-Commerce</title>
</Helmet>

<div className="flex flex-wrap gap-12 justify-start  ">
{data?.data?.data.map((prod)=>{return <div onClick={()=>{setIsOpen(true) , setcardId(prod._id) , setTitle(prod.name) , setid(prod._id);}} className=" w-full relative max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 cursor-default border-solid dark:border-gray-700  transition-all duration-200 hover:shadow-md hover:shadow-green-700 hover:border-green-700 max-lg:left-44 max-md:left-28 max-sm:left-1">
<a className="w-full text-center relative max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 cursor-default border-solid dark:border-gray-700  transition-all duration-200 hover:shadow-md hover:shadow-green-700 hover:border-green-700">
  <img  src={prod.image} alt="" className='w-full h-96' />
  <h5 className="mb-12 mt-9 text-green-500 text-2xl font-bold tracking-tight  dark:text-white">{prod.name}</h5>
</a>
</div>
})}
</div>
{cardId && <CategoriesInfo id={cardId} isOpen = {isOpen} setisOpen = {setIsOpen}/>}
{cardId && <SubCategories Title={title} Id = {id}/>}
</>
  )
}
