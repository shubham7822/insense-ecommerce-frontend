import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import insenseIcon from "../assets/insenseIcon.png"
import Navbar from './Navbar'

const NotFound = () => {
  return (
    <div>
        <Navbar/>
       <Box w={["","100%","","50%"]} border="px solid red" m={["auto","auto","","none"]} overflow="hidden">
          <Image border="px solid red" display="block" w={["60%","","","80%"]}  m="auto" 
          src={"https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg"} />
        </Box>
    </div>
  )
}

export default NotFound
