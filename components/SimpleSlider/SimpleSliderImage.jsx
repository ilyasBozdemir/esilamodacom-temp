import { Box } from "@chakra-ui/react";
import Image from "next/Image";
import React, { useEffect } from "react";
import { sliderImages } from "../../mocks/sliderImages";

function SimpleSliderImage({ image, size }) {
  
  const imageObject = sliderImages.find((img) => img.id === image);

  if (!imageObject && imageObject !== undefined) {
    return null;
  }
  const { src, width, height } = imageObject[size];

  return (
    <Box w={"100%"} maxWidth="100%">
      <Image
        src={src}
        width={width}
        height={height}
        draggable={false}
        loading={"lazy"}
        style={{
          borderRadius: "15px",
        }}
      />
    </Box>
  );
}

export default SimpleSliderImage;
