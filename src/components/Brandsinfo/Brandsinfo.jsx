import React from 'react'
import GetHook from '../Hooks/GetHook';


export default function BrandsInfo({id , isOpen , setisOpen}) {
  let{data , isLoading} = GetHook({
    queryKey : ["brands", id],
    url:`https://ecommerce.routemisr.com/api/v1/brands/${id}`,
  })
      if(isLoading){
        return <>
        <div className='z-50'>
          <span className='flex bg-gray-900 transition-opacity opacity-30 z-20 duration-700 ease-in-out h-screen fixed top-11 -left-0 w-full'></span>
          <span className="loader z-50"></span>
        </div>
         </>
      }
  return (
<>
{isOpen && (
  <div id="crypto-modal" tabIndex={-1} aria-hidden="true" className="bg-gray-500 bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-20 justify-center items-center w-full md:inset-0  max-h-full h-full  ">
  <div onClick={()=>{setisOpen(false)}} className=" relative p-4 w-full max-w-md max-h-full left-1/3 top-0 transition-all transform duration-500 ease-in-out translate-y-7  origin-top max-lg:left-40 max-lg:top-20 max-xl:top-16  max-md:left-8 max-sm:-left-0 max-md:flex max-md:flex-col ">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 top-9 ">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div className='  border-b rounded-t dark:border-gray-600 '>
      <div className="p-4 md:p-5">
     <div className='flex justify-between'>
     <h3 className="text-4xl text-green-500 font-semibold mb-0 mt-3 dark:text-white">
          {data.data.data.name}
        </h3>
        <h3 className="mt-0 text-4xl text-black font-bold  mb-1 dark:text-white me-4">
        <img src={data.data.data.image} className='w-28' alt="" />
        </h3>
     </div>
     <h5 className="text-sm ms-2 font-medium text-black   dark:text-white">
     {data.data.data.slug}
        </h5>
      </div>
      </div>
      <div className='mt-1 p-4 md:p-5'></div>
    </div>
  </div>
</div>
)}
</> 
  )
}
