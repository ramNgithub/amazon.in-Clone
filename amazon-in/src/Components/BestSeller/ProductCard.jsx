import React from 'react'
import "./ProductCard.css";
// import {Button} from "@mui/material"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard = () => {
  return (
    <div className='card'>
        <img src="https://images-eu.ssl-images-amazon.com/images/I/81KEKEDFUcL._AC_UL450_SR450,320_.jpg" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, ad.</p>
        <div>
        <CurrencyRupeeIcon  fontSize="small"/>
        <h4> 1000 </h4>
        </div>
        <button>
           Add to cart 
        </button>
    </div>
  )
}

export default ProductCard
