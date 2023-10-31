import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

const SuccessPage = () => {
  return (
    <div>
      <Navbar/>
      <Box w={["","100%","","50%"]} border="px solid red" m={["auto","auto","","none"]} overflow="hidden">
          <Image border="px solid red" display="block" w={["60%","","","80%"]}  m="auto" 
          src={"https://cdn.dribbble.com/users/583807/screenshots/5187139/v5.gif"} />
        </Box>
    </div>
  )
}

export default SuccessPage
