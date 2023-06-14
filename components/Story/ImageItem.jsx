import { Stack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function ImageItem({ src, to, name, ...rest }) {
  return (
    <>
      <Stack
        display={"flex !important"}
        direction={"column"}
        alignItems={"center"}
        overflow={"auto"}
        {...rest}
      >
        <Box
          w={"60px"}
          h={"60px"}
          borderRadius="full"
          overflow="hidden"
          border="3px solid"
          borderColor="gray.500"
          _hover={{
            border: "2px solid",
            borderColor: "gray.500",
            transform: "scale(1.05)",
            borderRadius: "40px",
          }}
        >
          <Image
            width={60}
            height={60}
            src={src}
            alt={name}
            draggable={false}
          />
        </Box>
        <Text as={"span"} size={"sm"}>
          {name}
        </Text>
      </Stack>
    </>
  );
}

export default ImageItem;
