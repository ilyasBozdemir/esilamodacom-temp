import { Box } from "@chakra-ui/react";
import React from "react";
import { products } from "../../temp/products";
import { ProductGrid } from "./ProductGrid";
import { ProductCard } from "./ProductCard";

function App() {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
      bg={'#f2f7fa'}
      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
      borderRadius={'15px'}
    >

      <ProductGrid  >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}

export default App;
