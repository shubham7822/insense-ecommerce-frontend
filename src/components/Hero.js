import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import HeadingSection from './HeadingSection'
import incenseStickImg from "../assets/incensestick.avif"

const Hero = () => {
  return (
    <Flex justify="flex-end" align="center" position="relative">
    <Box w={[ "100%", "100%", "70%"]} >
            <Box w="100%" h="600px"  backgroundImage={`url(${incenseStickImg})`} backgroundSize="cover" bgPosition="50%, 75%" alt="bgImage"></Box>
    </Box>
    <HeadingSection mainText={"Shiv krupa incense sticks!."} subText={"one stop solution for your all your daily religious needs."} />
</Flex>
  )
}

export default Hero
