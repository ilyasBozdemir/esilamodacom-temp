import {
  AspectRatio,
  Box,
  Button,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice } = product;
  return (
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
      {...rootProps}
    >
      <Box position="relative" cursor="pointer"  boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.2)'}>
        <AspectRatio ratio={1}>
          <Image
            src={imageUrl[0]}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: "md",
              md: "xl",
            }}
            onClick={() => {
              window.open(`/product/${product.id}`);
            }}
          
          />
        </AspectRatio>
      </Box>
      <Stack align="center" spacing="1">
        <Text
          fontWeight="medium"
          color={useColorModeValue("gray.700", "gray.400")}
          onClick={() => {
            window.open(`/product/${product.id}`);
          }}
          cursor="pointer"
        >
          <>{name}</>
        </Text>
        <PriceTag price={price} salePrice={salePrice} currency="TRY" />
      </Stack>
      <Stack align="center">
        <Button
          colorScheme="gray"
          variant={"outline"}
          width="full"
          leftIcon={<FiChevronRight />}
          onClick={() => {
            window.open(`/product/${product.id}`);
          }}
        >
          Daha Fazlasını Gör
        </Button>
      </Stack>
    </Stack>
  );
};
