// DrawerComponent.js
import React from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Avatar, Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function DrawerComponent({ isOpen, onClose }) {

    const user = JSON.parse(localStorage.getItem("userInfo"))
  
    const navigate = useNavigate()
    
    const logOut = (e) => {
        localStorage.removeItem("userInfo")
        navigate("/login")
        e.preventDefault()
    }
    
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right">
      <DrawerOverlay>
        <DrawerContent bg={"white"} color="black">
          <DrawerCloseButton />
          <DrawerHeader>Checkout</DrawerHeader>
          <DrawerBody>
           <Avatar bg="teal.500" />
            <Box>
            <Heading as={"h1"} size="md" mt={"20px"}>Logged in as</Heading>
             <h3>{user?.email}</h3>
          <Heading color={"black"} size="xs" cursor={"pointer"} mt="10px" onClick={(e) => logOut(e)}>Logout</Heading>
            </Box>
            {/* <Box mt={"20px"}>
                <Heading size={"sm"} color="black">Cart</Heading>
            </Box> */}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default DrawerComponent;
