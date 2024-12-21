import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


export default function UseHook() {
  
    
    function getAllProducts(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
       let response = useQuery({

          queryKey:'getAllProduct',
          queryFn:getAllProducts
        })
    
  return response
}
