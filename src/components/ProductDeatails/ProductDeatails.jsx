import React, { useContext } from 'react'
import Style from "./ProductDeatails.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function ProductDeatails() {
  <Helmet>
  <title>ProductDeatails</title>
</Helmet>

 let{addToCart}= useContext(CartContext)
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    let [ProDeatils , SetProDeatils] = useState([]);
    let [relatedProd , SetrelatedProd] = useState([]);
    let {id,category} = useParams();
    async function GetSpecificProds(id){
     let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`) 
     SetProDeatils(data.data);
    }
    async function GetRecommendedProds(){
      let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`) 
      let alldata = data.data;
      let relatedprod = alldata.filter((prod)=>prod.category.name === category)
      SetrelatedProd(relatedprod)
     }
    useEffect(()=>{ 
       GetSpecificProds(id);
       GetRecommendedProds();  
      
    },[id, category])
  return (
    <>
    <div className='row items-center'>
      <div className = 'w-1/4 py-4'>
        <div>
        <Slider {...settings}>
{ProDeatils?.images?.map((pro)=><img src={pro} className='w-full' alt="" />)}
       </Slider>
        </div>
      </div>
      <div className='w-3/4'>
      <div className='p-5'>
        <h4 className='text-2xl'>{ProDeatils.title}</h4>
        <p className='text-xl text-gray-500'>{ProDeatils.description}</p>
        <span className='font-bold text-green-400'>{ProDeatils?.category?.name}</span>
        <div className='row justify-between'>
        <span>{ProDeatils.price}EGB</span>
        <span><i className='fa-solid fa-star text-yellow-200'></i>{ProDeatils.ratingsAverage}</span>
      </div>
      <button onClick={()=>{addProdToCart(ProDeatils._id)}} className='btn bg-green-500 w-full'>Add to cart</button>
      </div>

      </div>
    </div>

    <div className='row items-center'>
    {relatedProd.map((prod)=>{ return <> 
 
 <div key={prod.id} className='w-1/6 px-2'>
 <Link to= {`/productDeatails/${prod.id}/${prod.category.name}`}>
 <div className='shadow-md p-3'>
   <img src={prod.imageCover} alt="" />
   <span className='text-green-500 text-xl'>{prod.category.name}</span>
   <h4>{prod.title.split(" ").slice(0,2).join(' ')}</h4>
   <div className='row justify-between'>
     <span>{prod.price}EGB</span>
     <span><i className='fa-solid fa-star text-yellow-200'></i>{prod.ratingsAverage}</span>

   </div>
   <button onClick={()=>{addProdToCart(prod._id)}} className='btn bg-green-500 w-full'>Add to cart</button> 
 </div>
 </Link>
 </div> 
</>  
})}
    </div>
    </>
  )
}
