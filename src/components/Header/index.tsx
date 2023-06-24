/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-24 11:10:15
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/Header/index.tsx
 */
import React from 'react'
import { Text, Flex, HStack, Image } from '@chakra-ui/react'
import eva from '@/assets/imgs/eva.png'

function Index() {
  return (
    <Flex padding="30px 60px" bgColor="white.100" justify="space-between">
      <HStack spacing="10px">
        <Image src={eva} ignoreFallback />
        <Text
          textStyle="18"
          backgroundClip="text"
          color="transparent"
          backgroundImage="linear-gradient(180deg, #5E81FF 0%, #3A68E7 100%)"
        >
          EVA BASE
        </Text>
      </HStack>
      <HStack spacing="30px" textStyle="14">
        <a color="white.100">
          Protocol
        </a>
        <a color="white.100">
          Featrues
        </a>
        <a color="white.100">
          Roadmap
        </a>
        <a color="white.100">
          Communiity
        </a>
      </HStack>
    </Flex>
  )
}

export default React.memo(Index)
