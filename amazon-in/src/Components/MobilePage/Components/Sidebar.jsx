import { Checkbox, Divider, Heading, Stack } from "@chakra-ui/react";
import styles from "../Styles/Sidebar.module.css";

const Sidebar = ({ handleFilter, category }) => {
  return (
    <Stack
      className={styles.sidebar__main}
      border={"1px solid lightgray"}
      p={4}
      gap={2}
      minW="280px"
      borderRadius={"8px"}
      boxShadow="lg"
      h="685px"
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
          &nbsp;&nbsp;Accessories
        </Checkbox>
        <Checkbox
          onChange={handleFilter}
          value="smartphones"
          isChecked={category === "smartphones"}
        >
          &nbsp;&nbsp;Smart phones
        </Checkbox>
        <Checkbox>&nbsp;&nbsp;Earphones</Checkbox>
        <Checkbox>&nbsp;&nbsp;Power Banks</Checkbox>
      </Stack>
      <Heading size={"sm"} mb={2}>
        Brands
      </Heading>
      <Stack pl={3} lineHeight="1rem">
        <Checkbox>&nbsp;&nbsp;Apple</Checkbox>
        <Checkbox>&nbsp;&nbsp;One Plus</Checkbox>
        <Checkbox>&nbsp;&nbsp;Realme</Checkbox>
        <Checkbox>&nbsp;&nbsp;Samsung</Checkbox>
      </Stack>
      <Heading size={"sm"} mb={2}>
        Price
      </Heading>
      <Stack pl={3} lineHeight="1rem">
        <Checkbox>&nbsp;&nbsp;Under ₹1,000</Checkbox>
        <Checkbox>&nbsp;&nbsp;₹1,000 - ₹5,000</Checkbox>
        <Checkbox>&nbsp;&nbsp;₹5,000 - ₹10,000</Checkbox>
        <Checkbox>&nbsp;&nbsp₹10,000 - ₹20,000</Checkbox>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
