import { Button, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/ProductCard.module.css";

const randomNoFromRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ProductCard = ({
	id,
	title,
	brand,
	rating,
	reviewsCount,
	category,
	image,
	price,
	quantity,
}) => {
	const handleAddToCart = () => {
		let newData = {
			id,
			title,
			brand,
			rating,
			reviewsCount,
			category,
			image,
			price,
			quantity
		};
		const cartData = JSON.parse(localStorage.getItem("cart")) || [];
		cartData.push(newData);
		localStorage.setItem("cart", JSON.stringify(cartData));
	};

	const random = randomNoFromRange(1, 6);

	return (
		<Flex
			flexDir={"column"}
			className={styles.product__card}
			justify="space-between"
			p={4}
			gap={4}
			rounded={"md"}
			border="1px solid lightgray"
			boxShadow={"lg"}
			cursor="pointer"
			bgColor={"#fff"}
		>
			<Link to={`/mobile/${id}`}>
				<Center style={{ padding: "2rem" }}>
					<Img src={image} alt="product" h={"250px"} objectFit={"contain"} />
				</Center>
			</Link>
			<Flex flexDir={"column"} flex={1}>
				<Link to={`/mobile/${id}`}>
					<Flex flexDir={"column"} flex={1} gap={2}>
						<Text
							className={styles.product__title}
							fontWeight={600}
							fontSize={"1.1rem"}
							h="5.2rem"
						>
							{title}
						</Text>
						<Text fontSize={"0.9rem"}>
							<span style={{ fontWeight: "bold" }}>Brand:&nbsp;&nbsp;</span>
							{brand}
						</Text>
						<Text fontSize={"0.9rem"}>
							<span style={{ fontWeight: "bold" }}>Category:&nbsp;&nbsp;</span>
							{category}
						</Text>
						<Flex fontSize={"0.9rem"}>
							<span style={{ fontWeight: "bold" }}>
								Rating:&nbsp;
								<span style={{ fontWeight: "normal" }}>{rating}</span>&nbsp;
							</span>
							<Flex>
								{Array(rating)
									.fill()
									.map((star, i) => (
										<span key={`${Date.now()}-${i}`}>⭐️</span>
									))}
							</Flex>
							<Text>&nbsp;&nbsp;({reviewsCount})</Text>
						</Flex>
						<Text>
							<span style={{ fontWeight: "bold" }}>Price:&nbsp;&nbsp;</span>₹{" "}
							{price}{" "}
							{random <= 3 && (
								<Button
									size={"sm"}
									fontSize={"sm"}
									w="120px"
									rounded={"none"}
									bgColor={"red"}
									color={"white"}
									px={2}
									py={1}
								>
									Deal of the day
								</Button>
							)}
						</Text>
					</Flex>
				</Link>
				<Center>
					<Button
						fontWeight={"bold"}
						style={{ marginTop: "16px" }}
						bgColor="#F6AD55"
						rounded={"md"}
						w="150px"
						m={"auto"}
						onClick={handleAddToCart}
					>
						Add to cart
					</Button>
				</Center>
			</Flex>
		</Flex>
	);
};

export default ProductCard;
