import { Suspense } from "react"
import { Badge, Box, Button, Card, Center, Flex, Image, Text } from "@chakra-ui/react";
// import StarRating from "../starRating/starRating"
import { Link, useNavigate } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import {FaRegEye} from "react-icons/fa"
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducers";
// import CartWishlist from "../shopActions/cartWishlist";



const renderLoader = () => <p>Loading</p>;

const CardBody = ({ product }) => {

    const navigate = useNavigate();

    return (
        <Box position="relative" shadow="lg" w={{ base: "340px", md: "350px", lg: "400px" }} h="400px" overflow={"hidden"}>
                <Badge bgColor="black" color="white" position="absolute" top="10px" right="10px">{product.countInStock}</Badge>
                <Link to={"/"}>
                        <Image w="100%" src={product.imageUrl} h="200px" alt="product" p="4"  objectFit="cover"  />
                </Link>
                <Box p="4" fontSize="14px">
                    <Flex px="5px" align="center" justify="space-between">
                        <Text fontSize="16px" fontWeight="600">
                           Rs { product.price}
                        </Text>
                    </Flex>
                    <Text my="20px" p="3px 6px" >{product.name}</Text>
                </Box>
                <Center mx={"auto"} w={"80%"} overflow="hidden">
                            <Button flex="1" bgColor={"black"}  _hover={{ bg: "black" }} color="white" fontSize="14px"  borderRadius="5" onClick={async (e) => {
                            navigate(`/cart/${product?._id}`,{...product})
                            e.preventDefault()
                            }}><FaRegEye /></Button>
                    </Center>
        </Box>
    )
}

export default CardBody;