/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 14:27:02
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/page/pageThree.tsx
 */
import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar, Mousewheel, Parallax } from 'swiper'

import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/scrollbar'
import 'swiper/css/parallax'

import px2vw from '@/utils/px2vw'

function PageThree() {
  return (
    <Box h="100%" w={{ base: '100%', lg: '1280px' }} m="0 auto">
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        color="black"
        mt={{ base: px2vw(16), lg: '32px' }}
      >
        Build an omnichain application with RollNA easily!
      </Center>
      <Swiper
        // install Swiper modules
        className="swiperView"
        modules={[Scrollbar, Mousewheel, Parallax]}
        touchRatio={0.5}
        centeredSlides
        direction="vertical"
        scrollbar={{ draggable: true }}
        nested={true}
        touchMoveStopPropagation
        mousewheel
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(n) => console.log(n)}
      >
        <SwiperSlide>
          <Box h="100%" bg="red">
            1
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%" bg="green">
            2
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%" bg="blue">
            3
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default PageThree
