import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Slider from "react-slick";

export default function CategoriesSlider() {
  let [Categoriesprod , SetCategoriesprod] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          className:"w-full"
        }
      }
    ]
  
};
  async function getCategories(){
    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(data.data);
    
     SetCategoriesprod(data.data);
    }
    useEffect(()=>{
      getCategories()
    },[])
  return (<>
    <h2>Shop Popular Categories</h2>
    <Slider {...settings}>
     {Categoriesprod.map((prod)=>{return <>
     <img src={prod.image} className='h-[200px] max-sm:h-[300px] max-sm:w-full' alt="" />
     <h6 className='text-center'>{prod.name}</h6>
     </>})}
    </Slider>
    </>
  )

}
