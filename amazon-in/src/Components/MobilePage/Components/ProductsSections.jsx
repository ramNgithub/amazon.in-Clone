import { Center, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import ProductList from "./ProducstList";

const ProductsSections = () => {
	
	return (
		<Stack border={"1px solid red"} h="full" p="1rem">
			<Center border={"1px solid red"}> top section</Center>
			<Center border={"1px solid red"}>
				{/* <ProductList></ProductList> */}
			</Center>
		</Stack>
	);
};

export default ProductsSections;
