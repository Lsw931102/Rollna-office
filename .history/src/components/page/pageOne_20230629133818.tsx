/*
 * @Author: Austion
 * @Date: 2023-06-28 22:24:22
 * @LastEditTime: 2023-06-29 13:38:18
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/page/pageOne.tsx
 */
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'

function PageOne() {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Flex h={{ base: 'fit-content', lg: '100%' }} w={{ base: '100%', lg: '1286px' }} m="0 auto">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml={{ lg: '40px' }}
        >
          <Text
            fontSize={{ base: px2vw(50), lg: '90px' }}
            lineHeight={{ base: px2vw(75), lg: '112px' }}
            color="black"
            className='fadeInUp'
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="500"
            data-swiper-parallax-opacity="0"
          >
            Make decentralized
          </Text>
          <Text
            fontSize={{ base: px2vw(50), lg: '90px' }}
            lineHeight={{ base: px2vw(75), lg: '112px' }}
            color="black"
            className='fadeInUp'
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          >
            trading easier
          </Text>
          <Text
            fontSize={{ base: px2vw(20), lg: '24px' }}
            lineHeight={{ base: px2vw(30), lg: '28px' }}
            className='fadeInUp2000'
            color="black"
            mt={{ base: px2vw(16), lg: '40px' }}
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          >
            Revolutionizing Crypto with one-stop multi-chain trading Protocol
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageOne
