import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Highlight,
	Img,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../Homepage/Navbar/Navbar";
import styles from "../Styles/MobileSingleProduct.module.css";

const MobileSingleProduct = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios(`http://localhost:8080/mobile/${id}`)
			.then(res => {
				setIsLoading(false);
				setProduct(res.data);
			})
			.catch(err => console.log("error in getting single product", err));
	}, []);

	if (isLoading) {
		return <Heading size="lg">Loading...</Heading>;
	}
	const { title, brand, thumbnailImage, rating, reviewsCount, price } = product;

	return (
		<Box bg={"gray.50"} h={"100vh"}>
			<Navbar />
			<Flex
				className={styles.Product__grid}
				w={["100%", "100%", "100%", "100%", "1100px"]}
				mt={4}
				marginInline="auto"
				p={4}
				gap={4}
				borderRadius={"lg"}
				boxShadow={"base"}
				cursor="pointer"
				bgColor={"#fff"}
			>
				<Center flex={1}>
					<Img
						src={thumbnailImage}
						alt="product"
						objectFit={"contain"}
						h="400px"
						w={"400px"}
					/>
				</Center>
				<Stack gap={2} flex={1}>
					<Stack gap={2} flex={1}>
						<Text fontWeight={700} fontSize={"1.7rem"}>
							{title}
						</Text>
						<Text fontSize={"1.2rem"}>
							brand: <span className={styles.brand__span}>{brand}</span>
						</Text>
						<Flex fontSize={"1.2rem"} align={"center"}>
							<Flex>
								{Array(rating)
									.fill()
									.map((star, i) => (
										<span key={`${Date.now()}-${i}`}>⭐️</span>
									))}
							</Flex>
							<Text>&nbsp;({reviewsCount})</Text>
						</Flex>
						<Text fontSize={"1.7rem"} fontWeight="bold">
							₹ {price}
						</Text>
					</Stack>
					<Button bgColor="#F6AD55" w={"150px"}>
						Add To Cart
					</Button>
				</Stack>
			</Flex>
		</Box>
	);
};

export default MobileSingleProduct;
