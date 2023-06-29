import React, { useState } from 'react'
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Parallax } from 'swiper'

import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/parallax'

import px2vw from '@/utils/px2vw'

import Baowr01 from '@/assets/imgs/Baowr01.png'
import Baowr02 from '@/assets/imgs/Baowr02.png'
import Baowr03 from '@/assets/imgs/Baowr03.png'

interface ArrItem {
  img: string
  title: string
  desc: string[]
}

export const arr: ArrItem[] = [
  {
    img: Baowr01,
    title: 'AMM DEX',
    desc: [
      'Omni-assets liquidity are merged',
      'Omni-swap is supported',
      'Save intermediate costs such as bridge fees and exchange fees',
    ],
  },
  {
    img: Baowr02,
    title: 'OrderBook DEX',
    desc: [
      'Omni-assets listing and trading are supported',
      'One-step deposit and withdrawal through omnichain are supported',
      'Market makers are supported to deploy common omni-assets trading strategies',
    ],
  },
  {
    img: Baowr03,
    title: 'Loans and Lending',
    desc: [
      'Omni-assets are supported to borrow and lend',
      'Omnichain settlement are supported',
      'Elevated smart contract accounts support omni-assets operation',
    ],
  },
]
function PageThree() {
  const [index, setIndex] = useState(0)

  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Box w={{ base: '100%', lg: '1286px' }} m="0 auto">
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight="900"
          color="black"
          mt={{ base: px2vw(16), lg: '32px' }}
        >
          Build an omnichain application with RollNA easily!
        </Center>
        <Flex mt={{ base: px2vw(70), lg: '70px' }}>
          <Box marginRight={{ base: px2vw(80), lg: '80px' }} mt={{ base: px2vw(70), lg: '70px' }}>
            <Box
              h={{ base: px2vw(72), lg: '72px' }}
              w={{ base: px2vw(2), lg: '2px' }}
              bg={index == 0 ? 'purple' : 'black'}
            ></Box>
            <Box
              h={{ base: px2vw(72), lg: '72px' }}
              w={{ base: px2vw(2), lg: '2px' }}
              bg={index == 1 ? 'purple' : 'black'}
              mt={{ base: px2vw(16), lg: '16px' }}
            ></Box>
            <Box
              h={{ base: px2vw(72), lg: '72px' }}
              w={{ base: px2vw(2), lg: '2px' }}
              bg={index == 2 ? 'purple' : 'black'}
              mt={{ base: px2vw(16), lg: '16px' }}
            ></Box>
          </Box>
          <Box flex="1">
            <Swiper
              // install Swiper modules
              className="swiperView"
              modules={[Mousewheel, Parallax]}
              touchRatio={0.5}
              centeredSlides
              direction="vertical"
              nested={true}
              touchMoveStopPropagation
              mousewheel={{
                thresholdTime: 800,
              }}
              parallax
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(n) => setIndex(n.activeIndex)}
            >
              {arr.map((item: ArrItem) => (
                <SwiperSlide key={item.title}>
                  <Flex align="center">
                    <Box w={{ base: px2vw(400), lg: '400px' }} flex="1">
                      <Text
                        fontSize={{ base: px2vw(28), lg: '28px' }}
                        fontWeight="900"
                        color="black"
                        pb={{ base: px2vw(24), lg: '24px' }}
                        data-swiper-parallax-y="-400"
                        data-swiper-parallax-duration="800"
                        data-swiper-parallax-opacity="0"
                      >
                        {item.title}
                      </Text>
                      {item?.desc?.map((it: string, index: number) => (
                        <Text
                          key={it}
                          fontSize={{ base: px2vw(14), lg: '14px' }}
                          color="black"
                          pb={{ base: px2vw(24), lg: '24px' }}
                          data-swiper-parallax-y={index * 100 - 300}
                          data-swiper-parallax-duration="800"
                          data-swiper-parallax-opacity="0"
                        >
                          {it}
                        </Text>
                      ))}
                    </Box>
                    <Image
                      src={item.img}
                      data-swiper-parallax-y="0"
                      data-swiper-parallax-opacity="0"
                      data-swiper-parallax-duration="800"
                      ignoreFallback
                      h={{ base: px2vw(400), lg: '400px' }}
                    />
                  </Flex>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default PageThree
