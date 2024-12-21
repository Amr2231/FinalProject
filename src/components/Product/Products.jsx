import React, { useContext } from 'react'
import Style from "./Product.module.css"
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';
import UseHook from '../Hooks/UseHook';
import { WishlistCounterContext } from '../Context/Wishlist';
import LikeButton from '../LikeButton/LikeButton';


export default function Products() {

  const [favorites, setFavorites] = useState([]);  

 const toggleFavorite = (productId) => {
  setFavorites((prevFavorites) =>
    prevFavorites.includes(productId)
      ? prevFavorites.filter((id) => id !== productId) 
      : [...prevFavorites, productId] 
  );
};






  let{addToCart} =  useContext(CartContext)
   const [data, setdata] = useState([]); 
    const [records, setrecords] = useState(data); 
  useEffect(() => {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(response =>{
      setdata(response.data.data)
      setrecords(response.data.data)
    }).catch(error =>{console.log(error);})
  },[])
  const Filter = (event) => {
  console.log((event.target.value.toLowerCase()))
  setrecords(data?.filter(data=> data.category.name.toLowerCase().includes(event.target.value.toLowerCase()) || data.category.name.toLowerCase().includes(event.target.value.toLowerCase()) || data.brand.slug.toLowerCase().includes(event.target.value)      
      ))
  }
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
  let{addToWishlist} = useContext(WishlistCounterContext)
  async function addProdTowishlist(id){
    let {data} = await addToWishlist(id);
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
    
        return <>
        <div  className='row gap-y-2'>
        <div className='mb-3 p-3 pl-5 text-gray-600 rounded w-full border-gray-400 text-xl'>
<input onChange={Filter} type="search" name="search" placeholder="Search...." className="p-3 pl-5 text-gray-600 rounded w-full border-gray-400 text-xl"  />

</div>
      {records.map((prod)=>{ return <> 
     
        <div key={prod.id} className='w-72 px-2 max-md:w-full relative max-lg:left-16 max-xl:left-4 max-sm:left-1 group'>
    <div className='cursor-pointer hover:shadow-md  hover:shadow-emerald-600 transition-all duration-300 hover:rounded-md p-5 w-full '>
    <Link to= {`/productDeatails/${prod.id}/${prod.category.name}`}>
    
      <img src={prod.imageCover} alt="" />
      <span className='text-green-500 text-xl'>{prod.category.name}</span>
      <h4>{prod.title.split(" ").slice(0,2).join(' ')}</h4>
      <div className='row justify-between'>
        <span>{prod.price}EGB</span>
        <span><i className='fa-solid fa-star text-yellow-200'></i>{prod.ratingsAverage}</span>
      </div>
      
    
    
    </Link>
    <div  className='flex  justify-center gap-1 '>
   <button onClick={()=>{addProdToCart(prod._id)}} className='btn opacity-0 group-hover:opacity-100 translate-y-14  transition-all duration-300 group-hover:translate-y-2 bg-green-500 w-full mb-5'>Add to cart</button>
   <LikeButton productId={prod._id} onLikeChange={()=>{addProdTowishlist(prod._id)}} />
   </div>
    </div>
    </div>
        
      </>  
     })}
    
      </div>
      
        </> }
      
     
    

    