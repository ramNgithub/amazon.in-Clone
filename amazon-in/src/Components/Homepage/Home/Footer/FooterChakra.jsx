import React from "react";
import { Box, Flex, Link, Text, VStack, HStack, Image } from "@chakra-ui/react";
import logo from "../../Homepageimgs/ShopBaglogo.png";
export const FooterChakra = () => {
  return (
    <div>
      <Box
        bg="black"
        h="100px"
        w="100%"
        p={4}
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={logo} alt="Dan Abramov" h="80px" w="30" />
      </Box>
      <Box h="300px" w="100%" bg="rgb(94, 94, 94)">
        <Flex
          color="white"
          direction={{ base: "column", md: "row" }}
          justifyContent="flex-right"
          pt="8"
          pb="4"
          gap="40px"
        >
          <VStack
            ml="20px"
            align="flex-start"
            spacing="2"
            className="container"
          >
            <Text fontSize="md" fontWeight="bold" className="smallWorld">
              About Amazon
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Press Room
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Company Info
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Executive Team
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Careers
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Amazon Recycling Program
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Blog
            </Text>
          </VStack>
          <VStack align="flex-start" spacing="2" className="container">
            <Text fontSize="md" fontWeight="bold" className="smallWorld">
              Help
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Product & Help Center
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Shipping
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Satisfaction Guarantee
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Promotional Terms & Conditions
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Amazon FAQs
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Klarna
            </Text>
          </VStack>
          <VStack align="flex-start" spacing="2" className="container">
            <Text fontSize="md" fontWeight="bold" className="smallWorld">
              Make Money with Us
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Sell on Amazon
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Sell under Amazon Accelerator
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Protect and Build Your Brand
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Amazon Global Selling
            </Text>
          </VStack>
          <VStack align="flex-start" spacing="2" className="container">
            <Text fontSize="md" fontWeight="bold" className="smallWorld">
              Let Us Help You
            </Text>
            <Text fontSize="sm" className="smallWorld">
              COVID-19 and Amazon
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Your Account
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Returns Center
            </Text>
            <Text fontSize="sm" className="smallWorld">
              100% Purchase Protection
            </Text>
            <Text fontSize="sm" className="smallWorld">
              Help
            </Text>
          </VStack>

          <Box ml="200px">
            <Text color="white" fontSize="2xl">
              Let’s Get Social
            </Text>
            <Flex
              display="flex"
              justifyContent="flex-left"
              alignItems="center"
              gap="30px"
              mt="10px"
            >
              <Image
                h="40px"
                w="40px"
                className="socialIcon"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png"
                alt="Not-Found"
              />
              <Image
                h="40px"
                w="40px"
                className="socialIcon"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png"
                alt="Not-Found"
              />
              <Image
                h="40px"
                w="40px"
                className="socialIcon"
                src="https://cdn-icons-png.flaticon.com/128/25/25425.png"
                alt="Not-Found"
              />
              <Image
                h="40px"
                w="40px"
                className="socialIcon"
                src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png"
                alt="Not-Found"
              />
            </Flex>
          </Box>
        </Flex>
        <Text color="white" mt="-20px">
          ____________________________________________________________________________________________________________________________________________________________________________________
        </Text>
        <Text color="white">
          © 2022 Amazon Privacy Policy | Terms & Conditions | Accessibility |
          California Supply Chains Act | DSA Code Of Ethics | Disclaimer |
          Preference Center
        </Text>
      </Box>
    </div>
  );
};
