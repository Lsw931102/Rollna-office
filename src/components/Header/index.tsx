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
  SkipNavLink,
  Center,
} from '@chakra-ui/react'
import eva from '@/assets/imgs/logo.png'
import nav from '@/assets/imgs/nav.png'
import px2vw from '@/utils/px2vw'

function Index(prop: any) {
  const [isOpenDrawer, setisOpenDrawer] = useState(false)
  const handClick = (val: number) => {
    prop.Click(val)
  }
  const getisShow = () => {
    prop.onClick(true)
  }
  return (
    <Flex
      p={{ base: `${px2vw(48)} ${px2vw(16)} ${px2vw(16)}`, lg: '30px 60px' }}
      bgColor="wh.12"
      justify="space-between"
      pos="fixed"
      w="100%"
      zIndex="99"
    >
      <HStack spacing="10px">
        <SkipNavLink
          href="#one"
          id="one"
          h="100%"
          w="100%"
          position="unset"
          display="block"
          cursor="pointer"
        >
          <Image
            src={eva}
            ignoreFallback
            onClick={() => {
              handClick(0)
            }}
          />
        </SkipNavLink>

        <Text textStyle="18" backgroundClip="text" color="black">
          RollNA
        </Text>
      </HStack>
      <HStack spacing="30px" textStyle="14" display={{ base: 'none', lg: 'flex' }}>
        <Link
          color="black"
          cursor="pointer"
          onClick={() => {
            handClick(1)
          }}
        >
          Featrues
        </Link>
        <Link
          color="black"
          cursor="pointer"
          onClick={() => {
            handClick(2)
          }}
        >
          Using Cases
        </Link>
        <Link
          color="black"
          cursor="pointer"
          onClick={() => {
            handClick(3)
          }}
        >
          Roadmap
        </Link>
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

        <DrawerContent pl={{ base: px2vw(24), lg: '24px' }} maxW="60%">
          <DrawerCloseButton right={{ base: px2vw(16) }} top={{ base: px2vw(16) }} />

          <Box
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
            onClick={() => {
              setisOpenDrawer(false)
            }}
          >
            <SkipNavLink href="#two" id="two" h="100%" w="100%" position="unset" display="block">
              Featrues
            </SkipNavLink>
          </Box>
          <Box
            onClick={() => {
              setisOpenDrawer(false)
            }}
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
          >
            <SkipNavLink
              href="#three"
              id="three"
              h="100%"
              w="100%"
              position="unset"
              display="block"
            >
              Using Cases
            </SkipNavLink>
          </Box>
          <Box
            onClick={() => {
              setisOpenDrawer(false)
            }}
            pt={{ base: px2vw(60), lg: '0' }}
            color="black"
            fontSize={{ base: px2vw(14), lg: '14px' }}
          >
            <SkipNavLink href="#four" id="four" h="100%" w="100%" position="unset" display="block">
              Roadmap
            </SkipNavLink>
          </Box>
          <Center position="absolute" bottom={{ base: px2vw(40) }} left="20%">
            <Button
              onClick={() => {
                getisShow()
                setisOpenDrawer(false)
              }}
              bg="purple"
              color="wh.100"
              mt={{ base: px2vw(10), lg: '10px' }}
              pt={{ base: px2vw(12) }}
              pb={{ base: px2vw(12) }}
              pl={{ base: px2vw(24) }}
              pr={{ base: px2vw(24) }}
              colorScheme="purple"
            >
              Contact us
            </Button>
          </Center>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default React.memo(Index)
