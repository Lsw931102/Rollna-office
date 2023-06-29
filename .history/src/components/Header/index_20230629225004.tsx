/*
 * @Author: Austion
 * @Date: 2023-06-26 12:02:36
 * @LastEditTime: 2023-06-29 15:33:26
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/Header/index.tsx
 */
import React, { useState } from 'react'
import {
  Text,
  Flex,
  HStack,
  Image,
  Link,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
} from '@chakra-ui/react'
import eva from '@/assets/imgs/logo.png'
import nav from '@/assets/imgs/nav.png'
import px2vw from '@/utils/px2vw'

function Index() {
  const [isOpenDrawer, setisOpenDrawer] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <Flex
      p={{ base: `${px2vw(48)} ${px2vw(16)} ${px2vw(16)}`, lg: '30px 60px' }}
      bgColor="wh.12"
      justify="space-between"
      pos="fixed"
      w="100%"
      zIndex={99}
    >
      <HStack spacing="10px">
        <Image src={eva} ignoreFallback />
        <Text textStyle="18" backgroundClip="text" color="black">
          RollNA
        </Text>
      </HStack>
      <HStack spacing="30px" textStyle="14" display={{ base: 'none', lg: 'flex' }}>
        <Link color="black">Featrues</Link>
        <Link color="black">Using Cases</Link>
        <Link color="black">Roadmap</Link>
      </HStack>
      <Button
        colorScheme="wh.12"
        variant="ghost"
        onClick={() => {
          setisOpenDrawer(true)
        }}
        display={{ base: 'block', lg: 'none' }}
      >
        <Image src={nav} ignoreFallback />
      </Button>
      <Drawer
        isOpen={isOpenDrawer}
        onClose={() => {
          setisOpenDrawer(false)
        }}
        placement="right"
      >
        <DrawerOverlay />

        <DrawerContent pl={{ base: px2vw(24), lg: '24px' }}>
          <DrawerCloseButton />
          <Box
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
            onClick={()=>{setIndex(1)}}
          >
            Featrues
          </Box>
          <Box
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
            onClick={()=>{setIndex(2)}}
          >
            Using Cases
          </Box>
          <Box
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
            onClick={()=>{setIndex(3)}}
          >
            Roadmap
          </Box>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default React.memo(Index)
