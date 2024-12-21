import React from 'react'
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let SubCategoriesContext = createContext()

export default function SubCategoriesContextProvider(props){
         useEffect(()=>{
         getAllSubCategories()
     },[])
    let[AllSubCategories , setAllSubCategories]= useState(null)
    let[SpecificSubCategories , setSpecificSubCategories]= useState(null)
      function getAllSubCategories(){
        return   axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
        .then((resp)=>{
            console.log("Subcategories fetched successfully");
            setAllSubCategories(resp?.data.data)
            return resp 
        })
        .catch((error)=>{console.log(error)})
     }
 

   return <SubCategoriesContext.Provider value ={{getAllSubCategories,AllSubCategories}}>
        {props.children}
    </SubCategoriesContext.Provider>
}