import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function SubCategories({queryKey , url , data , config , select}) {
   async function getAllSubCategoriesy(){
        return await axios.get(url , data , config);
      }
    return useQuery({
        queryKey,
        queryFn: getAllSubCategoriesy,
      select
      });
}
