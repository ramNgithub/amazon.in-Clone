import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from '../BestSeller/ProductCard';
import Navbar from '../Homepage/Navbar/Navbar'
import "./LaunchPad.css";

const LaunchPad = () => {
    const [products , setProducts] = useState([]);

    const getProducts = () =>{
        return axios.get(`https://dummyjson.com/products`)
    }

    useEffect(()=>{
      getProducts().then((res)=>{
          setProducts(res.data.products);
      })
    },[])
    console.log(products)
  return (
    
    <div>
        <Navbar/>
        <div className='logo'>
           <img src="https://m.media-amazon.com/images/G/31/launchpad/subnav/launchpad_lp_nav-logo._CB485945317_.png" alt="" />
           <p>BODY</p>
           <p>FOOD</p>
           <p>ELECTRONICS</p>
           <p>HOME</p>
           <p>STARTUPS FROM INDIA</p>
        </div>
        <div className='header'>
            <h1>Amazon Bestsellers</h1>
            <h4>Our most popular products based on sales. Updated frequently.</h4>
        </div>
        <div className='midpart'>
           <div className='leftbar'>
              <p>Any Deaprtment</p>
              <h4>Amazon Launchpad</h4>
              <p>Body</p>
              <p>Collections</p>
              <p>Electronics</p>
              <p>Fashion Accessories</p>
              <p>Food</p>
              <p>Home</p>
              <p>Toys & Baby</p>
           </div>
           
           <div className='rightbar'>
           <h1>Bestsellers in Amazon Launchpad</h1>
           <div>
              {
                products.map((el)=>(
                    <div key={el.id}><ProductCard {...el}/></div>
                ))
              }
              </div>
           </div>
        </div>
      
    </div>
  )
}

export default LaunchPad
