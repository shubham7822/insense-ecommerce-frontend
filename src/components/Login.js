import React, { useEffect } from 'react'
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
  Center,
  Image,
  Text
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";
import Icon from './Icon';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';
import insenseStick from "../assets/insenseLandingImage.jpeg"

const API_URI = process.env.REACT_APP_API_URI

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const Login = () => {
    
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate();
    const handleShowClick = () => setShowPassword(!showPassword);
    
    const [state,setState] = useState({});

    

    const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]:e.target.value
    })
    }

    const onSubmitHandler = async(e) => {
        try {
          const config = {
            headers:{
                "Content-type":"application/json"
            }
          }

          setLoading(true)

          if(!state?.email && !state?.password){
            toast({
              title: "password and email required",
              status: 'warning',
              duration: 5000,
              isClosable: true,
            })
             return 
          }

          const {data} = await axios.post(`${API_URI}/api/users/login`,
          {
            email:state?.email,
            password:state?.password
          },
          config)

          toast({
            title: 'logged in successfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          localStorage.setItem("userInfo",JSON.stringify(data));
           navigate("/")
          setLoading(false)
        }catch(err){
            toast({
                title: err?.response?.data?.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
        }
        e.preventDefault()
    }

  return (
      <div className='loginSignUpImage'>
       
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
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="email" name="email" onChange={(e) => handleChange(e)} borderColor="black" bg={"white"} bplaceholder="email address" />
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
                  variant="solid"
                  color={"white"}
                  borderRadius="10px"
                  bg={"black"}
                  width="full"
                  _hover={{bg:"black"}}
                  onClick={() => {
                    setState({
                      ...state,
                      password:"test@123",
                      email:"shubham@shivkrupa.com"
                    })
                  }}
                >
                  Use Guest Credentials
                </Button>
                <Button
                  variant="solid"
                  color={"white"}
                  borderRadius="10px"
                  bg={"black"}
                  width="full"
                  _hover={{bg:"black"}}
                  onClick={onSubmitHandler}
                >
                  {!loading ? "Login" : "logging you in..." }
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          New to Shivkrupa?{" "}
          <Link color="back" href="/signUp">
            Sign Up
          </Link>
        </Box>

      </Flex>
      </div>
  ) 
}

export default Login
