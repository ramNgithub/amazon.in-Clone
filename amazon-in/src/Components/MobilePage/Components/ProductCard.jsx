import { Button, Center, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ProductCard.module.css";

const ProductCard = ({ product, category }) => {
	const { id, title, brand, thumbnailImage, rating, reviewsCount, price } =
		product;

	const handleAddToCart = id => {
		const cartData = JSON.parse(localStorage.getItem("cart")) || [];
		cartData.push(product);
		localStorage.setItem("cart", JSON.stringify(cartData));
	};

	return (
		<Stack
			key={id}
			className={styles.product__card}
			justify="space-between"
			p={4}
			w={"300px"}
			gap={4}
			borderRadius={"lg"}
			border="1px solid lightgray"
			boxShadow={"lg"}
			cursor="pointer"
			bgColor={"#fff"}
		>
			<Link to={`/mobile/${id}`}>
				<Center>
					<Img
						src={thumbnailImage}
						alt="product"
						h={"250px"}
						objectFit={"contain"}
					/>
				</Center>
			</Link>
			<Stack flex={1}>
				<Link to={`/mobile/${id}`}>
					<Stack flex={1}>
						<Text
							className={styles.product__title}
							fontWeight={600}
							fontSize={"1.1rem"}
							h="5.2rem"
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
					</Stack>
				</Link>
				<Button bgColor="#F6AD55" onClick={() => handleAddToCart(id)}>
					Add to cart
				</Button>
			</Stack>
		</Stack>
	);
};

export default ProductCard;
