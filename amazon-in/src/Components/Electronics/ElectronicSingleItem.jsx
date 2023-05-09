import React, { useEffect, useState } from 'react';
import Style from "./ElectronicsSingleItem.module.css"
import Navbar from '../Homepage/Navbar/Navbar';

const ElectronicSingleItem = () => {
    let localstoreData=JSON.parse(localStorage.getItem("electronicItem"))||[];
    useEffect(()=>{
    },[localstoreData])
    const [image,setImage]=useState(localstoreData.images[0].image1)
    
    
    const handelclickImg1=()=>{
        setImage(localstoreData.images[0].image1)
    }
    const handelclickImg2=()=>{
        setImage(localstoreData.images[1].image2)
    }
    const handelclickImg3=()=>{
        setImage(localstoreData.images[2].image3)
    }
  return (
    <div>
        <Navbar/>
        <div className={Style.container}>
                <div className={Style.imgMainDiv}>
                    <img src={image} alt="Not-Found" />
                    <div>
                        <img onClick={()=>handelclickImg1()} src={localstoreData.images[0].image1} alt="Not-Found" />
                        <img onClick={()=>handelclickImg2()} src={localstoreData.images[1].image2} alt="Not-Found" />
                        <img onClick={()=>handelclickImg3()} src={localstoreData.images[2].image3} alt="Not-Found" />
                    </div>
                    
                </div>
            <div className={Style.details}>
                <h4>{localstoreData.description ? localstoreData.description : localstoreData.discription}</h4>
                <button>{localstoreData.rating}</button> <span>rating</span>
                <h2>₹ {parseFloat(localstoreData.price).toLocaleString("en-IN")}</h2>
                <p> - {localstoreData.descriptionWithPoint[0] ? localstoreData.descriptionWithPoint[0].dis1 : localstoreData.discriptionWithPoint[0].dis1}</p>
                <p> - {localstoreData.descriptionWithPoint[1] ? localstoreData.descriptionWithPoint[1].dis2 : localstoreData.discriptionWithPoint[1].dis2}</p>
                <p> - {localstoreData.descriptionWithPoint[2] ? localstoreData.descriptionWithPoint[2].dis3 : localstoreData.discriptionWithPoint[2].dis3}</p>
                <p> - {localstoreData.descriptionWithPoint[3] ? localstoreData.descriptionWithPoint[3].dis4 : localstoreData.discriptionWithPoint[3].dis4}</p>
                <img src="https://m.media-amazon.com/images/G/31/AmazonStores/prime._CB458749939_.png" alt="Not-Found" />
                <br/>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
            
            
             
                   
         
            
  )
}

export default ElectronicSingleItem