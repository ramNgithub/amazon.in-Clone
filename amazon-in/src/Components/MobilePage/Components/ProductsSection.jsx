import { Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import ProductsList from "./ProducstList";
import SidebarDrawer from "./SidebarDrawer";

const ProductsSection = ({ category, handleFilter }) => {
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
	return (
		<Flex flexDir={"column"} gap={4}>
			<Flex justify="space-between" gap={4}>
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
				<Flex display={["flex", "flex", "flex", "none"]}>
					<SidebarDrawer handleFilter={handleFilter} category={category} />
				</Flex>
			</Flex>
			<ProductsList sortBy={sortBy} order={order} category={category} />
		</Flex>
	);
};

export default ProductsSection;
