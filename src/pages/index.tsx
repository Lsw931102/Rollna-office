/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-24 17:48:57
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/pages/index.tsx
 */
import React from 'react'
import { Box } from '@chakra-ui/react'
import { Scrollbar, Mousewheel, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax';



function App() {

  return (
    <Box
      maxW={{
        lg: '1366px',
      }}
      minW={{
        lg: '1024px',
      }}
      margin=" 0 auto"
    >

      <Swiper
        // install Swiper modules
        className='swiperView'

        modules={[Scrollbar, Mousewheel, Parallax]}
        touchRatio={0.5}
        allowSlidePrev
        centeredSlides
        autoHeight
        direction={'vertical'}
        scrollbar={{ draggable: true }}
        mousewheel

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(n) =>
          console.log(n)
        }

      >

        <SwiperSlide>
          <Box h='100%' bg='blackAlpha.100'>
            1
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='100%' bg='whatsapp.100'>
            2
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='100%'>
            3
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='100%'>
            4
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default App
