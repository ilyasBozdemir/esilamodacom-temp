import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Mobile from "./Mobile";
import Tablet from "./Tablet";
import Desktop from "./Desktop";

function Showcase() {
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

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Flex justifyContent={"center"}>
      {size == "mobile" ? (
        <Mobile size={size} />
      ) : size == "tablet" ? (
        <Tablet size={size} />
      ) : (
        <Desktop size={size} />
      )}
    </Flex>
  );
}

export default Showcase;
