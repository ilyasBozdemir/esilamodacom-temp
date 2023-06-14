import React from "react";
import Link from "next/link";
import {
  useDisclosure,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";

export default function Navbar({ link }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Menu isOpen={isOpen} pos={"relative"} isLazy>
        <Link href={"/" + link.href} passHref>
          <MenuButton
            h={"50px"}
            mx={1}
            py={[1, 2, 2]}
            px={4}
            _hover={{
              bg: "gray.400",
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
              transition: "box-shadow 0.3s ease-in-out",
            }}
            _expanded={{ bg: "purple.600" }}
            aria-label={`${link.label}-button`}
            fontWeight="500"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            textTransform="uppercase"
            className={"nav-item"}
            textAlign={"center"}
          >
            {link.label}
          </MenuButton>
        </Link>

        {link.childrens?.length !== 0 ? (
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {link.childrens?.map((link, i) => (
              <HStack>
                <Link href={link.href} key={i} legacyBehavior passHref>
                  <MenuItem
                    key={i}
                    link={link}
                    color={"#000"}
                    _hover={{
                      bg: useColorModeValue("gray.100", "gray.700"),
                      color: "#000",
                    }}
                    userSelect={"none"}
                    pr
                  >
                    <Text as={"span"}>{link.label}</Text>
                  </MenuItem>
                </Link>
              </HStack>
            ))}
          </MenuList>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
}
