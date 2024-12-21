import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function GetHook({queryKey , url , data , config , select}) {
   async function getAllBrands(){
        return await axios.get(url , data , config);
      }
    return useQuery({
        queryKey,
        queryFn: getAllBrands,
      select
      });
    
}
