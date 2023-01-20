import { ChakraProvider, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Navbar from "../../Homepage/Navbar/Navbar";
import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";

const MobilePage = () => {
	return (
		<ChakraProvider>
			<SimpleGrid>
				{/* navbar goes here */}
				<Navbar />

				{/* main content */}
				<Grid
					gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "2fr 9fr"]}
					h="90vh"
				>
					<GridItem pt={4} pl={4}>
						<Sidebar></Sidebar>
					</GridItem>
					<GridItem p={4}>
						<ProductsSection></ProductsSection>
					</GridItem>
				</Grid>
			</SimpleGrid>
		</ChakraProvider>
	);
};

export default MobilePage;
