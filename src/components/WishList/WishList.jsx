import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { WishlistCounterContext } from '../Context/Wishlist'
import { CartContext } from '../Context/CartContext'
import toast from 'react-hot-toast'

export default function WishList() {
  let{totalPrice,allProducts,deleteWishlist} = useContext(WishlistCounterContext)
  let{addToCart} =  useContext(CartContext)
  
    async function addProdToCart(id){
      let {data} = await addToCart(id);
      console.log(data);
      if (data.status =='success'){
        toast.success(data.message,{
          position: 'top-right',
          autoClose: 12000,

        })
        
      }else{
        
        toast.error(data.message,{
          position: 'top-right',
          autoClose: 12000,

        })
        
      }
    }

  return (
    <>
    <h2 className='text-green-600 text-4xl font-bold my-5'>Shop Now</h2>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>

        <th scope="col" className="px-14 py-3">
          Price
        </th>
        <th scope="col" className="px-14 py-3">
          Action
        </th>
        <th scope="col" className="px-20 py-3">
          AddCart
        </th>
      </tr>
    </thead>
    <tbody>
      
      {allProducts?.map((product)=>{return <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4">
        <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.title}
      </td>
      <td className="px-12 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price}EGB
      </td>


      <td className="px-12 py-4">
        <a onClick={()=>{deleteWishlist(product._id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
      </td>
      <td className="px-12 py-4 font-semibold ">
      <button onClick={()=>{addProdToCart(product._id).then(()=>{deleteWishlist(product._id)})}} type="button" className="transition-all duration-400 text-black hover:text-white border border-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">add to cart</button>
      </td>
    </tr>
    </>
      })}


    </tbody>
  </table>

  </div>

    </>
  )
}
