import React, { useContext } from 'react'
import CategoryHook from '../Hooks/CategoryHook'
import { SubCategoriesContext } from '../Context/SubCategoriesContext'

export default function SubCategories({Id , Title}) {
    let{data,isLoading} =CategoryHook({
        queryKey:['SubCategories',Id],
         url:`https://ecommerce.routemisr.com/api/v1/categories/${Id}/subcategories`,
    })
    console.log(data);
return <>
    

<div className=' z-10 flex flex-wrap gap-3'>
{data?.data.data.map((prod)=>{return <>
         <div className='p-4 z-10 w-fit text-center relative max-w-sm flex flex-col items-center bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 cursor-default border-solid dark:border-gray-700  transition-all duration-200 hover:shadow-md hover:shadow-green-700 hover:border-green-700  text-2xl font-semibold'>
         {prod?.slug}
     </div>
  </>
  })}
</div>

</>
}