import { Box } from "@chakra-ui/react";
import Image from "next/Image";
import React, { useEffect, useState } from "react";
import { bannerImages } from "../../mocks/bannerImages";
function Banner() {
  const [size, setSize] = useState("mobile");

  useEffect(() => {

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSize("mobile");
      } else if (width < 1024) {
        setSize("tablet");
      } else {
        setSize("desktop");
      }
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  const imageObject = bannerImages.find((img) => img.id === 'kargo-banner');
  if (!imageObject && imageObject !== undefined) {
    return null;
  }

  const { src, width, height } = imageObject[size];

  return (
    <>
      <Box w={"100%"} maxWidth="100%">

        {/* 
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
*/}

      </Box>
    </>
  );
}

export default Banner;
