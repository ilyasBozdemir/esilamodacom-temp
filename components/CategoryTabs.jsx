import { useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Icon, Flex, Text, HStack } from "@chakra-ui/react";
import Link from "next/link";

const CategoryMenu = ({ categories }) => {
  const [activeItemLabel, setActiveItemLabel] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    setCategoryList(categories);
  }, []);

  const handleItemClick = (label) => {
    setActiveItemLabel(label);
  };

  const handleMainItemClick = () => {
    setCategoryList(categories);
    setActiveItemLabel(null);
  };

  useEffect(() => {
    const category = categories.filter((c) => c.label === activeItemLabel)[0];
    if (category !== undefined) {
      console.table(category);
      setCategoryList([]);
      setCategoryList(category.childrens);
    }
  }, [activeItemLabel]);

  return (
    <Flex w="100%" justifyContent="center">

    <Flex w="80%" direction="column">
      {activeItemLabel !== null && (
        <Text onClick={handleMainItemClick} cursor="pointer" pb={2}>
          <Text as="span" ml={2} fontSize="xs">
            <Icon as={MdArrowBackIos} />
          </Text>
          {activeItemLabel}
        </Text>
      )}
  
      {categoryList.map((link, index) => (
        <Flex
          key={link.id + index}
          px={1}
          p={2}
          mx={2}
          _hover={{
            color: "white",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          cursor="pointer"
          onClick={() => handleItemClick(link.label)}
          textTransform="uppercase"
          w="full"
          borderBottom="1px solid gray"
        >
          <HStack justifyItems="space-between" w="full">
            <HStack justifyItems="flex-start" w="full">
              <Text>{link.label}</Text>
            </HStack>
  
            <Link href={link.href} prefetch={false} passHref>
              <Icon
                as={MdArrowForwardIos}
                borderRadius="20px"
                bg="gray.500"
                color="white"
                cursor="pointer"
                w={6}
                h={6}
              />
            </Link>
          </HStack>
        </Flex>
      ))}
    </Flex>
  </Flex>
  
  );
};

export default CategoryMenu;
