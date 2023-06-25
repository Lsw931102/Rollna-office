/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 14:35:52
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/pages/index.tsx
 */
import React from 'react'
import { Box, Flex, Text, Center, Image, List, ListItem } from '@chakra-ui/react'
import { Scrollbar, Mousewheel, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/scrollbar'
import 'swiper/css/parallax'

import px2vw from '@/utils/px2vw'


import PageOne from '@/components/page/pageOne'
import PageTwo from '@/components/page/pageTwo'
import PageThree from '@/components/page/pageThree'
import PageFour from '@/components/page/pageFour'


function App() {
  return (
    <Box margin=" 0 auto" bg="bg"  backgroundBlendMode='NORMAL, SCREEN, NORMAL'>
      <Swiper
        // install Swiper modules
        className="swiperView"
        modules={[Scrollbar, Mousewheel, Parallax]}
        touchRatio={0.5}
        allowSlidePrev
        centeredSlides
        autoHeight
        direction="vertical"
        scrollbar={{ draggable: true }}
        mousewheel
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(n) => console.log(n)}
      >
        <SwiperSlide>
          <PageOne />
        </SwiperSlide>
        <SwiperSlide>
          <PageTwo />
        </SwiperSlide>
        <SwiperSlide>
          <PageThree />
        </SwiperSlide>
        <SwiperSlide>
          <PageFour />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default App
