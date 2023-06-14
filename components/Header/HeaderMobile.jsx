import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import Banner from "../Banner";
import CountdownTimer from "../CountdownTimer";

function HeaderMobile({ onOpen }) {
  const openDrawer = (buttonType) => {
    if (buttonType === "menuButton") {
      onOpen();
    } else if (buttonType === "searchButton") {
      onOpen();
    }
  };

  const boxShadow = `rgba(0, 0, 0, 0.07) 0px 1px 1px,
  rgba(0, 0, 0, 0.07) 0px 2px 2px,
  rgba(0, 0, 0, 0.07) 0px 4px 4px,
  rgba(0, 0, 0, 0.07) 0px 8px 8px`;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        px={2}
        py={3}
        position="fixed"
        bg={"white"}
        top={0}
        left={0}
        zIndex={600}
        minW="100%"
        boxShadow={scrolled ? boxShadow : "none"}
        backdropFilter={scrolled ? "blur(5px)" : "none"}
        transition="all 0.2s ease-in-out"
      >
        <Flex direction={"column"}>
          <Flex justifyContent={"space-between"}>
            <Stack
              onClick={() => openDrawer("menuButton")}
              alignItems={"center"}
              cursor="pointer"
              display={"flex !important"}
              direction={"column"}
              pos={"relative"}
              top={"3px"}
              fontWeight={"semibold"}
            >
              <Icon
                pos={"absolute"}
                display={{ base: "flex", md: "none" }}
                variant="ghost"
                aria-label="open menu"
                as={FiMenu}
                bg="transparent"
                w={7}
                h={7}
                left={1}
                top={0}
              />
              <Text pos={"absolute"} as="small" left={0} top={"15px"}>
                Menü
              </Text>
            </Stack>

            <Stack>
              <Logo />
            </Stack>
            <Stack>
              <Button
                color={"#fff"}
                bg={"#DF7861"}
                borderRadius={"50%"}
                width="45px"
                height="45px"
                onClick={() => openDrawer("searchButton")}
              >
                <Icon
                  as={BiSearch}
                  w={7}
                  h={7}
                  aria-label={"search button icon"}
                />
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default HeaderMobile;
