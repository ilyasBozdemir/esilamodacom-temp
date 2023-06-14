import { useState } from 'react'
import {
  Collapse,
  Box,
  Flex,
  Text,
  useDisclosure,
  Icon,
} from '@chakra-ui/react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const CategoryCollapse = ({
  categoryTitle,
  children,
  isCollapsedOpen,
  isCollapsed,
}) => {
  const [isOpen, setIsOpen] = useState(!isCollapsedOpen)
  const { onToggle } = useDisclosure()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Box
        my={4}
        p={'15px 5px 5px 5px'}
        m={'0 -5px 0 -5px'}
        _hover={{
          bg: isCollapsed === true ? '#ececec' : null,
        }}
        cursor="pointer"
      >
        <Flex
          onClick={handleToggle}
          direction={'row'}
          justifyContent={'space-between'}
          w={'185px'}
        >
          <Text fontWeight="semibold" ml={2}>
            {categoryTitle}
          </Text>

          {isCollapsed === true && (
            <>
              {isOpen ? (
                <Icon as={IoIosArrowUp} color={'#865DFF'} />
              ) : (
                <Icon as={IoIosArrowDown} color={'#865DFF'} />
              )}
            </>
          )}
        </Flex>

        {isCollapsed === true && (
          <Collapse in={isOpen} animateOpacity>
            <Box
              _hover={{
                opacity: isCollapsed === false ? 0.5 : null,
              }}
            >
              {children}
            </Box>
          </Collapse>
        )}
        {isCollapsed === false && (
          <Box
            _hover={{
              opacity: isCollapsed === false ? 0.5 : null,
            }}
          >
            {children}
          </Box>
        )}

        <Box
          w={'100%'}
          h={'1px'}
          background={'#000'}
          border={'1px solid #ececec'}
          borderTop={'15px'}
          borderBottom={'15px'}
        />
      </Box>
    </>
  )
}

export default CategoryCollapse
