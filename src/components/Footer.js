import { Box, Flex, Image, Text, VStack,HStack } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'; 
import logo from "../assets/logo.png"

function Footer() {
  return (
    <Box bg="white" boxShadow={"2xl"} color="black" mt={"30px"} position="fixed" left={"0px"} bottom="0px" right={"0px"}>
      <Flex justify="space-around">
      <Image src={logo} 
    objectFit='cover'  alt="Logo"  h="80px" width="300px" ml={"20px"}/>
        <HStack spacing={4} align="center">
          <Flex align="center">
            <FaCheckCircle style={{ marginRight: '8px' }} />
            <Text>Free Shipping</Text>
          </Flex>
          <Flex align="center">
            <FaCheckCircle style={{ marginRight: '8px' }} />
            <Text>24/7 Customer Support</Text>
          </Flex>
        </HStack>
      </Flex>
      <Text textAlign="center" mt={6}>
        &copy; 2023 Shivkrupa incense. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
