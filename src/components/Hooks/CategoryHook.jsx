import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function CategoryHook({queryKey , url , data , config , select}) {
   async function getAllCategory(){
        return await axios.get(url , data , config);
      }
    return useQuery({
        queryKey,
        queryFn: getAllCategory,
      select
      });
}
