import React, { useState } from 'react'
import { Badge, Box, Button, Card, CardBody, Divider, Flex, Image, Input, Link, Select, Text } from "@chakra-ui/react"
import { Link as RouterLink, } from "react-router-dom"
import { FiTrash } from "react-icons/fi";
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Payout from './Payout';
import { addToCart, removeFromCart } from '../redux/reducers/cartReducers';


const SubtotalSection = ({product}) => {
    const[qty,setQty] = useState(1);
    const cart = useSelector(state => state.cartItems)
    const dispatch = useDispatch()


    const quantityHandler = (e) => {
      setQty(e.target.value)
      dispatch(addToCart({...product,qty:e.target.value}))
    }

  return (
    <div>
    <Flex mt={"16"} align={"center"}  justify="space-evenly">
      <Flex key={product?._id} align="center" justify={"center"} w={"800px"} m={"auto"} borderBlock="1px solid #f3f3f3" bgColor="white" p="10px">
                                    <RouterLink to={{pathname:`/cart/${product?._id}`}}>
                                        <Image src={product?.imageUrl} w={["100px","150px"]} />
                                    </RouterLink>
                                    <Box p="30px 10px" flex="1">
                                      <Flex alignItems={"center"} justify="space-between">
                                        <Text fontWeight="bold">{product?.brand}</Text>
                                        <FiTrash cursor={"pointer"} onClick={() => dispatch(removeFromCart(product?._id))}/>
                                       </Flex>
                                        <Text>{product?.description}</Text>
                                        <Flex justify="space-between" align="flex-end" flexWrap="wrap" w="100%" mt="6">
                                            <Text fontSize="18px" fontWeight="bold">Rs {product?.price}</Text>
                                            <Box mx={"20px"}>
                                            <Text mb={2}>Count in stock</Text>
                                          <Select placeholder='Select option' value={qty} onChange={(e) => quantityHandler(e)} size="sm" borderColor={'gray.400'} cursor="pointer">
                                        {new Array(product?.countInStock).fill("").map((item,index)  => {
                                            return (
                                            <option value={index + 1}>{index + 1}</option>
                                            )
                                            })}
                                            </Select>
                                           </Box>
                                        </Flex>
                                    </Box>
         </Flex>
    </Flex>
    </div>
  )
}

export default SubtotalSection
