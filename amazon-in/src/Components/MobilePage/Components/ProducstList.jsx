import { Heading, SimpleGrid, useStatStyles } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getData } from "../Utils/api";
import Product from "./Product";

const ProductsList = ({ link }) => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getData = () => {
		setIsLoading(true);
		axios(link)
			.then(res => {
				console.log(res.data);
				setProduct(res.data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		let data = getData();
		setProduct(data);
	}, []);

	console.log("product:", product);

	if (isLoading) {
		return <Heading size="xl">Loading...</Heading>;
	}
	return (
		<SimpleGrid columns={[1, 2, 3, 3, 4]} gap={4}>
			{product.length > 0 &&
				product.map(product => <Product product={product} />)}
		</SimpleGrid>
	);
};

export default ProductsList;
