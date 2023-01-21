import React from "react";
// import styles from "./Fashion.module.css";
import {
  Box,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Select,
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MultiCarousel } from "./MultiCarousel";
import { ProductsMainContainer } from "./ProductsMainContainer";
import { Link } from "react-router-dom";

export const Fashion = () => {
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Box
        bg="white"
        boxShadow="xl"
        w="100%"
        p={4}
        color="black"
        textAlign="left"
        height="60px"
        display="flex"
        justifyContent="space-between"
      >
        <Image
          src="https://m.media-amazon.com/images/G/31/IMG17/Fashion/January/Ingresses/Subnav/Amazon-fashion-logo._CB485923938_.png"
          alt="Amazon fashion"
          height="70px"
          paddingBottom="25px"
        />
        {/* This is the Box */}
        <Box display="flex" gap="40px">
          <Link to="/women">
            <p>Women</p>
          </Link>
          <p>Men</p>
          <p>Kids</p>
          <p>Bag & luggage</p>
          <p>Sportswear</p>
          <p>Sales & Deals</p>
          <div>
            <h3 style={{ color: "#007185" }}>30 DAY RETURNS</h3>
            <p>Restrictions Apply</p>
          </div>
        </Box>
      </Box>
      {/* main container */}
      <Box display="flex">
        <Box width="20%"></Box>

        <Box width="80%">
          {/* Carousel1 */}
          <Box>
            <Carousel responsive={responsive1}>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/2._SS300_QL85_.png"
                ></Image>
                <p>Women's Clothing</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/1._SS300_QL85_.png"
                ></Image>
                <p>Men's Clothing</p>
              </Box>

              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/4._SS300_QL85_.png"
                ></Image>
                <p>Footwear</p>
              </Box>

              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/7._SS300_QL85_.png"
                ></Image>
                <p>Jewellery</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/5._SS300_QL85_.png"
                ></Image>
                <p>Luggage & Backpacks</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/6-._SS300_QL85_.png"
                ></Image>
                <p>Watches</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/3._SS300_QL85_.png"
                ></Image>
                <p>Beauty</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/8._SS300_QL85_.png"
                ></Image>
                <p>Handbags</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/9._SS300_QL85_.png"
                ></Image>
                <p>Kid's Fashion</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/10._SS300_QL85_.png"
                ></Image>
                <p>SunGlasses & Frames</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Halo/Amazon._SS300_QL85_.png"
                ></Image>
                <p>Amazon Fashion</p>
              </Box>
            </Carousel>
          </Box>

          {/* 200 off */}
          <Box bg="#d4d4d4">
            <Box>
              <Image
                margin="auto"
                width="80%"
                src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Cashaback/banner1._CB615765745_.gif"
              ></Image>
            </Box>

            {/* carousel 2 */}
            <Box>
              <Carousel showDots={true} responsive={responsive2}>
                <Box>
                  <Image
                    width="80%"
                    margin="auto"
                    src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/Header/unrec__pc_day1._SX3000_QL85_.jpg"
                  ></Image>
                </Box>
                <Box>
                  <Image
                    width="80%"
                    margin="auto"
                    src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/topbanner/PC/Steal-deals-Header-3000x770._SX3000_QL85_.jpg"
                  ></Image>
                </Box>
                <Box>
                  <Image
                    width="80%"
                    margin="auto"
                    src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Event/stealdealspage/BxGy-Header-3000x770._SX3000_QL85_.jpg"
                  ></Image>
                </Box>
                <Box>
                  <Image
                    width="80%"
                    margin="auto"
                    src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Event/stealdealspage/coupon-Header-3000x770._SX3000_QL85_.jpg"
                  ></Image>
                </Box>
              </Carousel>
            </Box>

            {/* sbi */}

            <Box>
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/JANART2023/BankStripe/Event_Bank_Stripe_PC.jpg"></Image>
            </Box>
          </Box>

          {/* section 1 */}
          {/* Womens */}
          <Heading marginLeft="-20%">Women's Clothing</Heading>
          <SimpleGrid columns={[2, 4, 6]} spacing={5}>
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_03.jpg"></Image>
              <Heading size="md">under ₹399</Heading>
            </Box>
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_04.jpg"></Image>
              <Heading size="md">under ₹399</Heading>
            </Box>
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_05.jpg"></Image>
              <Heading size="md">under ₹299</Heading>
            </Box>
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_06.jpg"></Image>
              <Heading size="md">under ₹599</Heading>
            </Box>
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_07.jpg"></Image>
              <Heading size="md">under ₹399</Heading>
            </Box>
            {/* Mens */}
            <Box bg="tomato" height="80px">
              <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/women/unrec/1-Women_08.jpg"></Image>
              <Heading size="md">under ₹399</Heading>
            </Box>
          </SimpleGrid>
          <Box marginTop="120px">
            <Heading marginLeft="-20%">Men's Clothing</Heading>
            <SimpleGrid columns={[2, 4, 6]} spacing={5}>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_03.jpg"></Image>
                <Heading size="md">under ₹399</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_04.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_05.jpg"></Image>
                <Heading size="md">under ₹799</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_06.jpg"></Image>
                <Heading size="md">under ₹399</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_07.jpg"></Image>
                <Heading size="md">under ₹899</Heading>
              </Box>

              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/men/unrec/2-men_08.jpg"></Image>
                <Heading size="md">under ₹1499</Heading>
              </Box>
            </SimpleGrid>
          </Box>

          {/* mens shoes */}

          <Box marginTop="100px">
            <Heading marginLeft="-20%">Men's Shoes</Heading>
            <SimpleGrid columns={[2, 4, 6]} spacing={5}>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_03.jpg"></Image>
                <Heading size="md">starting ₹149</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_04.jpg"></Image>
                <Heading size="md">starting ₹149</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_05.jpg"></Image>
                <Heading size="md">under ₹799</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_06.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_07.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>

              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Mensshoes/1-SBC-men-shoe_08.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
            </SimpleGrid>
          </Box>

          {/* womens shoes  */}

          <Box marginTop="100px">
            <Heading marginLeft="-20%">Women's Shoes</Heading>
            <SimpleGrid columns={[2, 4, 6]} spacing={5}>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_03.jpg"></Image>
                <Heading size="md">starting ₹149</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_04.jpg"></Image>
                <Heading size="md">starting ₹149</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_05.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_06.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_07.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>

              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Womensshoes/Eng/1-SBC_08.jpg"></Image>
                <Heading size="md">under ₹799</Heading>
              </Box>
            </SimpleGrid>
          </Box>

          {/* trendy fashion  */}
          <Box marginTop="100px">
            <Heading marginLeft="-20%">Trendy fashion accessories</Heading>
            <SimpleGrid columns={[1, 2, 3]}>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_07.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_12.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_17.jpg"></Image>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[1, 2, 3]} marginTop="100px">
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_09.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_14.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Accessories/Eng_19.jpg"></Image>
              </Box>
            </SimpleGrid>
          </Box>

          {/* brands in focus */}
          <Box bg="#d4d4d4" height="500px" marginTop="130px">
            <Heading marginLeft="-20%">Brands in focus</Heading>

            <Box width="90%" height="450px" marginLeft="5%" bg="white">
              {/* brands in focus box 1 */}
              <Box>
                <SimpleGrid columns={[2, 4, 6]} spacing={5}>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/campus_new._SY530_QL85_.jpg"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Van-heusan_15._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Lakme_20._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Zaveri-Pearls_29._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Safari_3._SY530_QL85_.png"></Image>
                  </Box>

                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Timex_28._SY530_QL85_.png"></Image>
                  </Box>
                </SimpleGrid>
              </Box>
              {/* brands in focus box 2 */}
              <Box marginTop="150px">
                <SimpleGrid columns={[2, 4, 6]} spacing={5}>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Nivea_14._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Puma_723._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img21/Eyewear/2023/Jan/Art/Coop/Lenskart_2._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Adidas_13._SY530_QL85_.png"></Image>
                  </Box>
                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/L-Oreal_11._SY530_QL85_.png"></Image>
                  </Box>

                  <Box bg="tomato" height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Coop2/v3/Crocs_5._SY530_QL85_.png"></Image>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
          {/* brands in focus end */}

          {/* Beauty and Grooming  */}
          <Box>
            <Heading marginLeft="-20%">Beauty and Grooming</Heading>
            <SimpleGrid columns={[1, 2, 3]}>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_03.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_04.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_05.jpg"></Image>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={[1, 2, 3]} marginTop="100px">
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_06.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_07.jpg"></Image>
              </Box>
              <Box height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/SBC/beauty/unrec/english/Top-Picks-in-Beauty--Grooming--_08.jpg"></Image>
              </Box>
            </SimpleGrid>
          </Box>

          {/* kids fashion */}
          <Box marginTop="100px">
            <Heading marginLeft="-20%">Kid's fashion</Heading>
            <SimpleGrid columns={[2, 4, 6]} spacing={5}>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_03.jpg"></Image>
                <Heading size="md">under ₹399</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_04.jpg"></Image>
                <Heading size="md">under ₹399</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_05.jpg"></Image>
                <Heading size="md">under ₹399</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_06.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_07.jpg"></Image>
                <Heading size="md">under ₹199</Heading>
              </Box>

              <Box bg="tomato" height="80px">
                <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Unrec/SBCs/Kids/1-SBC-kids_08.jpg"></Image>
                <Heading size="md">under ₹499</Heading>
              </Box>
            </SimpleGrid>
          </Box>
          {/* multicarousel */}
          <MultiCarousel></MultiCarousel>
          <Box display="flex">
            <Box width="22%">{/* sorting section */}</Box>
            <Box width="80%" p="20px" marginLeft="-50px">
              {/* Deals on Amazon Fashion & Beauty */}

              <Box
                paddingBottom="15px"
                display="flex"
                justifyContent="space-between"
              >
                <Heading textAlign="left">
                  Deals on Amazon Fashion & Beauty
                </Heading>
                <Select
                  placeholder="Sort by: featured"
                  fontSize="xs"
                  w="150px"
                  h="20px"
                >
                  <option value="option1">Discount - low to high</option>
                  <option value="option2">Discount - high to low</option>
                  <option value="option3"> price - low to high </option>
                  <option value="option4"> price - high to low </option>
                </Select>
              </Box>

              <ProductsMainContainer />
            </Box>
          </Box>
          {/* 80%box end */}
        </Box>

        {/* write everything above this */}
      </Box>
    </div>
  );
};
