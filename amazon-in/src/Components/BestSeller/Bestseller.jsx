import React from 'react'
import "./BestSeller.css";
import ProductCard from './ProductCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Divider } from '@chakra-ui/react'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1
  }
};
const Bestseller = () => {
  return (
    <>
    <div className='Header'>
       <p>Amazon Bestsellers</p>
       <p>Our most popular products based on sales. Updated frequently.</p>
    </div>
    <div className='Midpart'>
      <div>
        <h4>Any Department</h4>
        <p>Amazon Launchpad</p>
        <p>Amazon Renewed</p>
        <p>Apps for Android</p>
        <p>Baby Products</p>
        <p>Bags, Wallets and Luggage</p>
        <p>Beauty</p>
        <p>Books</p>
        <p>Car & Motorbike</p>
        <p>Clothing & Accessories</p>
        <p>Computers & Accessories</p>
        <p>Electronics</p>
        <p>Gift Cards</p>
        <p>Grocery & Gourmet Foods</p>
        <p>Health & Personal Care</p>
        <p>Home & Kitchen</p>
        <p>Home Improvement</p>
        <p>Industrial & Scientific</p>
        <p>Kindle Store</p>
        <p>Movies & TV Shows</p>
        <p>Music</p>
        <p>Musical Instruments</p>
        <p>Office Products</p>
        <p>Pet Supplies</p>
        <p>Shoes & Handbags</p>
        <p>Software</p>
        <p>Sports, Fitness & Outdoors</p>
        <p>Toys & Games</p>
        <p>Video Games</p>
        <p>Watches</p>

      </div>
      {/* <Divider orientation='vertical' /> */}
      <div className='products'>
        <div>
          <div>
           <p> Bestsellers in Bags, Wallets and Luggage </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div>
          <div>
           <p> Bestsellers in Video Games </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div>
          <div>
           <p> Bestsellers in Music </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div>
          <div>
           <p> Bestsellers in Computers & Accessories </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div>
          <div>
           <p> Bestsellers in Gift Cards </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div>
          <div>
           <p> Bestsellers in Watches </p>
          </div>
          <div className='slider'>
            <Carousel responsive={responsive}>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
              <div><ProductCard/></div>
            </Carousel>;

          </div>
        </div>
        <div className='footinfo'>
          <h3>About Bestsellers</h3>
          <p>These frequently updated lists contain bestselling items.</p>
        </div>
        
       
      </div>
    </div>
    </>
  )
}

export default Bestseller

