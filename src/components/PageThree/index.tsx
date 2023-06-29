import React, { useState } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Parallax } from 'swiper'

import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/parallax'

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
      pos="relative"
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt="90px"
    >
      <Swiper
        // install Swiper modules
        className="innerSwiper"
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
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="center"
              w="400px"
              h="100%"
              ml="42px"
              mt="-45px"
            >
              <Text
                fontSize="28px"
                fontWeight="700"
                color="black"
                pb="24px"
                data-swiper-parallax-y="-400"
                data-swiper-parallax-duration="800"
                data-swiper-parallax-opacity="0"
              >
                {item.title}
              </Text>
              {item?.desc?.map((it: string, index: number) => (
                <Text
                  key={it}
                  fontSize="14px"
                  lineHeight="24px"
                  color="black"
                  pb="24px"
                  _last={{
                    paddingBottom: 0,
                  }}
                  data-swiper-parallax-y={index * 100 - 300}
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                >
                  {it}
                </Text>
              ))}
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex justifyContent="center" alignItems="center" pos="absolute" top="0px" w="100%" h="100%">
        <Flex direction="column" justifyContent="center" w="1286px" h="248px">
          {[0, 1, 2].map((item: number) => (
            <Box
              key="item"
              h="72px"
              w="2px"
              bg={index == item ? 'purple' : 'black'}
              mt="16px"
              _first={{ marginTop: 0 }}
            />
          ))}
        </Flex>
      </Flex>
      <Flex justifyContent="center" pos="absolute" top="167px" w="100%" h="100%">
        <Text fontSize="28px" fontWeight="900" color="black" mt="-45px" textAlign="center">
          Build an omnichain application with RollNA easily!
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" pos="absolute" top="0" w="100%" h="100%">
        <Flex justifyContent="flex-end" w="1286px">
          <Image
            src={arr[index]?.img}
            data-swiper-parallax-y="0"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="800"
            ignoreFallback
            w="667px"
            h="371px"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageThree
