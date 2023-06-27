import React,{useState} from 'react'
import { Box } from '@chakra-ui/react'
import { Scrollbar, Mousewheel, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/scrollbar'
import 'swiper/css/parallax'

import PageOne from '@/components/page/pageOne'
import PageTwo from '@/components/page/pageTwo'
import PageThree from '@/components/page/pageThree'
import PageFour from '@/components/page/pageFour'
import px2vw from '@/utils/px2vw'
import { normalizeConfig } from 'next/dist/server/config'

function App() {
  const [mySwiper, setMySwiper] = useState()

  return (
    <Box bg="bg" backgroundBlendMode="NORMAL, SCREEN, NORMAL" pt={{ base: px2vw(0), lg: '90px' }}>
      <Swiper
        // install Swiper modules
        className="swiperView"
        modules={[Scrollbar, Mousewheel, Parallax]}
        touchRatio={0.5}
        allowSlidePrev
        centeredSlides
        mousewheel={{
          thresholdTime: 800,
        }}
        parallax
        
        direction="vertical"
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          console.log(swiper)
          setMySwiper(swiper)
        }}
        
        onSlideChange={(n) => {
          console.log(n)
          if (n.activeIndex == 3) {
            
            //  mySwiper.mousewheel.disable()
          }
        }}
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
