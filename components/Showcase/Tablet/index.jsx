import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import ShowcaseImage from "../ShowcaseImage";

function Tablet({ size }) {
  return (
    <>
         <Flex direction={"column"} gap={5} w={"full"} justifyContent={"center"}>
        <Flex w={"full"}>
          <ShowcaseImage image={"top-full-picture"} size={size} />
        </Flex>

        <Flex
          direction={"row"}
          justifyContent={"space-between"}
          w={"full"}
          gap={3}
        >
          <Flex w={"30%"}>
            <ShowcaseImage image={"left-big-picture"} size={size} />
          </Flex>

          <Flex w={"70%"} direction={"column"} gap={3}>
            <Flex justifyContent={"space-between"} gap={3}>
              <ShowcaseImage image={"right-small-picture"} size={size} />
              <ShowcaseImage image={"right-small-picture"}  size={size}/>
              <ShowcaseImage image={"right-small-picture"} size={size} />
            </Flex>

            <Flex justifyContent={"space-between"} gap={3}>
              <ShowcaseImage image={"right-small-picture"}size={size}  />
              <ShowcaseImage image={"right-small-picture"}  size={size}/>
              <ShowcaseImage image={"right-small-picture"} size={size} />
            </Flex>
          </Flex>
        </Flex>

        <Flex w={"full"}>
          <ShowcaseImage image={"top-full-picture"}  size={size}/>
        </Flex>

        <Flex
          direction={"row"}
          justifyContent={"space-between"}
          w={"full"}
          gap={3}
        >
          <Flex w={"70%"} direction={"column"} gap={3}>
            <Flex justifyContent={"space-between"} gap={3}>
              <ShowcaseImage image={"right-small-picture"} size={size} />
              <ShowcaseImage image={"right-small-picture"} size={size} />
              <ShowcaseImage image={"right-small-picture"} size={size} />
            </Flex>

            <Flex justifyContent={"space-between"} gap={3}>
              <ShowcaseImage image={"right-small-picture"}  size={size}/>
              <ShowcaseImage image={"right-small-picture"}  size={size}/>
              <ShowcaseImage image={"right-small-picture"}  size={size}/>
            </Flex>
          </Flex>

          <Flex w={"30%"}>
            <ShowcaseImage image={"left-big-picture"}  size={size}/>
          </Flex>
        </Flex>

        <Flex w={"full"}>
          <ShowcaseImage image={"top-full-picture"} size={size} />
        </Flex>
      </Flex>
    </>
  );
}

export default Tablet;
