import React from "react";
import { Box, Image, SimpleGrid, Heading } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const MultiCarousel = () => {
  const multiCarousel = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <Box bg="#d4d4d4" marginTop="150px">
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Offers you can't miss
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/image_5._SY530_QL85_.png"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY02._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY08._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/Shoes._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY04._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY05._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY09._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY05._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY11._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY03._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/Contingency/CONTINGENCY10._SY530_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multicarousel 2  */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Bag more Deals
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Womens_Clothing._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Hindi/V1/V2/jewellery-and-gold-coins._SS400_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Mens_Clothing._SS400_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Hindi/V1/V2/footwear._SS400_QL85_.png"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/beauty_eng._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Hindi/V1/V2/luggage._SS400_QL85_.png"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Hindi/V1/V2/kids._SS400_QL85_.png"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Amazon_brands._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Luxury_beauty__Perfumes_v1._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/V1/sunglasses._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Stealdeals/Top-premium._SS400_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>

        {/* multicarousel 3 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Brands to love
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/ANDE._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Asian._CB615741091_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/allSo._CB615727907_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/GD._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Maybelline._CB615741091_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Nivea._CB615741091_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/PU._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/safari._CB615742931_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Timewear._CB615742931_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/ZP._CB615741091_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multicarousel 4 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Customers' most loved picks
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/WC._SS400_QL85_.png"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Womens_Footwear._SS400_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/MC._SS400_QL85_.png"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Mens_Footwear._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Beauty__Make-up._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Backpacks_luggage__more._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Beauty__Make-up._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Backpacks_luggage__more._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Watches__smartwatches._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Jewellery._SS400_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/CML/Sunglasses__frames._SS400_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>

        {/* multicarousel 5 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Clearance Store
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/1._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/4._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/2._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/3._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/8._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/5._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/5._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/6._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/7._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/9._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Clearence/10._SY530_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multicarousel 6 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Brands to bag
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/ANDE._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Asian._CB615741091_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/allSo._CB615727907_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/GD._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Maybelline._CB615741091_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Nivea._CB615741091_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/PU._CB615727907_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/safari._CB615742931_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/Timewear._CB615742931_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="80%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/unrec/topbrands1/mock/ZP._CB615741091_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multicarousel 7 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Best of winter styles
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Jackets_-_MA._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Jackets_-_WA._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sneakers_for_men._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sneakers_for_women._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sweatshirt__Hoodies_-_MA._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sweatshirt__Hoodies_-_Wa._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sweatshirt__Hoodies_-_MA._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Sweatshirt__Hoodies_-_Wa._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Skincare_Essentials._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/haircare_essentials._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/winterscroll/Jackets_Sweatshirts_for_Kids._SY530_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multiCarousel 8 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Handlooms of India
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Khadi_._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Khadi_Men._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Ikat._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Ikat_Men._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Banarasi._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Chikankari._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Kanjivaram._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Kanjivaram._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Chanderi._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Chanderi._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/Handloom/Kalamkari._SY530_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
        {/* multiCarousel 9 */}
        <Box bg="white" width="90%" margin="auto" marginTop="30px">
          <Heading textAlign="left" size="md">
            Featured Stores
          </Heading>
          <Box p="10px">
            <Carousel responsive={multiCarousel}>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/1._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/4._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/5._SY530_QL85_.jpg"
                ></Image>
              </Box>

              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/6._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/Fashion--accessories._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/7._SY530_QL85_.jpg"
                ></Image>
              </Box>
              <Box>
                <Image
                  width="90%"
                  src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JanART/Eventpage/curatedstore/8._SY530_QL85_.jpg"
                ></Image>
              </Box>
            </Carousel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
