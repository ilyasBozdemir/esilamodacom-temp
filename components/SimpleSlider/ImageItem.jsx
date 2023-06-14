import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import "../../styles/Slider.module.css";
import { sliderImages } from "../../mocks/sliderImages";
function ImageItem({ image, size }) {

  const imageObject = sliderImages.find((img) => img.id === image);

  if (!imageObject && imageObject !== undefined) {
    return null;
  }

  const { src, alt, width, height } = imageObject[size];

  return (
    <>
      <Stack
        display={"flex !important"}
        direction={"column"}
        alignItems={"center"}
        overflow={"auto"}
      >
        <Image
          css={{
            borderRadius: "50px",
            objectFit: "cover",
            boxSize: "50px",
            borderRadius: "15px",
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
          }}
          
          width={width}
          height={height}
          src={src}
          alt={alt}
          loading={"lazy"}
          draggable={false}
        />
        <Text as={"span"} size={"sm"}>
          {alt}
        </Text>
      </Stack>
    </>
  );
}

export default ImageItem;
