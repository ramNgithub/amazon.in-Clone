import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";

function SidebarDrawer({ handleFilter, category }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				Filter Products
			</Button>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Filter Products</DrawerHeader>

					<DrawerBody>
						<Sidebar handleFilter={handleFilter} category={category} />
					</DrawerBody>

					<DrawerFooter>
						<Button
							variant="outline"
							mr={3}
							onClick={onClose}
							bgColor="#F6AD55"
						>
							Cancel
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default SidebarDrawer;
