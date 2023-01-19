import {
	Box,
	Center,
	Flex,
	Img,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Product.module.css";

const Product = ({ product }) => {
	const { id, title, brand, thumbnailImage, rating, reviewsCount, price } =
		product;
	return (
		<Stack
			className={styles.product__card}
			p={4}
			key={id}
			gap={4}
			borderRadius={"lg"}
			border="1px solid lightgray"
			boxShadow={"lg"}
		>
			<Center>
				<Img
					src={thumbnailImage}
					alt="product"
					h={"250px"}
					objectFit={"contain"}
				/>
			</Center>
			<Stack>
				<Text className={styles.product__title} fontWeight={500}>
					{title}
				</Text>
				<Text>{brand}</Text>
				<Flex>
					<Flex>
						{new Array(rating).map(star => (
							<span>⭐️</span>
						))}
					</Flex>
					<Text>({reviewsCount})</Text>
				</Flex>
				<Text>₹ {price}</Text>
			</Stack>
		</Stack>
	);
};

export default Product;
