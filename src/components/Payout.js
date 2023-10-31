import { Box, Button, Card, CardBody,Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

const Payout = () => {

      const cartItems = useSelector(state => state?.cartItems)

      const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };
    
    const getCartSubTotal = () => {
        return cartItems?.reduce((price, item) => price + item?.price * item?.qty, 0)
          .toFixed(2);
      };

      const user = JSON.parse(localStorage.getItem("userInfo"))

    const handleCheckout = (e) => {
      axios
        .post(`/api/stripe/checkout`, {
          cartItems,
          userId: user?._id,
        })
        .then((response) => {
          if (response?.data?.url) {
            console.log(response?.data?.url)
            window.location.href = response.data.url;
          }
        })
        .catch((err) => console.log(err.message));
        e.preventDefault()
    };

  return (
    <Box mt={"16px"} mx={["16","","","40"]}>
       <Card boxShadow='xl' width={"300px"} bg="whiteAlpha.400" color={"black"} height={["300px","","","250px"]}  w={["200px","","","300px"]}>
                      <CardBody>
                        <Text>test card: 4242 4242 4242 4242</Text>
                        <Text>use any future date 12/34</Text>
                        <Text>any three-digit CVC</Text>
                        <Text mt="10px">subTotal {getCartCount()} items</Text>
                        <Text fontWeight={"bold"}>{getCartSubTotal()}</Text>
                        <Button bg="black" _hover={{bg:"black"}} onClick={(e) => handleCheckout(e)}
                        isDisabled={cartItems?.length === 0}  mt="20px" color={"white"}>Checkout</Button>
                    </CardBody>
              </Card>
    </Box>
  )
}

export default Payout
