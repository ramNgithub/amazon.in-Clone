import React from 'react'
import "./ProductCard.css";
// import {Button} from "@mui/material"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router';


const ProductCard = (el) => {
  const navigation=useNavigate();
    const handleClick = (el) =>{
        localStorage.setItem("product",JSON.stringify(el));
       navigation("/singleproduct")  
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
