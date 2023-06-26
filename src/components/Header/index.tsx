/*
 * @Author: Austion
 * @Date: 2023-06-26 12:02:36
 * @LastEditTime: 2023-06-26 12:18:57
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/Header/index.tsx
 */
import React from 'react'
import { Text, Flex, HStack, Image, Link } from '@chakra-ui/react'
import eva from '@/assets/imgs/logo.png'

function Index() {
  return (
    <Flex
      p="30px 60px"
      bgColor="wh.12"
      justify="space-between"
      pos={{ base: 'initial', lg: 'fixed' }}
      w="100%"
    >
      <HStack spacing="10px">
        <Image src={eva} ignoreFallback />
        <Text textStyle="18" backgroundClip="text" color="black">
          RollNA
        </Text>
      </HStack>
      <HStack spacing="30px" textStyle="14">
        <Link color="black">Protocol</Link>
        <Link color="black">Featrues</Link>
        <Link color="black">Roadmap</Link>
        <Link color="black">Communiity</Link>
      </HStack>
    </Flex>
  )
}

export default React.memo(Index)
