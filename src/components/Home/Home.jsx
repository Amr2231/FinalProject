import React, { useContext } from 'react'
import Style from "./Home.module.css"
import { useState } from 'react';
import RecentProducts from '../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';
export default function Home() {
    let [count , SetCount] = useState(0);


  return (<>
          <Helmet>
                <title>Home Page</title>
            </Helmet>
  <div className='container  px-10 mx-auto'>
    <MainSlider/>
    </div>
    <CategoriesSlider/>
    
  <RecentProducts/>

  
  </>


  )
}
