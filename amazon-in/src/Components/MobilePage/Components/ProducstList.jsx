import { Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Product from "./Product";

const ProductsList = ({ sortBy, order }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchParams] = useSearchParams();
	const location = useLocation();

	const getData = (params = {}) => {
		setIsLoading(true);
		axios(`http://localhost:8080/mobile`, params)
			.then(res => {
				console.log(res.data);
				setProducts(res.data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		let paramObj = {
			params: {
				category: searchParams.getAll("category"),
			},
		};
		let data = getData(paramObj);
		setProducts(data);
	}, [location.search]);

	const sortByPriceAsc = () => {
		products.sort((a, b) => {
			return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
		});
	};
	const sortByPriceDes = () => {
		products.sort((a, b) => {
			return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
		});
	};
	const sortByRatingDes = () => {
		products.sort((a, b) => {
			return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
		});
	};

	if (sortBy !== "" && order !== "") {
		if (sortBy === "price" && order === "asc") {
			sortByPriceAsc();
		} else if (sortBy === "price" && order === "des") {
			sortByPriceDes();
		} else if (sortBy === "rating" && order === "des") {
			sortByRatingDes();
		}
	}

	if (isLoading) {
		return <Heading size="xl">Loading...</Heading>;
	}
	return (
		<Flex gap={4} flexWrap="wrap" justify={"center"}>
			{products.length > 0 &&
				products.map(product => <Product product={product} />)}
		</Flex>
	);
};

export default ProductsList;
