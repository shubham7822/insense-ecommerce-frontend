import React from 'react'
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";
import {CgProfile} from "react-icons/cg"

import Icon from './Icon';
import Loading from './Loading';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const handleShowClick = () => setShowPassword(!showPassword);

    const [state,setState] = useState({});
    const toast = useToast();

    const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]:e.target.value
    })
    }


    const handleSignUp = async(e) => {
        try {

          if(!state.name || !state.email || !state.password){
            toast({
              title: 'All fields are required.',
              status: 'warning',
              duration: 5000,
              isClosable: true,
            })

            return 
          }
            const config = {
                headers: {
                  "Content-type": "application/json",
                },
              };
          
              setLoading(true)
              const { data } = await axios.post(
                "/api/users",
                { 
                    name:state.name,
                    email:state.email,
                    password:state.password
                },
                config
              );

              if(data){
                setLoading(false)
                toast({
                    title: 'signed up successfully.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  })
                  
                  localStorage.setItem("userInfo",JSON.stringify(data));
                  navigate("/")
              }
             

        }catch(err){
            toast({
                title: err.response.data.message,
                status: 'warning',
                duration: 5000,
                isClosable: true,
              })
              setLoading(false)
        }
        e.preventDefault()
    }


  return (
 
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          {/* <Avatar bg="teal.500" />
          */}
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
              <Center><Icon></Icon></Center>
              <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CgProfile  />}
                    />
                    <Input type="name" onChange={(e) => handleChange(e)} borderColor="black" bg={"white"} name="name" placeholder="enter name" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" onChange={(e) => handleChange(e)} name="email"  borderColor="black" bg={"white"} placeholder="email address" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      colorScheme="white"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => handleChange(e)}
                      name="password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link>forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                //   type="submit"
                  variant="solid"
                  borderRadius="10px"
                  bg={"black"}
                  width="full"
                  onClick={(e) => handleSignUp(e)}
                >
                  {!loading ? "sign up" : <Loading/> }
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to us?{" "}
          <Link color="back" href="/login">
            Login
          </Link>
        </Box>
      </Flex>
  ) 
}

export default SignUp
