import { Box } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
	return (
		<Box
			border={"1px solid red"}
			h="full"
			display={["none", "none", "none", "none", "block"]}
		>
			Sidebar
		</Box>
	);
};

export default Sidebar;
