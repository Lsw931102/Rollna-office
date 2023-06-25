/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 10:17:37
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/Header/index.tsx
 */
import React from 'react'
import { Text, Flex, HStack, Image,Link } from '@chakra-ui/react'
import eva from '@/assets/imgs/eva.png'

function Index() {
  return (
    <Flex padding="30px 60px" bgColor="white.12" justify="space-between">
      <HStack spacing="10px">
        <Image src={eva} ignoreFallback />
        <Text
          textStyle="18"
          backgroundClip="text"
          color="black"
          backgroundImage="linear-gradient(180deg, #5E81FF 0%, #3A68E7 100%)"
        >
          RollNA
        </Text>
      </HStack>
      <HStack spacing="30px" textStyle="14">
        <Link color="black">
          Protocol
        </Link>
        <Link color="black">
          Featrues
        </Link>
        <Link color="black">
          Roadmap
        </Link>
        <Link color="black">
          Communiity
        </Link>
      </HStack>
    </Flex>
  )
}

export default React.memo(Index)
