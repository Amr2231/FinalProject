import React from 'react'
import CategoryHook from '../Hooks/CategoryHook'

export default function CategoriesInfo({id , isOpen , setisOpen}) {

 let{ data,isLoading} = CategoryHook({
    queryKey:['CategoriesInfo',id],
     url:`https://ecommerce.routemisr.com/api/v1/categories/${id}`,
     
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
   <div className='text-center mt-2 text-[#4fa74f]  font-[500] text-[32px] '>
   <h1>{data.data.data.slug} subcategories</h1>
   </div>
  </>
        
            
   
    
  )
}
