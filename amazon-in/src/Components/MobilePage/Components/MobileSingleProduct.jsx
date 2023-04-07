import {
  Box,
  Button,
  Center,
  Code,
  Flex,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productsArray } from "../Utils/data";
import { FooterChakra } from "../../Homepage/Home/Footer/FooterChakra";

import axios from "axios";
import ProductCard from "../../BestSeller/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Footer from "../Homepage/Home/Footer/Footer";

const MobileSingleProduct = () => {
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
  const [smartPhones, setSmartPhones] = useState([]);

  const getSmartPhones = () => {
    return axios.get(`https://dummyjson.com/products/category/smartPhones`);
  };

  const [qty, setQty] = useState();
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const singleProduct = productsArray.find((el) => el.id === +id);
    setProduct(singleProduct);
    setQty(singleProduct.quantity);
    setIsLoading(false);

    getSmartPhones().then((res) => {
      console.log(res);
      setSmartPhones(res.data.products);
    });
  }, []);

  const handleQuantityChange = (val) => {
    setQty((prev) => prev + val);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push({ ...product, quantity: qty });
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Flex
        flexDir={["column", "column", "row", "row"]}
        maxW={"7xl"}
        my={4}
        mx={[4, 4, 4, 4, "auto"]}
        p={4}
        gap={4}
        border={"1px solid #eeee"}
        borderRadius={"lg"}
        boxShadow={"base"}
        cursor="pointer"
        bgColor={"#fff"}
      >
        <Center flex={1}>
          <Img
            src={product.image}
            alt="product"
            objectFit={"contain"}
            h="400px"
            w={"400px"}
          />
        </Center>
        <Stack gap={2} flex={1}>
          <Flex flexDir={"column"} gap={2} flex={1}>
            <Text fontWeight={700} fontSize={"1.7rem"}>
              {product.title}
            </Text>
            <Text fontSize={"1.2rem"}>
              <span style={{ fontWeight: "600" }}>Brand:&nbsp;</span>
              {product.brand}
            </Text>
            <Flex fontSize={"1.2rem"} align={"center"}>
              <Flex>
                <Text fontWeight={"600"}>Rating:&nbsp;</Text>
                {Array(product.rating)
                  .fill()
                  .map((star, i) => (
                    <span key={`${Date.now()}-${i}`}>⭐️</span>
                  ))}
              </Flex>
              <Text>&nbsp;({product.reviewsCount})</Text>
            </Flex>
            <Text fontSize={"1.7rem"} fontWeight="bold">
              <span style={{ fontWeight: "600" }}>Price:&nbsp;</span>₹{" "}
              {product.price}
            </Text>
            <Text fontWeight="bold" color={"gray"} letterSpacing={1}>
              Use coupon code <Code>SHOP15</Code> at checkout page to get 15%
              discount.
            </Text>
            <Flex gap={1}>
              <Button
                isDisabled={qty <= 1}
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </Button>
              <Button>{qty}</Button>
              <Button
                isDisabled={qty === 10}
                onClick={() => handleQuantityChange(1)}
              >
                +
              </Button>
            </Flex>
          </Flex>
          <Button
            bgColor="#F6AD55"
            w={"150px"}
            fontWeight={"bold"}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Stack>
      </Flex>
      <Box>
        <Carousel responsive={responsive}>
          {smartPhones.map((el) => (
            <Box key={el.id}>
              <ProductCard {...el} />
            </Box>
          ))}
        </Carousel>
      </Box>
      <FooterChakra />
    </>
  );
};

export default MobileSingleProduct;
