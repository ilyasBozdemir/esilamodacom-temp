import { Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import ShowcaseImage from '../ShowcaseImage'

function Mobile({ size }) {
  return (
    <>
      <Flex
        as={Stack}
        spacing={4}
        justifyContent={"center"}
        align={"center"}
        w={"full"}
        direction={"column"}
      >
        <ShowcaseImage image={"top-full-picture"} size={size} />
        <ShowcaseImage image={"left-big-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
        <ShowcaseImage image={"right-small-picture"} size={size} />
      </Flex>
    </>
  )
}

export default Mobile    