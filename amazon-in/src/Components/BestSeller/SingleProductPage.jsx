import React, { useState } from 'react'

const SingleProductPage = () => {
    // const [singleProduct , setSingleProduct] = useState({});

    const newProduct = JSON.parse(localStorage.getItem("product"));
    // setSingleProduct(newProduct);
    // console.log(newProduct);
  return (
    <div>
        {/* Single Product data will apear here */}
    </div>
  )
}

export default SingleProductPage
