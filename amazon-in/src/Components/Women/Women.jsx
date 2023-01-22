import React from "react";
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
import { ProductsMainContainer } from "../Fashion/ProductsMainContainer";
import Navbar from "../Homepage/Navbar/Navbar";

export const Women = () => {
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
      <Navbar />
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
          <p>Women</p>
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
      <Box display="flex">
        <Box width="20%"></Box>

        <Box width="85%">
          {/* carousel1 */}
          <Box>
            <Carousel responsive={responsive1}>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/3._SS300_QL85_.jpg"
                ></Image>
                <p>Women's Clothing</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/5._SS300_QL85_.jpg"
                ></Image>
                <p>Footwear</p>
              </Box>

              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/6._SS300_QL85_.png"
                ></Image>
                <p>Jewellery</p>
              </Box>

              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/6._SS300_QL85_.jpg"
                ></Image>
                <p>Watches</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/4._SS300_QL85_.jpg"
                ></Image>
                <p>Beauty</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/8._SS300_QL85_.png"
                ></Image>
                <p>Luggages and Backpack</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/9._SS300_QL85_.png"
                ></Image>
                <p>Handbags</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/10._SS300_QL85_.png"
                ></Image>
                <p>SunGlasses & Frames</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/Kids._SS300_QL85_.jpg"
                ></Image>
                <p>Kid's Fashion</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/amzon-brands._SS300_QL85_.jpg"
                ></Image>
                <p>Amazon Fashion</p>
              </Box>
              <Box textAlign="center">
                <Image
                  textAlign="center"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/Luxury-brands-edited._SS300_QL85_.jpg"
                ></Image>
                <p>Luxury Brands</p>
              </Box>
            </Carousel>
          </Box>
          {/* carousel 2 */}
          <Box>
            <Carousel showDots={true} responsive={responsive2}>
              <Box>
                <Image
                  width="80%"
                  margin="auto"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/WRS22Dec/Eventpage/EOSS/REC/Headers/PC/PC_3000x770-1._SX3000_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  margin="auto"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/WRS22Dec/Eventpage/EOSS/REC/Headers/PC/PC_3000x770-2._SX3000_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  margin="auto"
                  src="https://m.media-amazon.com/images/G/31/img22/Fashion/Event/WRS22Dec/Eventpage/EOSS/REC/Headers/PC/PC_3000x770-4._SX3000_QL85_.jpg"
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
          {/* --- beauty and grooming*/}
          <Box>
            <Heading marginLeft="-20%">Beauty and Grooming</Heading>
            <SimpleGrid columns={[1, 3, 6]}>
              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/beauty/Artboard_1-100._CB606129059_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 30% off
                </Heading>
              </Box>
              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/beauty/Artboard_2-100._CB606129059_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 30% off
                </Heading>
              </Box>
              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/beauty/Artboard_3-100._CB606129059_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 30% off
                </Heading>
              </Box>

              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/beauty/Artboard_4-100._CB606129059_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 30% off
                </Heading>
              </Box>
              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/SBC/womens/SBC-Beauty._CB605680411_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 40% off
                </Heading>
              </Box>
              <Box p="10px" height="80px">
                <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/beauty/Artboard_6-100._CB606129059_.jpg"></Image>
                <Heading p="7px" size="md">
                  upto 10% off
                </Heading>
              </Box>
            </SimpleGrid>
          </Box>
          {/* explore more */}
          <Box bg="#EAEAEA" height="auto" marginTop="200px">
            <Box
              w="90%"
              height="100%"
              bg="white"
              margin="auto"
              marginTop="180px"
            >
              <Heading textAlign="left">explore More</Heading>
              <SimpleGrid columns={[1, 2, 4]} spacing={8}>
                <Box p="10px" height="80px">
                  <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/flip2/kids/Kids_05._CB604949173_.jpg"></Image>
                  <Heading p="7px" size="md">
                    upto 70% off
                  </Heading>
                </Box>
                <Box p="10px" height="80px">
                  <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/flip2/kids/Kids_06._CB604949173_.jpg"></Image>
                  <Heading p="7px" size="md">
                    upto 70% off
                  </Heading>
                </Box>
                <Box p="10px" height="80px">
                  <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/flip2/kids/Kids_02._CB604949173_.jpg"></Image>
                  <Heading p="7px" size="md">
                    upto 70% off
                  </Heading>
                </Box>

                <Box p="10px" height="80px">
                  <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/flip2/kids/Kids_04._CB604949173_.jpg"></Image>
                  <Heading p="7px" size="md">
                    upto 30% off
                  </Heading>
                </Box>
              </SimpleGrid>

              {/* brands in focus */}
              <Box bg="white" marginTop="250px">
                <Heading textAlign="left">Brands in Focus</Heading>
                <SimpleGrid marginTop="30px" columns={[1, 3, 6]} spacing={10}>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2022/Dec/AF/Coop/5._SS400_QL85_.jpg"></Image>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2022/Dec/AF/Coop/ZP2._SS400_QL85_.png"></Image>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2022/Dec/AF/Coop/7._SS400_QL85_.jpg"></Image>
                  </Box>
                </SimpleGrid>
              </Box>

              {/* editors pick */}
              <Box bg="white" marginTop="100px">
                <Heading textAlign="left">Editors pick</Heading>
                <SimpleGrid
                  marginTop="30px"
                  w="95%"
                  marginLeft="10px"
                  columns={[1, 3, 6]}
                  spacing={10}
                >
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/4._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/5._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/ocassions/Artboard_10-100._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/7._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/8._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/ocassions/Artboard_14-100._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                </SimpleGrid>
                <SimpleGrid
                  w="95%"
                  marginTop="180px"
                  marginLeft="10px"
                  columns={[1, 3, 6]}
                  spacing={10}
                >
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/ocassions/Artboard_5-100._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/1._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/ocassions/Artboard_7-100._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/ocassions/Artboard_5-100._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/3._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                  <Box height="80px">
                    <Image src="https://m.media-amazon.com/images/G/31/img22/Fashion/AF/Flips/Winter22/trends/2._SY530_QL85_.jpg"></Image>
                    <Heading p="7px" size="md">
                      Shop Now
                    </Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
            {/* carousel 3 */}
            <Box marginTop="150px">
              <Heading p="7px" size="xl" textAlign="left">
                Featured Store
              </Heading>
              <Carousel responsive={responsive1}>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/Revised_Luxe-brands._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/plus_sizeBAU._SY530_QL85_.jpg"
                  ></Image>
                </Box>

                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/River_Revise._SY530_QL85_.jpg"
                  ></Image>
                </Box>

                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/dba_copy_BAU._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/Sorts-worls._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/4_Gift-central._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/Character-stpre._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/featuredstore/River_Revise._SY530_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/Kids._SS300_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/amzon-brands._SS300_QL85_.jpg"
                  ></Image>
                </Box>
                <Box textAlign="center" p="10px">
                  <Image
                    textAlign="center"
                    src="https://m.media-amazon.com/images/G/31/img22/Fashion/Flips/Winterflip2/Halos/Luxury-brands-edited._SS300_QL85_.jpg"
                  ></Image>
                </Box>
              </Carousel>
            </Box>
          </Box>
          <Heading size="sm" p="20px" border="1px solid black">
            1-12 of over 200,000 results for Women
          </Heading>
          <ProductsMainContainer></ProductsMainContainer>
        </Box>
      </Box>
    </div>
  );
};
