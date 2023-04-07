import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import "./Cart.css";
import Footer from "../Homepage/Home/Footer/Footer";
import { Link } from "react-router-dom";
import style from "../Homepage/Home/MiddlePart/MidLower/MiddleLower.module.css";

const Cart = () => {
  const [count, setCount] = useState(0);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalAmount = 0;

  cart.map((el) => (totalAmount = totalAmount + el.price));

  const removeItem = (id) => {
    let updatedcart = cart.filter((el) => {
      return el.id != id;
    });
    setCount((prev) => prev + 1);

    localStorage.setItem("cart", JSON.stringify(updatedcart));
  };

  const handleCartclear = () => {
    let cartAfterClearing = [];
    localStorage.setItem("cart", JSON.stringify(cartAfterClearing));
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [totalAmount]);

  return (
    <>
      <Navbar />
      <div>
        <h4>Cart</h4>
      </div>

      <div className="cart">
        <div className="Box"></div>

        {cart == "" ? (
          <div className="empty">
            <div className="signin">
              <div className={style.singinbtn}>
                <Link to="/login">
                  <button className={style.signupbtn}>login</button>
                </Link>
              </div>
            </div>
            <div className="message">
              <h2>Your Amazon Cart is empty.</h2>
              <p>
                Check your Saved for later items below or{" "}
                <Link to="/">continue shopping</Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="cartdiv">
            {cart.map((el, index) => (
              <div className="cartmap" key={el.id}>
                <div>
                  <img src={el.image} alt="" />
                </div>
                <div>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                  <p>Brand: {el.brand}</p>
                  <h4>PRICE: ${el.price}.00</h4>
                </div>
                <div>
                  <DeleteIcon onClick={() => removeItem(el.id)} color="error" />
                </div>
              </div>
            ))}
            <div className="total">
              <button onClick={handleCartclear}>Clear Cart</button>
              <h4> Cart total: $ {totalAmount}.00 </h4>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;
