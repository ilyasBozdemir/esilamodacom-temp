import { Box } from "@chakra-ui/react";
import Image from "next/Image";
import React, { useEffect } from "react";
import { showcaseImages } from "../../mocks/showcaseImages";

function ShowcaseImage({ image, size }) {
  const imageObject = showcaseImages.find((img) => img.id === image);

  if (!imageObject && imageObject !== undefined) {
    return null;
  }
  const { src, width, height } = imageObject[size];

  return (
    <Box
      w={"100%"}
      maxWidth="100%"
    >
      <Image
        src={src}
        width={width}
        height={height}
        draggable={false}
        loading={"lazy"}
        style={{
          borderRadius: "15px",
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
        }}
      />
    </Box>
  );
}

export default ShowcaseImage;
