import { Box, Button, Flex, Heading, Image, Select, Text,Input, CardBody, Card, CardFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {RiDeleteBinFill} from "react-icons/ri"
import {IoAddOutline} from "react-icons/io5"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { addToCart } from '../redux/reducers/cartReducers'
import { useDispatch } from 'react-redux'

const CartComponent = () => {

  const state = useParams()
  const [productById,setProductById] = useState({})
  const[qty,setQty] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
      const getProductById = async() => {
        const {data} = await axios.get(`/api/products/${state?.id}`)
        setProductById({...data})
      }

      getProductById()
  },[])

  console.log(productById,"id>>>")

  const addToCartHandler = (e) => {
     console.log(productById,"id>>>>")
     console.log({...productById,qty},"30>>>")
     dispatch(addToCart({...productById,qty}))
     navigate("/cart")
     e.preventDefault()
  }


const quantityChangeHandler = (e) => {
  setQty(e.target.value)
  dispatch(addToCart({...productById,qty:e.target.value}))
}

  return (
    <>
     <Box display={["block","","flex","flex"]} pt="40px" w="75%" m="auto" mt="7%" border="px solid red">
       <Box w={["","100%","","50%"]} border="px solid red" m={["auto","auto","","none"]} overflow="hidden">
          <Image border="px solid red" display="block" w={["60%","","","100%"]}  m="auto" src={productById?.imageUrl} />
        <Box  display={["flex","","","flex"]} gap="10px" justifyContent="center">
        <Image  w={["15%","","","10%"]} m="right" mt="5%" src={""}/>
        <Image w={["15%","","","10%"]} m="right" mt="5%" src={""}/>
        </Box>
       </Box>
       <Box ml={["","","4%","4%"]} w={["","100%","","50%"]}  border="px solid red">
        <Text mt="5px" ml="10px" fontSize="18px" color="rgb(153, 153, 153)">{}</Text>
        <Text ml="9px" fontWeight="700" color="rgb(35,187,117)">{}</Text> 
        <Box display="flex" alignItems="center">
                      <Text ml="10px" color="black" fontSize="27px" fontWeight="700" >₹{productById?.price}</Text>
                      </Box>
                      <Text  style={{display:"inline",fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"10px"}}>₹ 10 discount on 1st order</Text>
                      <Text  style={{fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"12px"}}>Favorite</Text>
                      <Button  ml="10px" borderRadius="50px" h="22px" w={["","","","22%"]} color="rgb(153, 153, 153)">Free Delivery</Button><br/>
                      <Box mt="20px" mr="10px" w={"auto"}>
                      <Text style={{display:"inline",fontSize:"16px", color:"rgb(140, 140, 140)", marginLeft:"10px"}}>{productById?.description}</Text> 
                      </Box>
                      <Button  _hover={{bgColor:'rgb(35,187,117)'}} ml="10px" mt="15px" borderRadius="50px" bgColor="rgb(35,187,117)" color="white">{productById?.rating}⭐</Button>

                     <Flex alignItems="center" mt={"30px"}>
                        <Box mx={"20px"}>
                          <Text mb={2}>Count in stock</Text>
                            <Select placeholder='Select option' value={qty} onChange={(e) => quantityChangeHandler(e)} size="sm" borderColor={'gray.400'} cursor="pointer">
                              {new Array(productById?.countInStock).fill("").map((item,index)  => {
                                  return (
                                  <option value={index + 1}>{index + 1}</option>
                                  )
                                  })}
                        </Select>
                        </Box>
                    </Flex>
                   <Box mx={5}>
                    <Button bg="black" _hover={{bg:"black"}} mt="20px" color={"white"} onClick={(e) => addToCartHandler(e)}>Add  to cart</Button>
                    </Box>
       </Box>
     </Box>
    </>
  )
}

export default CartComponent
