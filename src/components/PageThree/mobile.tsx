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

function PageMobileThree() {
  const [index, setIndex] = useState(0)

  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={px2vw(80)}
      pb={px2vw(40)}
    >
      <Flex direction="column" w="100%" m="0 auto" p={{ base: '10px', lg: '0' }}>
        <Center
          fontSize={{ base: px2vw(28), lg: '32px' }}
          fontWeight="900"
          fontFamily="DT Getai Grotesk Display"
          color="black"
          mt={{ base: px2vw(16), lg: '32px' }}
          textAlign="center"
        >
          Build an omnichain application with RollNA easily!
        </Center>
        <Box h="100%">
          <Swiper
            // install Swiper modules

            modules={[Mousewheel, Parallax]}
            touchRatio={0.5}
            centeredSlides
            nested={true}
            touchMoveStopPropagation
            mousewheel={{
              thresholdTime: 800,
              forceToAxis: true,
            }}
            parallax
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(n) => setIndex(n.activeIndex)}
          >
            <SwiperSlide>
              <Image
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="0"
                data-swiper-parallax-duration="800"
                src={Baowr01}
                ignoreFallback
                w="100%"
              />
              <Box w="100%" mt={{ base: px2vw(50) }}>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(24), lg: '28px' }}
                  fontWeight="900"
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  One-stop multi-chain DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Multi-chain token listing and trading are supportedX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Market makers are supported to deploy common multi-chain trading strategies on DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                >
                  Make user experience similar to CEX
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="0"
                data-swiper-parallax-duration="800"
                src={Baowr02}
                ignoreFallback
                w="100%"
              />
              <Box w="100%" mt={{ base: px2vw(50) }}>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(24), lg: '28px' }}
                  fontWeight="900"
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  One-stop multi-chain DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Multi-chain token listing and trading are supportedX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Market makers are supported to deploy common multi-chain trading strategies on DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                >
                  Make user experience similar to CEX
                </Text>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-x="0"
                data-swiper-parallax-duration="800"
                src={Baowr03}
                ignoreFallback
                w="100%"
              />
              <Box w="100%" mt={{ base: px2vw(50) }}>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(24), lg: '28px' }}
                  fontWeight="900"
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  One-stop multi-chain DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Multi-chain token listing and trading are supportedX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                  pb={{ base: px2vw(24), lg: '24px' }}
                >
                  Market makers are supported to deploy common multi-chain trading strategies on DEX
                </Text>
                <Text
                  data-swiper-parallax-x="-400"
                  data-swiper-parallax-duration="800"
                  data-swiper-parallax-opacity="0"
                  fontSize={{ base: px2vw(14), lg: '14px' }}
                  color="black"
                >
                  Make user experience similar to CEX
                </Text>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
        <Flex align="center" mt={{ base: px2vw(40), lg: '0px' }}>
          <Box
            w={{ base: px2vw(72), lg: '72px' }}
            h={{ base: px2vw(2), lg: '2px' }}
            bg={index == 0 ? 'purple' : 'black'}
            flex="1"
          ></Box>
          <Box
            w={{ base: px2vw(72), lg: '72px' }}
            h={{ base: px2vw(2), lg: '2px' }}
            bg={index == 1 ? 'purple' : 'black'}
            ml={{ base: px2vw(16), lg: '16px' }}
            flex="1"
          ></Box>
          <Box
            w={{ base: px2vw(72), lg: '72px' }}
            h={{ base: px2vw(2), lg: '2px' }}
            bg={index == 2 ? 'purple' : 'black'}
            ml={{ base: px2vw(16), lg: '16px' }}
            flex="1"
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageMobileThree
