import { Box, Button, Card, CardBody, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const imgSrc= "data:image/png;base64,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"

const Success = () => {

    const navigate = useNavigate()


  return (
    <>
    <Box display={"flex"} justifyContent="center" alignItems={"center"} height="70vh">
       <Card boxShadow='xl' width={"300px"} bg="whiteAlpha.400" color={"black"} height={["600px","","","350px"]}  w={["200px","","","300px"]}>
                      <CardBody>
                        <Image 
                        src={imgSrc}
                        height="200px"
                        width={"200px"}
                        objectFit={"cover"}
                        />
                        <Text>Thankyou for shopping with us!</Text>
                        <Button bg="black" _hover={{bg:"black"}}  w="100%" cursor="pointer" onClick={(e) => navigate("/")}
                        mt="20px" color={"white"}>Go Back</Button>
                    </CardBody>
              </Card>
    </Box>
    </>
  )
}

export default Success
