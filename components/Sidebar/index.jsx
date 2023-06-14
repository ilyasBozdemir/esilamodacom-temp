import React, { useRef } from "react";
import {
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";
import {
  Divider,
  Flex,
  HStack,
  Icon,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

import Logo from "../Logo";

import { MdArrowBackIos } from "react-icons/md";
import SearchBox from "../Header/SearchBox";
import { linkItems } from "../../constants/linkItems";
import CategoryTabs from "../CategoryTabs";

import Router from "next/router";
import SocialMediaButtons from "../SocialMediaButtons";
import ToggleDarkMode from "../ToggleDarkMode";
function Sidebar({ onClose }) {
  React.useEffect(() => {
    const handleRouteChangeStart = (url) => {
      onClose();
    };
    const handleRouteChangeComplete = (url) => {};
    const handleRouteChangeError = (err, url) => {};

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [Router]);

  const drawerRef = useRef();


  return (
    <>
      <>
        <DrawerContent ref={drawerRef}  overflowY="scroll" >
          <DrawerHeader>
            <Flex justifyContent={"space-between"} px={2} my={5}>
              <HStack>
                <Button
                  size="md"
                  onClick={onClose}
                  aria-label={"close sidebar"}
                >
                  <Icon
                    bg={"efe"}
                    as={MdArrowBackIos}
                    _hover={{ color: "red.500" }}
                  />
                </Button>
              </HStack>
              <Flex justifyContent={"center"}>
                <SearchBox />
              </Flex>
            </Flex>
          </DrawerHeader>

          <Flex as={"nav"}>
            <CategoryTabs categories={linkItems} />
          </Flex>

          <Flex
            as="section"
            justifyContent={"center"}
            w={"100%"}
            direction={"column"}
          >
            <Stack as={"footer"} m={2} direction={"column"} w={"100%"}>
              <Flex align="center" justify="center">
                <Divider flex="1" borderColor="gray.300" />
                <Logo />
                <Divider flex="1" borderColor="gray.300" />
              </Flex>

              <Flex align="center" justify="center">
                <>
                  <ToggleDarkMode />
                </>
              </Flex>
              <Flex align="center" justify="center">
                <Text fontSize="sm" color="gray.500">
                  &copy; {new Date().getFullYear() + " "}
                  Eflatun Butik.
                </Text>
              </Flex>
              <Flex align="center" justify="center">
                <HStack>
                  <Stack fontWeight={"semibold"} fontSize={12}>
                    <Link href="/iletisim" passHref>
                      <HStack spacing={1} direction={"row"}>
                        <Text>İletişim</Text>
                      </HStack>
                    </Link>
                  </Stack>
                  <Stack fontWeight={"semibold"} fontSize={12}>
                    <Link href="/hakkimizda" passHref>
                      <HStack spacing={1} direction={"row"}>
                        <Text>Hakkımızda</Text>
                      </HStack>
                    </Link>
                  </Stack>
                  <Stack fontWeight={"semibold"} fontSize={12}>
                    <Link href="/hesabim" passHref>
                      <HStack spacing={1} direction={"row"}>
                        <Text>Hesabım</Text>
                      </HStack>
                    </Link>
                  </Stack>
                </HStack>
              </Flex>
              <Flex align="center" justify="center">
                <SocialMediaButtons />
              </Flex>
            </Stack>
          </Flex>
        </DrawerContent>
      </>
    </>
  );
}

export default Sidebar;
