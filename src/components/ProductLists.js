import { Box, Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardBody from './CardBody'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GrPrevious} from "react-icons/gr"
import {GrNext} from "react-icons/gr"
import axios from 'axios';

const ProductLists = () => {

   const [products, setProducts] = useState([])

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode:true,
        centerPading:0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
      {
        breakpoint:950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
    },
  ]
};

 useEffect(() => {
   async function getProducts(){
   try {
    const {data}  =  await axios.get("/api/products");

    setProducts([...data])
   }catch(err){
    console.log(err)
   }
  }
  
  getProducts()
},[])

  return (
    <Slider {...settings}>
      {products?.map((item) => (
        <Box m={2} key={item.id}>
          <CardBody product={item} />
        </Box>
      ))}
    </Slider>
  )
}

export default ProductLists
