import { Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductsList = () => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = () => {
		setIsLoading(true);
		axios(`http://localhost:8080/mobile`)
			.then(res => {
				setProduct(res.data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		let data = getData();
		setProduct(data);
	}, []);

	if (isLoading) {
		return <Heading size="xl">Loading...</Heading>;
	}
	return (
		<SimpleGrid columns={[1, 2, 3, 3, 4]} gap={4}>
			{product.length > 0 &&
				product.map(product => (
					<Product product={product}/>
				))}
		</SimpleGrid>
	);
};

export default ProductsList;
