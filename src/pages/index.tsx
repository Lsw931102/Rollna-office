import React, { useState, useEffect } from 'react'
import { Box, SkipNavContent } from '@chakra-ui/react'
import { Scrollbar, Mousewheel, Parallax, EffectCreative } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/mousewheel'
import 'swiper/css/scrollbar'
import 'swiper/css/parallax'

import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageMobileThree from '@/components/PageThree/mobile'
import PageMobileFour from '@/components/PageFour/mobile'
import Footer from '@/components/Footer'
import ContractModel from '@/components/ModelContract'

function App(prop: any) {
  const [mySwiper, setMySwiper] = useState<any>(null)
  const [isShow, setIsShow] = useState<boolean>(false)
  useEffect(() => {
    if (prop.Index >= 0) {
      mySwiper?.slideTo(prop.Index, 1000, false)
      prop.setIndexU(-1)
    }
  }, [prop.Index])

  useEffect(() => {
    if (prop.isShowB) {
      setIsShow(prop.isShowB)
      prop.onClick(false)
    }
  }, [prop.isShowB])

  const getisShow = (val: boolean) => {
    console.log(val)
    setIsShow(val)
  }
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Swiper
          // install Swiper modules
          id="OuterSwiper"
          className="swiperView"
          modules={[Scrollbar, Mousewheel, Parallax, EffectCreative]}
          touchRatio={3}
          allowSlidePrev
          centeredSlides
          mousewheel={{
            thresholdTime: 800,
            thresholdDelta: 40,
          }}
          speed={2000}
          parallax
          direction="vertical"
          scrollbar={{ draggable: true }}
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, '-20%', -1],
            },
            next: {
              translate: [0, '100%', 0],
            },
          }}
          onSwiper={(swiper) => {
            setMySwiper(swiper)
          }}
          onSlideChange={(n) => {
            if (n.activeIndex == 3) {
              mySwiper.mousewheel.disable()
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
            <PageFour IndexSwiper={mySwiper} Click={getisShow} />
          </SwiperSlide>
        </Swiper>
        <Footer Click={getisShow} />
      </Box>
      <Box display={{ base: 'block', lg: 'none' }} w="100%" overflowX="hidden">
        <SkipNavContent id="rollna" />
        <PageOne />
        <SkipNavContent id="featrues" />
        <PageTwo />
        <SkipNavContent id="usingcase" />
        <PageMobileThree />
        <SkipNavContent id="roadmap" />

        <PageMobileFour Click={getisShow} />
      </Box>
      <ContractModel isShow={isShow} Click={getisShow} />
    </>
  )
}

export default App
