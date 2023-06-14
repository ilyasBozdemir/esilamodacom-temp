import {
  Box,
  Center,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect } from 'react';
import Logo from '../Logo'
import { SubscribeForm } from './SubscribeForm '

function PopupWithDiscount() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Box>
        <Modal
          isOpen={isOpen}
          onClose={() => void 0}
          size="2xl"
          // `trapFocus` ve `blockScrollOnMount` yalnızca önizlemenin düzgün çalışması için kapatılır.
          blockScrollOnMount={false}
          trapFocus={false}
          closeOnOverlayClick
        >
          <ModalOverlay />
          <ModalContent borderRadius="2xl" mx="4">
            <ModalHeader>

              <Tooltip label={'kapat'}>
                <ModalCloseButton onClick={onClose} _hover={{
                  color: 'red'
                }} />
              </Tooltip>


            </ModalHeader>
            <ModalBody>
              <Stack
                maxW="xs"
                mx="auto"
                py={{
                  base: '10',
                  md: '14',
                }}
                spacing={{
                  base: '6',
                  md: '10',
                }}
              >
                <Center>
                  <Logo height="5" />
                </Center>


                <Stack spacing="3" textAlign="center">
                  <Text fontSize="lg">E-mail adresini girerek,</Text>
                  <Text
                    color={useColorModeValue('blue.500', 'blue.200')}
                    fontWeight="extrabold"
                    fontSize={{
                      base: '5xl',
                      md: '6xl',
                    }}
                    textTransform="uppercase"
                    transform="scale(1.2)"
                  >
                    %20 indirim
                  </Text>
                  <Text fontSize="lg">
                    <Box as="span" whiteSpace="nowrap" fontWeight="bold">
                      sonraki alışverişinde
                    </Box>{' '}
                    kullanabilirsin + yeni ürünlere özel erişim kazanabilirsin.
                  </Text>
                </Stack>
                <SubscribeForm />
                <Link
                  fontSize="sm"
                  textAlign="center"
                  color={useColorModeValue('gray.600', 'gray.400')}
                  textDecoration="underline"
                  onClick={() => onClose()}
                >
                  Hayır, indirim istemiyorum.
                </Link>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default PopupWithDiscount
