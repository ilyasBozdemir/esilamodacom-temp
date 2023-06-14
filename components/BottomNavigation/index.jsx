import React, { useState as UseState } from "react";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { MdOutlineManageSearch } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import {
  Flex,
  HStack,
  Icon,
  Tooltip,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";

import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

function BottomNavigation({ onOpen }) {
  //const { cartItems } = useContext(CartContext);
  // const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartItemCount = 30;
  const favoritelistCount = 3;

  const cartItemSettings = {
    fontSize: cartItemCount > 10 ? 10 : 11,
    right: cartItemCount > 10 ? "-4px" : "1px",
  };
  const favoritelistSettings = {
    fontSize: favoritelistCount > 10 ? 10 : 11,
    right: favoritelistCount > 10 ? "2px" : "7px",
  };
  return (
    <Flex
      boxShadow="xs"
      p={2}
      w="100%"
      pos="fixed"
      bottom={0}
      left={0}
      bg={"#fff"}
      zIndex={500}
      borderTop={"1px solid #000"}
      fontSize={"sm"}
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Stack>
        <Tooltip label={"Anasayfa"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/"} passHref>
            <VStack color={"gray.500"} spacing={1}>
              <Icon as={AiOutlineHome} w={6} h={6} />
              <Text
                fontWeight={"semibold"}
                fontSize={[11, 12, 13, 14]}
                userSelect={"none"}
              >
                Anasayfa
              </Text>
            </VStack>
          </Link>
        </Tooltip>
      </Stack>
      <Stack>
        <Tooltip label={"Favorite"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/favorilerim"} passHref>
            <VStack color={"gray.500"} spacing={1} position="relative">
              <Icon as={AiOutlineHeart} w={6} h={6} color={"gray.500"} />
              {favoritelistCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: favoritelistSettings.right,
                    borderRadius: "50%",
                    backgroundColor: "#DF7861",
                    color: "white",
                    padding: "2px 5px",
                    fontSize: favoritelistSettings.fontSize,
                  }}
                >
                  {favoritelistCount}
                </span>
              )}
              <Text
                fontWeight={"semibold"}
                fontSize={[11, 12, 13, 14]}
                userSelect={"none"}
              >
                Favorilerim
              </Text>
            </VStack>
          </Link>
        </Tooltip>
      </Stack>

      <Stack>
        <HStack
          spacing={3}
          borderRadius={"16px"}
          bg={"#ECF2FF"}
          color={"#7b61ff"}
          cursor={"pointer"}
          p={3}
        >
          <Icon as={MdOutlineManageSearch} w={6} h={6} onClick={onOpen} />
          <Text
            fontWeight={"bold"}
            userSelect={"none"}
            onClick={onOpen}
            color={"purple.400"}
          >
            Menü
          </Text>
        </HStack>
      </Stack>
      <Stack>
        <Tooltip label={"Shopping"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/sepetim"} passHref>
            <VStack color={"gray.500"} spacing={1} position="relative">
              <Icon as={AiOutlineShopping} w={6} h={6} color={"gray.500"} />
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: cartItemSettings.right,
                    borderRadius: "50%",
                    backgroundColor: "#DF7861",
                    color: "white",
                    padding: "2px 5px",
                    fontSize: cartItemSettings.fontSize,
                  }}
                >
                  {cartItemCount}
                </span>
              )}
              <Text
                fontWeight={"semibold"}
                color={"gray.500"}
                fontSize={[11, 12, 13, 14]}
                userSelect={"none"}
              >
                Sepetim
              </Text>
            </VStack>
          </Link>
        </Tooltip>
      </Stack>
      <Stack>
        <Tooltip label={"User"} placement="top" bg="purple.400" hasArrow>
          <Link href={"/hesabim"} passHref>
            <VStack color={"gray.500"} spacing={1}>
              <Icon as={RiUser3Line} w={6} h={6} />
              <Text
                fontWeight={"semibold"}
                fontSize={[11, 12, 13, 14]}
                userSelect={"none"}
              >
                Hesabım
              </Text>
            </VStack>
          </Link>
        </Tooltip>
      </Stack>
    </Flex>
  );
}

export default BottomNavigation;
