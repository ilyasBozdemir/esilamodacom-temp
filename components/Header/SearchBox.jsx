import {
  Button,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  HStack,
} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import ReactSearchBox from 'react-search-box'

function SearchBox() {
  const inputRef = useRef(null)
  const [val, setVal] = React.useState('')
  const [datas, setDatas] = React.useState([
    {
      key: 'john',
      value: 'John Doe',
    }
  ])

  const handleClick = () => {
    setVal('')
  }
  const changeClick = (e) => {
    setVal(e.target.value)
  }
  const searchClick = () => {
    alert('search')
  }

  return (
    <>
      <HStack spacing={-0.5}>
        <InputGroup size="md">
          <Input
            ref={inputRef}
            type={'text'}
            placeholder="ürün, kategorileri ara.."
            value={val}
            onChange={changeClick}
            w={'350px'}

          />

          {val !== '' ? (
            <>
              <InputRightElement>
                <Icon
                  as={MdClose}
                  size="md"
                  onClick={handleClick}
                  cursor={'pointer'}
                  _hover={{ color: 'red.400' }}
                />
              </InputRightElement>
            </>
          ) : (
            <></>
          )}
        </InputGroup>
        <Button bg={'#ECF2FF'} color={'#7b61ff'} onClick={searchClick}>
          <Icon as={BiSearch} />
        </Button>
      </HStack>
    </>
  )
}

export default SearchBox
