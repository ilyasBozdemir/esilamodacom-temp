import { Flex } from "@chakra-ui/react";
import React from "react";
import { linkItems } from "../../constants/linkItems";
import Navbar from "../Navbar";

function HeaderBottom() {

  return (
    <Flex
      as={"nav"}
      justifyContent={"center"}
      my={1}
      bg={"#865DFF"}
      color={"#fff"}
      px={2}
      borderRadius={15}
      boxShadow={"0 0 8px rgba(0, 0, 0, 0.3)"}
      w={"100%"}
    >
      {linkItems.map((link, i) => (
        <>
          <Navbar key={"eb_" + i} link={link} />
        </>
      ))}
    </Flex>
  );
}

export default HeaderBottom;
