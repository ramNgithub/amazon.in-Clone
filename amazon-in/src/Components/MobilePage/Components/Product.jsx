import { Button, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/Product.module.css";

const Product = ({ product, category }) => {
	const { id, title, brand, thumbnailImage, rating, reviewsCount, price } = product;
	return (
		<Link to={`/mobile/${id}`}>
			<Stack
				className={styles.product__card}
				justify="space-between"
				p={4}
				key={id}
				gap={4}
				borderRadius={"lg"}
				border="1px solid lightgray"
				boxShadow={"lg"}
				cursor="pointer"
			>
				<Center>
					<Img
						src={thumbnailImage}
						alt="product"
						h={"250px"}
						objectFit={"contain"}
					/>
				</Center>
				<Stack gap={0}>
					<Text
						className={styles.product__title}
						fontWeight={600}
						fontSize={"1.1rem"}
					>
						{title}
					</Text>
					<Text fontSize={"0.9rem"}>{brand}</Text>
					<Flex fontSize={"0.9rem"}>
						<Flex>
							{Array(rating)
								.fill()
								.map((star, i) => (
									<span key={`${Date.now()}-${i}`}>⭐️</span>
								))}
						</Flex>
						<Text>&nbsp;({reviewsCount})</Text>
					</Flex>
					<Text>₹ {price}</Text>
					<Button bgColor="#F6AD55">Add to cart</Button>
				</Stack>
			</Stack>
		</Link>
	);
};

export default Product;
