import React, { useEffect, useRef } from 'react'
import HeadingSection from '../components/HeadingSection'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'
import axios from "axios";
import Footer from '../components/Footer'
import { Box, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {

  const user = JSON.parse(localStorage.getItem("userInfo"))

  return (
    <div>
     <Navbar/>
     <Box>
      <Text  fontSize={"3xl"} as={"u"} mx="10">{`welcome , ${user?.name}`}</Text>
     </Box>
     <Box mb={"200px"}>
     <Hero/>
     <ProductSection/>
     </Box> 
    </div>
  )
}

export default HomeScreen
