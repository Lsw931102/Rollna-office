/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 11:25:38
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
import tlm from '@/assets/imgs/tlm.png'
import eva from '@/assets/imgs/logo.png'

function App() {
  return (
    <Box margin=" 0 auto" bg="bg">
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
          <Flex h="100%" w={{ base: '100%', lg: '1280px' }} m="0 auto">
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              ml={{ lg: '40px' }}
            >
              <Text
                fontSize={{ base: px2vw(50), lg: '90px' }}
                lineHeight={{ base: px2vw(75), lg: '112px' }}
                color="black"
              >
                Make decentralized
              </Text>
              <Text
                fontSize={{ base: px2vw(50), lg: '90px' }}
                lineHeight={{ base: px2vw(75), lg: '112px' }}
                color="black"
              >
                trading easier
              </Text>
              <Text
                fontSize={{ base: px2vw(20), lg: '24px' }}
                lineHeight={{ base: px2vw(30), lg: '28px' }}
                color="black"
                mt={{ base: px2vw(16), lg: '40px' }}
              >
                Revolutionizing Crypto with one-stop multi-chain trading Protocol
              </Text>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Center textStyle="64" lineHeight="112px" color="black">
              Token Liquidity Merge
            </Center>
            <Box display="flex" alignItems="center" p="10">
              <Box>
                <Image src={tlm} ignoreFallback w="800px" />
              </Box>
              <Box ml="20">
                <List spacing={3}>
                  <ListItem>
                    <Box display="flex" alignItems="center">
                      <Image src={eva} ignoreFallback width="32px" />
                      <Box color="black" p="10px">
                        <Text textStyle="16" lineHeight="19.36px">
                          Convenient
                        </Text>
                        <Text textStyle="14" lineHeight="24px" noOfLines={[1, 2]}>
                          Assets(Crypto)flow seamlessly across multi-chains,making development and
                          use easier.Make it as easy for users to use decentralized transactions as
                          it is on CEX.
                        </Text>
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display="flex" alignItems="center">
                      <Image src={eva} ignoreFallback width="32px" />
                      <Box color="black" p="10px">
                        <Text textStyle="16" lineHeight="19.36px">
                          Interoperability
                        </Text>
                        <Text textStyle="14" lineHeight="24px" noOfLines={[1, 2]}>
                          Unified assets pool and merge token liquidity,making tokens on different
                          chains can be traded together with less slippage.
                        </Text>
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display="flex" alignItems="center">
                      <Image src={eva} ignoreFallback width="32px" />
                      <Box color="black" p="10px">
                        <Text textStyle="16" lineHeight="19.36px">
                          Low cost
                        </Text>
                        <Text textStyle="14" lineHeight="24px" noOfLines={[1, 2]}>
                          Make users pay through full chain assets at low cost(no bridge fee and low
                          gas fee)
                        </Text>
                      </Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display="flex" alignItems="center">
                      <Image src={eva} ignoreFallback width="32px" />
                      <Box color="black" p="10px">
                        <Text textStyle="16" lineHeight="19.36px">
                          Security
                        </Text>
                        <Text textStyle="14" lineHeight="24px" noOfLines={[1, 2]}>
                          Assets support self-custody and abstract accounts support social
                          recovery,making asset security management easier.
                        </Text>
                      </Box>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Center textStyle="32" lineHeight="112px" color="black">
              Things you can do with RollNA
            </Center>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h="100%">
            <Center textStyle="32" lineHeight="112px" color="black">
              RoadMap
            </Center>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default App
