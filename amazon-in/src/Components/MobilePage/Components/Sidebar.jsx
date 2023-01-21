import { Checkbox, Divider, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../Styles/Sidebar.module.css";

const Sidebar = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const initialCategory = searchParams.getAll("category");
	const [category, setCategory] = useState(initialCategory || []);

	const handleFilter = e => {
		let newCategory = [...category];
		if (newCategory.includes(e.target.value)) {
			newCategory.splice(newCategory.indexOf(e.target.value), 1);
		} else {
			newCategory.push(e.target.value);
		}
		setCategory(newCategory);
	};

	useEffect(() => {
		const params = { category };
		setSearchParams(params);
	}, [category]);

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
					isChecked={category.includes("accessories")}
				>
					Accessories
				</Checkbox>
				<Checkbox
					onChange={handleFilter}
					value="smartphones"
					isChecked={category.includes("smartphones")}
				>
					Smart phones
				</Checkbox>
			</Stack>
		</Stack>
	);
};

export default Sidebar;
