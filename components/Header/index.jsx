import { Box, Divider, Flex } from '@chakra-ui/react'

import HeaderTop from './HeaderTop'
import HeaderBody from './HeaderBody'
import HeaderBottom from './HeaderBottom'
import HeaderMobile from './HeaderMobile'
import Banner from '../Banner'
import CountdownTimer from '../CountdownTimer'

import BottomNavigation from '../BottomNavigation'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

function Header({ onOpen }) {
  const boxShadow = `rgba(0, 0, 0, 0.07) 0px 1px 1px,
                    rgba(0, 0, 0, 0.07) 0px 2px 2px,
                    rgba(0, 0, 0, 0.07) 0px 4px 4px,
                    rgba(0, 0, 0, 0.07) 0px 8px 8px`

  const [scrolled, setScrolled] = useState(false)
  const [showBody, setShowBody] = useState(false)
  const [showBottom, setShowBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0
      setScrolled(!isTop)
      const scrollY = window.scrollY
      const headerHeight = headerRef.current.clientHeight
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerRef = useRef(null)

  const router = useRouter()

  return (
    <>
      <Box
        as="header"
        zIndex={50}
        boxShadow={scrolled ? boxShadow : 'none'}
        backdropFilter={scrolled ? 'blur(20px) saturate(2)' : 'none'}
        transition="all 0.2s ease-in-out"
        top={0}
        left={0}
        right={0}
        _dark={{ bg: 'blackAlpha.50' }}
        _light={{ bg: 'white' }}
        p={2}
        ref={headerRef}
      >
        <Flex
          direction={'row'}
          display={{ base: 'none', md: 'initial' }}
          w={'100%'}
        >
          {router.pathname === '/' ? (
            <>
              <CountdownTimer />
            </>
          ) : (
            <></>
          )}

          <Banner />
          <HeaderTop />
          <Divider />
          <HeaderBody />
          <Divider />
          <HeaderBottom />
        </Flex>
      </Box>


      <Flex display={{ base: 'initial', md: 'none' }} w={'100%'}>
        <HeaderMobile onOpen={onOpen} />
      </Flex>

      <Flex display={{ base: 'initial', md: 'none' }} w={'100%'}>
        <BottomNavigation />
      </Flex>
      
    </>
  )
}

export default Header
