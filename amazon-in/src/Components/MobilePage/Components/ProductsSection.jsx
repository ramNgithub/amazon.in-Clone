import { Center, Flex, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import ProductsList from "./ProducstList";

const ProductsSection = () => {
	return (
		<Stack>
			<Flex justify={"flex-end"}>
				<Select variant={"filled"} size="md" icon={<AiOutlineDown />} w="300px">
					<option value="">Sort by - </option>
					<option value="price low to high">Price low to high</option>
					<option value="price hight to low">Price hight to low</option>
					<option value="avg. customer review">Avg. customer review</option>
				</Select>
			</Flex>
			<ProductsList />
		</Stack>
	);
};

export default ProductsSection;
