import { Checkbox, Divider, Heading, Stack } from "@chakra-ui/react";
import styles from "../Styles/Sidebar.module.css";

const Sidebar = ({ handleFilter, category }) => {
	console.log("category:", category);
	return (
		<Stack
			className={styles.sidebar__main}
			border={"1px solid lightgray"}
			p={4}
			mb={4}
			gap={2}
			minW="280px"
			borderRadius={"8px"}
			boxShadow="lg"
		>
			<Heading size={"md"} fontWeight="bold">
				Filter
			</Heading>
			<Divider />
			<Heading size={"sm"} mb={2}>
				Product
			</Heading>
			<Stack pl={3} lineHeight="1rem">
				<Checkbox
					onChange={handleFilter}
					value="accessories"
					isChecked={category === "accessories"}
				>
					Accessories
				</Checkbox>
				<Checkbox
					onChange={handleFilter}
					value="smartphones"
					isChecked={category === "smartphones"}
				>
					Smart phones
				</Checkbox>
			</Stack>
		</Stack>
	);
};

export default Sidebar;
