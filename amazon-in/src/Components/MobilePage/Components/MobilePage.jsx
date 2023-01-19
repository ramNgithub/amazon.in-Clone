import {
	Center,
	Divider,
	Grid,
	GridItem,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React from "react";
import ProductsList from "./ProducstList";
import Sidebar from "./Sidebar";

const MobilePage = () => {
	return (
		<SimpleGrid>
			{/* navbar goes here */}
			<Center height={"4rem"}>Nav</Center>

			{/* main content */}
			<Grid
				gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "2fr 9fr"]}
				h="90vh"
			>
				<GridItem pt={4} pl={4} >
					<Sidebar></Sidebar>
				</GridItem>
				<GridItem p={4}>
					<Tabs variant="enclosed">
						<TabList>
							<Tab>Accessories</Tab>
							<Tab>SmartPhones</Tab>
						</TabList>
						<TabPanels>
							<TabPanel p={0} py={4}>
								<ProductsList link="http://localhost:8080/mobileAccessories" />
							</TabPanel>
							<TabPanel>
								<ProductsList link="http://localhost:8080/smartphones" />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</GridItem>
			</Grid>
		</SimpleGrid>
	);
};

export default MobilePage;
