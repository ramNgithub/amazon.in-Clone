import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";

const MobilePage = () => {
	const [category, setCategory] = useState("");
    useEffect(()=>{
		
	},[category])
	const handleFilter = e => {
		setCategory(e.target.value);
	};
	

	return (
		<SimpleGrid bgColor={"gray.50"}>
			{/* navbar goes here */}
			<Navbar />

			{/* main content */}
			<Grid
				gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "2fr 9fr"]}
				h="90vh"
				bgColor={"gray.50"}
			>
				<GridItem pt={4} pl={4}>
					<Sidebar handleFilter={handleFilter} category={category} />
				</GridItem>
				<GridItem p={4}>
					<ProductsSection category={category} />
				</GridItem>
			</Grid>
		</SimpleGrid>
	);
};

export default MobilePage;
