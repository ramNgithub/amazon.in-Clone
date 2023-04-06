import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductsSection from "./ProductsSection";
import Sidebar from "./Sidebar";

const MobilePage = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {}, [category]);

  const handleFilter = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <Flex m={4} gap={4}>
        <Box display={["none", "none", "none", "block"]}>
          <Sidebar handleFilter={handleFilter} category={category} />
        </Box>
        <Box>
          <ProductsSection category={category} handleFilter={handleFilter} />
        </Box>
      </Flex>
    </>
  );
};

export default MobilePage;
