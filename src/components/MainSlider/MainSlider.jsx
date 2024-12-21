import React from 'react'
import { useEffect } from 'react';
import Slide1 from '../../assets/grocery-banner-2.jpg'
import Slide2 from '../../assets/grocery-banner.jpg'
import Slide3 from '../../assets/slider-2.jpg'
import Slide4 from '../../assets/slider-image-1.jpg'
import Slide5 from '../../assets/slider-image-2.jpg'
import Slider from 'react-slick'


export default function MainSlider() {
  var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    useEffect(()=>{
      
    },[])
  return (
    <>
    <div className='row flex justify-center items-center flex-wrap max-sm:flex-col'>
    <div className='w-1/4 max-sm:w-full max-sm:mb-6'>
    <Slider {...settings} >
    <div className=' flex justify-center items-center self-center'>
    <img className=' h-[400px] ' src={Slide3} alt="" />
    </div>
    <img className='h-[400px] 'width={300} src={Slide1} alt="" />
    <img className='h-[400px] ' src={Slide2} alt="" />
  </Slider>
  
  </div>
    <div className='w-1/4 max-sm:w-full'>
    <img className='h-[200px]' src={Slide4} alt="" />
    <img className='h-[200px]' src={Slide5} alt="" />
    </div>
 
    </div>
    </>
  )
}
