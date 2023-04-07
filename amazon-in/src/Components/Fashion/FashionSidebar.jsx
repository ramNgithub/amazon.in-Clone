import { Checkbox, Divider, Heading, Stack } from "@chakra-ui/react";
import styles from "../MobilePage/Styles/Sidebar.module.css";
const FashionSidebar = () => {
  return (
    <Stack
      className={styles.sidebar__main}
      border="1px solid lightgray"
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
        <Checkbox>&nbsp;&nbsp;Earrings</Checkbox>
        <Checkbox>&nbsp;&nbsp;Kurta</Checkbox>
        <Checkbox>&nbsp;&nbsp;Tops</Checkbox>
        <Checkbox>&nbsp;&nbsp;Bottoms</Checkbox>
      </Stack>
      <Heading size={"sm"} mb={2}>
        Brands
      </Heading>
      <Stack pl={3} lineHeight="1rem">
        <Checkbox>&nbsp;&nbsp;Zara</Checkbox>
        <Checkbox>&nbsp;&nbsp;H&M</Checkbox>
        <Checkbox>&nbsp;&nbsp;Mufti</Checkbox>
        <Checkbox>&nbsp;&nbsp;Roadster</Checkbox>
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

export default FashionSidebar;
