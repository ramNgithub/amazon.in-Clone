import React, { useEffect, useState } from 'react'
import "./Cart.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Homepage/Navbar/Navbar';

const Cart = () => {
    const [count , setCount] = useState(0);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalAmount =0;

    cart.map((el)=>(
     totalAmount = totalAmount + (el.price)
      
    ))

    const removeItem = (id) =>{
        // console.log(id)
        // console.log(cart)
     let updatedcart =  cart.filter((el)=>{
        return el.id != id;
      });
    //   console.log(updatedcart)
      localStorage.setItem("cart" , JSON.stringify(updatedcart));
    }

    const handleCartclear = () =>{
        let cartAfterClearing = [];
        localStorage.setItem("cart" , JSON.stringify(cartAfterClearing));
    }
   useEffect(()=>{
    setCount(count +1)
   },[cart])
   
  return (
    <>
    <Navbar/>
    <div>
        <h4>Cart</h4>
    </div>
    <div className='cart'>
        {
            cart == [] ? 
            <div className='empty'>
            <h2>Your Amazon Cart is empty.</h2>
            <p>Check your Saved for later items below or <a href="">continue shopping</a></p>
            </div>
            
            :
           
            <div>
                <div className='table'>
                    <p>image</p>
                    <p>title</p>
                    <p>price</p>
                    <p>remove</p>
                </div>
            {cart.map((el , index)=>(
                <div className='cartmap' key={el.id}>
                    <img src={el.thumbnail} alt="" />
                    <p>{el.title}</p>
                    <h4>${el.price}.00</h4>
                    <DeleteIcon onClick={()=>removeItem(el.id)} color="error"/>
                </div>
            ))}
            <div className='total'>
                <button onClick={handleCartclear}>Clear Cart</button>
                <h4> Cart total: $ {totalAmount}.00 </h4>
               
            </div>
        </div>
            

        }
        
    </div>
    </>
  )
}

export default Cart
