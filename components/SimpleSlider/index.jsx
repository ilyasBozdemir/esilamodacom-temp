import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ImageItem from "./ImageItem";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => {
    <>loading</>;
  },
});

function SimpleSlider() {
  const [size, setSize] = useState("mobile");

  const settings = {
    dots: size === "mobile",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  

  return (
    <>
      <Slider {...settings}>
        <ImageItem image={"slider-1"} size={size} />
        <ImageItem image={"slider-2"} size={size} />
        <ImageItem image={"slider-3"} size={size} />
        <ImageItem image={"slider-4"} size={size} />
      </Slider>
    </>
  );
}

export default SimpleSlider;
