import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Center, Flex, Text, Image } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import roadMapAni from '@/assets/lotties/roadMap.json'
import rbg from '@/assets/imgs/rbg.png'
import rbgSelected from '@/assets/imgs/rbgSelected.png'

export interface Item {
  time: string
  title: string
  desc: string[]
}

export const List: Item[] = [
  {
    time: 'Before',
    title: 'Kickoff the project',
    desc: ['1.Kickoff the project', '2.Start Project Design'],
  },
  {
    time: '2023H1',
    title: 'Technical Design and Prototype Validation',
    desc: [
      '1.Design Native Account Abstraction',
      '2.Design Mutichain Rollup',
      '3.Complete Prototype Validation',
    ],
  },
  {
    time: '2023Q3',
    title: 'Testnet Launch of Core Features',
    desc: [
      '1.Rollna Super Abstract Account',
      '2.Rollna Mutichain Rollup Protocol',
      '3.Testnets supporting ETH, Polygon, Arbitrum,zkSync,Scroll',
    ],
  },
  {
    time: '2023Q4',
    title: 'Continuously Iterate on Essential Features',
    desc: [
      '1.Mainnet Launch of Core Features',
      '2.Launch the Web Product',
      '3.Achieve Integration of the BTC Ecosystem',
    ],
  },
  {
    time: '2024H1',
    title: 'Sustainable Development',
    desc: ['1.Full Launch Alpha', '2.Construct RollNA Ecosystem', '3.More interesting work'],
  },
]
function PageFour(prop: any) {
  const containerRef = useRef(null)
  const [preScrollTop] = useState(0)
  const [isTop, setIsTop] = useState(0)
  let number = 0
  // const indexSwiper = prop.IndexSwiper
  useEffect(() => {
    const handleScroll = () => {
      const container: any = containerRef.current
      if (container && container.scrollTop !== undefined) {
        const { scrollTop } = container
        if (preScrollTop >= scrollTop) {
          setIsTop(++number)
        }
      }
    }
    const container: any = containerRef.current
    container?.addEventListener('scroll', handleScroll)
    return () => {
      const container: any = containerRef.current
      container?.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isTop > 0) {
      prop.IndexSwiper.mousewheel.enable()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTop])
  const getisShow = () => {
    prop.Click(true)
  }
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Box
        w={{ base: '100%', lg: '1286px' }}
        m="0 auto"
        h="100%"
        overflow="auto"
        className="fourBox"
        ref={containerRef}
      >
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          fontFamily="DT Getai Grotesk Display"
          color="black"
          data-swiper-parallax-y="-300"
          data-swiper-parallax-duration="500"
          data-swiper-parallax-opacity="0"
          mt={{ base: px2vw(16), lg: '32px' }}
        >
          RoadMap
        </Center>
        <Box position="relative" h={{ base: px2vw(571), lg: '575px' }}>
          <Box
            position="absolute"
            top={{ base: px2vw(200), lg: '240px' }}
            left="8%"
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Be-fore
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '185px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600" mb="12px">
                  {List[0]?.title}
                </Text>
                {List[0]?.desc?.map((item: string) => (
                  <Text
                    key={item}
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    lineHeight="20px"
                    opacity="0.64"
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            left="35%"
            top={{ base: px2vw(100), lg: '92px' }}
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="2000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbgSelected}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  w="100%"
                  fontSize={{ base: px2vw(24), lg: '24px' }}
                  color="wh.100"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textAlign="center"
                >
                  Q3
                  <Center fontSize={{ base: px2vw(16), lg: '16px' }}>2023</Center>
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '260px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600" mb="12px">
                  {List[2]?.title}
                </Text>
                {List[2]?.desc?.map((item: string) => (
                  <Text
                    key={item}
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    lineHeight="20px"
                    opacity="0.64"
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            right="12%"
            data-swiper-parallax-y="300"
            data-swiper-parallax-duration="3000"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  H1
                  <Center fontSize={{ base: px2vw(16), lg: '16px' }}>2024</Center>
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '206px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600" mb="12px">
                  {List[4]?.title}
                </Text>
                {List[4]?.desc?.map((item: string) => (
                  <Text
                    key={item}
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    lineHeight="20px"
                    opacity="0.64"
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            top={{ base: px2vw(140), lg: '64px' }}
            h={{ base: px2vw(250), lg: '250px' }}
          >
            <Lottie animationData={roadMapAni} loop={false} />
          </Box>

          <Box
            position="absolute"
            left="26%"
            bottom={{ base: px2vw(0), lg: '3px' }}
            data-swiper-parallax-y="-300"
            data-swiper-parallax-duration="1500"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  H1
                  <Center fontSize={{ base: px2vw(16), lg: '16px' }}>2023</Center>
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '334px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600" mb="12px">
                  {List[1]?.title}
                </Text>
                {List[1]?.desc?.map((item: string) => (
                  <Text
                    key={item}
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    lineHeight="20px"
                    opacity="0.64"
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
          <Box
            position="absolute"
            bottom={{ base: px2vw(178), lg: '178px' }}
            right="21%"
            data-swiper-parallax-y="-300"
            data-swiper-parallax-duration="2500"
            data-swiper-parallax-opacity="0"
          >
            <Flex>
              <Box position="relative" mr={{ base: px2vw(16), lg: '16px' }}>
                <Image
                  src={rbg}
                  w={{ base: px2vw(54), lg: '54px' }}
                  h={{ base: px2vw(64), lg: '64px' }}
                />
                <Box
                  className="MapText"
                  p={{ base: px2vw(5), lg: '5px' }}
                  fontSize={{ base: px2vw(16), lg: '16px' }}
                  color="black"
                  fontWeight="500"
                  position="absolute"
                  top="0"
                  textTransform="capitalize"
                  textAlign="center"
                  w="100%"
                >
                  Q4
                  <Center fontSize={{ base: px2vw(16), lg: '16px' }}>2023</Center>
                </Box>
              </Box>
              <Box w={{ base: px2vw(180), lg: '285px' }}>
                <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight="600" mb="12px">
                  {List[3]?.title}
                </Text>
                {List[3]?.desc?.map((item: string) => (
                  <Text
                    key={item}
                    fontSize={{ base: px2vw(14), lg: '14px' }}
                    lineHeight="20px"
                    opacity="0.64"
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box pb={{ base: px2vw(100), lg: '100px' }} pt={{ base: px2vw(50), lg: '55px' }}>
          <Center
            fontSize={{ base: px2vw(32), lg: '32px' }}
            fontWeight={{ base: px2vw(900), lg: '900' }}
            fontFamily="DT Getai Grotesk Display"
            color="purple"
            textTransform="capitalize"
            mt="32px"
          >
            Join us to access the future of omnichain trading
          </Center>
          <Center mt="32px">
            <Button
              onClick={() => {
                getisShow()
              }}
              bg="purple"
              color="wh.100"
              w={{ base: px2vw(134), lg: '134px' }}
              h={{ base: px2vw(48), lg: '48px' }}
              colorScheme="purple"
            >
              Contact us
            </Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  )
}

export default React.memo(PageFour)
