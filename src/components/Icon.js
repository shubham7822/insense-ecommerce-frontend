import { Image } from '@chakra-ui/react'
import React from 'react'
import insenseIcon from "../assets/insenseIcon.png"
const Icon = () => {
  return (
    <div>
      <Image src={insenseIcon}
       boxSize='90px'
       objectFit='cover'
       alt='insenseIcon'
      ></Image>
    </div>
  )
}

export default Icon
