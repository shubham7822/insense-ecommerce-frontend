import { Center, Text } from '@chakra-ui/react'
import React from 'react'
import ProductLists from './ProductLists'

const ProductSection = () => {

  const user = JSON.parse(localStorage.getItem("userInfo"))
  return (
    <div>
       <Center mt={"20px"}> 
        <Text fontSize={"2xl"} >
       {`Some Good Deals for You`}  
        </Text>
        </Center>
      <ProductLists/>
    </div>
  )
}

export default ProductSection
