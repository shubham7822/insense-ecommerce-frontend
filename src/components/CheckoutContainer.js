import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CartComponent from './CartComponent'
import Icon from './Icon'
import Navbar from './Navbar'
import Payout from './Payout'
import SubtotalSection from './SubtotalSection'

const CheckoutContainer = () => {

    const cart = useSelector(state => state?.cartItems)

        return (
            <Box>
        <Navbar/>
            <Flex >
            {cart?.length  === 0 ?
            <Box  m={"auto"} mt={"100"}>
            <Center><Icon></Icon></Center>
            <Heading mt={"20px"}  textAlign="center">
                your cart is empty
            </Heading> 
            </Box>
            : 
            <Flex flexDirection={"column"}  width={["500px", "", "", "100%"]}>
                {cart?.map(item  => {
                    console.log(item,"item>>")
                    return <>
                    <SubtotalSection product={item}/>
                    </>
                })}
             </Flex>
            }

            <Payout/>
            </Flex>
            </Box>
        )
}

export default CheckoutContainer
