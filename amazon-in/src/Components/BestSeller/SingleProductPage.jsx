import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import "./SingleProductPage.css";

//experimental

import axios from "axios";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../Homepage/Home/Footer/Footer";

const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState(0);

  //experimental

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
    },
  };
  const [bags, setBags] = useState([]);

  const getSPhones = () => {
    return axios.get(`https://dummyjson.com/products/category/womens-bags`);
  };

  const newProduct = JSON.parse(localStorage.getItem("product")) || {};
  // setSingleProduct(newProduct);
  // console.log(newProduct);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const handleClick = (newProduct) => {
    cart.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("added to cart");
  };

  useEffect(() => {
    setSingleProduct((prev) => prev + 1);

    //experimental

    getSPhones().then((res) => {
      console.log(res);
      setBags(res.data.products);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="singleProduct">
        <div className="left">
          <img src={newProduct.thumbnail} alt="" />
        </div>
        <div className="right">
          <h1>{newProduct.title}</h1>
          <h3>{newProduct.description}</h3>
          <p className="details">Brand: {newProduct.brand}</p>
          <p className="details">rating: {newProduct.rating}</p>
          <h2>Price: ${newProduct.price}.00</h2>
          <button onClick={() => handleClick(newProduct)} className="addcart">
            Add to Cart
          </button>
          <button className="buynow">Buy Now</button>
        </div>
        <div className="extra"></div>
      </div>
      <div>
        <div>
          <h2> Bestsellers in Bags </h2>
        </div>
        <div>
          <Carousel responsive={responsive}>
            {bags.map((el) => (
              <div key={el.id}>
                <ProductCard {...el} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProductPage;
