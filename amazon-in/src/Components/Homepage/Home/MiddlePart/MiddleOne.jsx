import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import SingleMiddleOne from './SingleMiddleOne'
import style from "./MiddleOne.module.css"
import SingleForUnderfourNine from './SingleForUnderfourNine';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1
    }
  };
  const responsiveone = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 2
    }
  };
const MiddleOne = () => {
    const [bestDeal,setBestDeal]=useState([])
    const [grocery,setGrocery]=useState([])
    const [homeDecore,setHomeDecore]=useState([]);
    const getBestDeal=()=>{
        return axios.get(`https://dummyjson.com/products?limit=10`)
    }
    const getGrocery=()=>{
        return axios.get(`https://dummyjson.com/products?limit=10&skip=20`)
    }
    const getHomeDecore=()=>{
        return axios.get(`https://dummyjson.com/products?limit=10&skip=26`)
    }

    useEffect(()=>{
         getBestDeal().then((res)=>{
            setBestDeal(res.data.products)
            
         })
         getGrocery().then((res)=>{
            setGrocery(res.data.products)
         })
         getHomeDecore().then((res)=>{
            setHomeDecore(res.data.products)
         })
    },[])

  return (
    <>
    <div className={style.mainDiv}><h1>Blockbuster Deals</h1>
        <div className={style.bestDealDiv}>
            <Carousel responsive={responsive}
            slidesToSlide={3}
            >
              {bestDeal.map((el)=>(
                    <div key={el.id}><SingleMiddleOne {...el}/></div>
              ))}
            </Carousel>

          </div>
    </div>
    <div className={style.mainDivOne}><h1>Starting ₹49 | Daily essentials | Amazon Brands & moreSee</h1>
        <div className={style.bestDealDivOne}>
            <Carousel responsive={responsiveone} slidesToSlide={3}>
              {grocery.map((el)=>(
                    <div key={el.id}><SingleForUnderfourNine {...el}/></div>
              ))}
            </Carousel>

          </div>
    </div>
    <div className={style.mainDivOne}><h1>Home decoration items</h1>
        <div className={style.bestDealDivOne}>
            <Carousel responsive={responsiveone} slidesToSlide={3}>
              {homeDecore.map((el)=>(
                    <div key={el.id}><SingleForUnderfourNine {...el}/></div>
              ))}
            </Carousel>

          </div>
    </div>
    </>
  )
}

export default MiddleOne

//https://dummyjson.com/products?limit=10&skip=25