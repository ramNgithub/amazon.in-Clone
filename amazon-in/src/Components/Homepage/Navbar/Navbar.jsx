import React from 'react'
import logo from "../Homepageimgs/ShopBaglogo.png"
import {SearchIcon} from "@chakra-ui/icons";
import cart from "../Homepageimgs/shopping-cart.png"
import "./Navbar.css"
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
function Navbar({username}) {
    const navigate=useNavigate()

    const handlesignout=()=>{
        // const auth = getAuth();
        if(username){
            signOut(auth).then(() => {
                navigate("/login")
                // Sign-out successful.
        }).catch((error) => {
            alert("Somethig wrong :-",error )
   // An error happened.
         });
        }
     }

     
   return (
    <div className='nav-main-div'>
            <div>
                <img className='ShopBag-logo' src={logo} alt="amazone-logo"/>
            </div>
         
       <div className='nav-main-div-main'>

            <div className='nav-main-div-one'>
                <input className='nav-search-bar' type="text" />
                <SearchIcon className='search-icon' padding={7} w={30} h={30} bg={"#F6AD55"}/>
                <div className='ind-flag-div'>
                    <img width={"20px"} src="https://www.seekpng.com/png/small/590-5909867_indian-flag-india-flag-icon-square.png" alt="flag" />
                    <p>EN</p>
                </div>
                <button>Account</button>
                <button>Return <br/> & Order</button>
                <div className='nav-cart'>
                    <p>0</p>
                    <img src={cart} alt="Cart-icon" />
                </div>
            </div>
        
            <div className='nav-main-div-two'>
           
                <div className='nav-main-div-two-elements'>
                    <p>All</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Amazon miniTv</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Best sellers</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Mobiles</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Today's Deals</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Customer Service</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Electronics</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Prime</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Fashion</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Amazon Pay</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>Home & Kitchen</p>
                </div>
                <div className='nav-main-div-two-elements'>
                    <p>{username}</p>
                </div>
                <button onClick={handlesignout}>Signout</button>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar;