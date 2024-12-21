import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Cart() {
  let{allProducts , totalPrice ,numOfItems ,UptadeCartItem , DeleteItem} = useContext(CartContext)


  return (
    <>
<Helmet>
    <title>Cart</title>
</Helmet>

    
 <div className='shadow-lg p-9 max-lg:w-full'>
<div className='flex justify-between'>
<h2 className='text-black text-4xl font-bold my-5 items-center relative top-2 flex'>Cart Shop</h2>
 <Link to={'/payment'}>
  <button className='btn bg-green-600 w-full relative top-8'>Pay Now</button>
  
  </Link>
</div>
 <div className='flex justify-between'>
 <h3 className='text-2xl '>Total price : <span className='text-green-500'>{totalPrice} </span> </h3>
 
 <h3 className='text-2xl text-center'>Num of cart items  :  <span className='text-green-500'>{numOfItems}</span> </h3>
 </div>

<div className="relative overflow-x-auto  sm:rounded-lg ">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

    <tbody className=''>
      
      {allProducts?.map((product)=>{return <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-2xl">
      <td className="p-4 border-black">
        <img src={product.product.imageCover} className="w-32 max-md:w-96  " alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold max-md:text-4xl text-gray-900 dark:text-white">
        {product.product.title}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button onClick={()=>{UptadeCartItem(product.product._id , product.count-1)}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
            </svg>
          </button>
          <div>
            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={product.count} required />
          </div>
          <button onClick={()=>{UptadeCartItem(product.product._id , product.count+1)}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span className="sr-only">Quantity button</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price}EGB
      </td>
      <td className="px-6 py-4">
        <a onClick={()=>{DeleteItem(product.product._id)}}  className="font-medium text-red-600 dark:text-red-500 cursor-pointer">Remove</a>
      </td>
    </tr>
    </>
      })}
    </tbody>
  </table>
  </div>
 </div>
    </>
  )
}
