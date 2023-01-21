import React from 'react'
import "./ProductCard.css";
// import {Button} from "@mui/material"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const ProductCard = (el) => {
    const handleClick = (el) =>{
        localStorage.setItem("product",JSON.stringify(el));
        
    }
  return (
    <div className='card' onClick={()=>handleClick(el)}>
        <img src={el.thumbnail} alt="" />
        <p>{el.description}</p>
        <div>
        {/* <CurrencyRupeeIcon  fontSize="small"/> */}
        <p> $ {el.price}.00 </p>
        </div>
        {/* <button>
           Add to cart 
        </button> */}
    </div>
  )
}

export default ProductCard
