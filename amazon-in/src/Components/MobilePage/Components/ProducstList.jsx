import { Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { productsArray } from "../Utils/data";
import ProductCard from "./ProductCard";

const ProductsList = ({ sortBy, order, category }) => {
	const [products, setProducts] = useState(productsArray);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		if (category !== "") {
			let filteredProducts = products.filter(product => {
				return product.category === category;
			});
			setFilteredProducts(filteredProducts);
		}
	}, [category]);

	const sortByPriceAsc = () => {
		filteredProducts.length <= 0 &&
			products.sort((a, b) => {
				return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
			});
		filteredProducts.length > 0 &&
			filteredProducts.sort((a, b) => {
				return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
			});
	};

	const sortByPriceDes = () => {
		filteredProducts.length <= 0 &&
			products.sort((a, b) => {
				return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
			});
		filteredProducts.length > 0 &&
			filteredProducts.sort((a, b) => {
				return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
			});
	};

	const sortByRatingDes = () => {
		filteredProducts.length <= 0 &&
			products.sort((a, b) => {
				return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
			});
		filteredProducts.length > 0 &&
			filteredProducts.sort((a, b) => {
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

	return (
		<SimpleGrid
			gap={4}
			style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
		>
			{filteredProducts.length <= 0 &&
				products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						brand={product.brand}
						rating={product.rating}
						reviewsCount={product.reviewsCount}
						category={product.category}
						image={product.image}
						price={product.price}
						quantity={product.quantity}
					/>
				))}
			{filteredProducts.length > 0 &&
				filteredProducts.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						brand={product.brand}
						rating={product.rating}
						category={product.category}
						reviewsCount={product.reviewsCount}
						image={product.image}
						price={product.price}
						quantity={product.quantity}
					/>
				))}
		</SimpleGrid>
	);
};

export default ProductsList;
