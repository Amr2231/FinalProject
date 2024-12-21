import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { CartContext } from '../Context/CartContext';

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Payment() {          
     <Helmet>
  <title>Payment</title>
</Helmet>
  let navigate =  useNavigate()
let{cartId , allProducts ,setallProducts,setnumOfItems,settotalPrice} = useContext(CartContext) 

    let [IsOnline , SetIsOnline] = useState(0);
    useEffect(()=>{
      
    },[])
   async function cashOrder(val){
      console.log(val);
      let {data} =  await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , {
        shippingAddress  : val
      }, {
        headers:{
          token : localStorage.getItem('userToken'),
        }
      })
      if(data.status == 'success'){
        toast.success('Successfully toasted!' , {
          position :"top-right ",
          duration: 3000}
        )
        settotalPrice(0)
        setnumOfItems(0)
          setallProducts(null)
        navigate("/cart")
          
        
      }
      
    }
    async function payOnline(val){
     let{data} =await  axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173` , {
        shippingAddress: val
      }, {
        headers:{
          token : localStorage.getItem('userToken'),
        }
      })
      if(data.status == 'success'){
        window.open(data.session.url)
      }
      
    }
    function detectPayment(val){
      if(IsOnline){  
        payOnline(val)
      }else{
        cashOrder()
      }
    }
    let user ={
      details : '',
      phone : '',
      city : '',
    }
    let formik = useFormik({
      initialValues:user ,  
      onSubmit: detectPayment
    })
  return (
    <>
    <form className="  " onSubmit={formik.handleSubmit}>

 

  <div className="mb-5">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">details</label>
    <input name='details' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your details" />
  </div>

  

  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
    <input name='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your phone" />
  </div>
  
  <div className="mb-5">
    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">city</label>
    <input name='city' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} type="text" id="city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Your city" />
  </div>

  <button onClick={()=>{SetIsOnline(false)}}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Cash</button>
  <button onClick={()=>{SetIsOnline(true)}}  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Online</button>
</form>
    </>
  )
}
