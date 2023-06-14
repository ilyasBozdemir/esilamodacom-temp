import React from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";
import ImageItem from "./ImageItem";
import { images } from "../../mocks/storyImages";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => {
    <>loading</>;
  },
});

function Story() {
  var settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        <Box maxW={"90%"} pos={"relative"}>
          <Slider
            slidesToShow={6}
            lazyLoad={true}
            infinite={true}
            arrows={true}
            {...settings}
          >
            {images.map((image, index) => {
              return (
                <Box as={"span"} key={index} cursor={"pointer"}>
                  <ImageItem {...image} />
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Flex>

      <></>
    </>
  );
}

export default Story;
