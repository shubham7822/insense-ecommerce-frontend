import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Image,
  Badge,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/logo.png"
import { FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import DrawerComponent from "./Drawer";
import { useSelector } from "react-redux";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const navigate = useNavigate()
  const onClose = () => setIsOpen(false);
  const cart = useSelector(state => state?.cartItems)

  return (
    <>    
    <Flex
    align="center" 
    flexWrap={"wrap"}
    justify={"space-around"}
    minW="15%" 
    fontSize="18px"  
    color="brand.900" 
    ps={[ "40px", "40px", 0 ]}
    >
      <Image src={logo} 
      cursor="pointer" 
      onClick={() => navigate("/") }
      objectFit='cover'  alt="Logo"  h="120px" width={["100%","","","300px"]} />
                   <Flex p={2} alignItems="center" onClick={() => navigate("/cart")}   cursor={"pointer"} gap={2} bg="gray.200" borderRadius={5} >
                           <FiShoppingCart /><p>{cart?.length || 0}</p>
                     </Flex>

                    <Button color={"black"} onClick={onOpen}>
                      <GiHamburgerMenu/>
                    </Button>
                    <DrawerComponent isOpen={isOpen} onClose={onClose} />
                </Flex>
    </>
  );
}

export default Navbar;
