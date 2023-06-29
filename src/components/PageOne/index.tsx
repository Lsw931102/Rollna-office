/*
 * @Author: Austion
 * @Date: 2023-06-28 22:24:22
 * @LastEditTime: 2023-06-29 13:40:37
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/page/pageOne.tsx
 */
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'
import { Madies } from '@/components/Footer'

function PageOne() {
  return (
    <Flex
      w="100%"
      h={{ base: 'fit-content', lg: '100%' }}
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: px2vw(100), lg: '90px' }}
      pb={{ base: px2vw(40) }}
    >
      <Flex h={{ base: 'fit-content', lg: '100%' }} w={{ base: '100%', lg: '1286px' }} m="0 auto">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml={{ lg: '40px' }}
          px={{ base: px2vw(16), lg: 0 }}
        >
          <Text
            mt={{ base: px2vw(71), lg: 0 }}
            fontSize={{ base: px2vw(50), lg: '90px' }}
            fontFamily="Aoboshi One"
            lineHeight={{ base: px2vw(75), lg: '112px' }}
            color="black"
            letterSpacing="-3px"
            className="fadeInUp"
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="500"
            data-swiper-parallax-opacity="0"
          >
            Empowering Seamless OmniChain Trading
          </Text>
          <Text
            w={{ base: '100%', lg: '815px' }}
            fontSize={{ base: px2vw(20), lg: '24px' }}
            lineHeight={{ base: px2vw(30), lg: '28px' }}
            className="fadeInUp2000"
            color="black"
            letterSpacing={{ base: 0, lg: '-1px' }}
            mt={{ base: px2vw(16), lg: '40px' }}
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          >
            Making Web3 more accessible for both users and developers, while improving the
            non-custody omnichain trading experience
          </Text>
          <Flex display={{ base: 'flex', lg: 'none' }}>
            <Madies />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageOne
