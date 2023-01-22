import {
	Flex,
	Select,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import ProductsList from "./ProducstList";

const ProductsSection = () => {
	const [sortBy, setSortBy] = useState("");
	const [order, setOrder] = useState("");

	const handleSelectChange = e => {
		switch (e.target.value) {
			case "priceHightToLow":
				setSortBy("price");
				setOrder("des");
				break;
			case "priceLowToHigh":
				setSortBy("price");
				setOrder("asc");
				break;
			case "avgCustomerReview":
				setSortBy("rating");
				setOrder("des");
				break;
			default:
				return;
		}
	};
	console.log("sortBy:", sortBy);
	return (
		<Stack>
			<Flex pl={2} justify={"flex-start"}>
				<Select
					variant={"filled"}
					size="md"
					icon={<BsFillCaretDownFill />}
					w="300px"
					onChange={handleSelectChange}
				>
					<option value="">Sort by</option>
					<option value="priceLowToHigh">Price low to high</option>
					<option value="priceHightToLow">Price hight to low</option>
					<option value="avgCustomerReview">Avg. customer review</option>
				</Select>
			</Flex>
			<ProductsList sortBy={sortBy} order={order} />
		</Stack>
	);
};

export default ProductsSection;
