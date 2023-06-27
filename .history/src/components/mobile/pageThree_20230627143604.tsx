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

function PageThree() {
  const [index, setIndex] = useState(0)

  return (
    <Box w={{ base: '100%', lg: '1280px' }} m="0 auto">
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight="900"
        color="black"
        mt={{ base: px2vw(16), lg: '32px' }}
      >
        Build an omnichain application with RollNA easily!
      </Center>
      <Box flex="1">
          <Swiper
            // install Swiper modules
            className="swiperView"
            modules={[Mousewheel, Parallax]}
            touchRatio={0.5}
            centeredSlides
           
            nested={true}
            touchMoveStopPropagation
            mousewheel={{
              thresholdTime: 800,
            }}
            parallax
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(n) => setIndex(n.activeIndex)}
          >
            <SwiperSlide>
            <Image
                  data-swiper-parallax-opacity="0"
                  data-swiper-parallax-y="0"
                  data-swiper-parallax-duration="800"
                  src={Baowr01}
                  ignoreFallback
                  w='100%'
                />
                <Box w='100%'>
                  <Text
                    data-swiper-parallax-y="-400"
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
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Multi-chain token listing and trading are supportedX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Market makers are supported to deploy common multi-chain trading strategies on
                    DEX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
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
                  data-swiper-parallax-y="0"
                  data-swiper-parallax-duration="800"
                  src={Baowr02}
                  ignoreFallback
                  w='100%'
                />
                <Box w='100%'>
                  <Text
                    data-swiper-parallax-y="-400"
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
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Multi-chain token listing and trading are supportedX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Market makers are supported to deploy common multi-chain trading strategies on
                    DEX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
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
                  data-swiper-parallax-y="0"
                  data-swiper-parallax-duration="800"
                  src={Baowr03}
                  ignoreFallback
                  h={{ base: px2vw(358), lg: '400px' }}
                />
                <Box w='100%'>
                  <Text
                    data-swiper-parallax-y="-400"
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
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Multi-chain token listing and trading are supportedX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
                    data-swiper-parallax-duration="800"
                    data-swiper-parallax-opacity="0"
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    color="black"
                    pb={{ base: px2vw(24), lg: '24px' }}
                  >
                    Market makers are supported to deploy common multi-chain trading strategies on
                    DEX
                  </Text>
                  <Text
                    data-swiper-parallax-y="-400"
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
     
    </Box>
  )
}

export default PageThree
