import React, { useEffect, useState } from 'react'
import Navbar from '../Homepage/Navbar/Navbar';
import "./SingleProductPage.css";

const SingleProductPage = () => {
    const [singleProduct , setSingleProduct] = useState(0);

    const newProduct = JSON.parse(localStorage.getItem("product")) || {};
    // setSingleProduct(newProduct);
    // console.log(newProduct);
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const handleClick = (newProduct) =>{
        cart.push(newProduct);
      localStorage.setItem("cart" , JSON.stringify(cart));
      alert("added to cart");
    }
    useEffect(()=>{
       setSingleProduct(singleProduct+1);
    },[newProduct])
   return (
    <>
    <Navbar/>
    <h4>productInfo</h4>
    <div className='singleProduct'>
        <div className='left'>
           <img src={newProduct.thumbnail} alt="" />
        </div>
        <div className='right'>
          <h1>{newProduct.title}</h1>
          <h3>{newProduct.description}</h3>
          <h2>${newProduct.price}.00</h2>
          <button onClick={()=>handleClick(newProduct)}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
    </div>
    </>
  )
}

export default SingleProductPage
