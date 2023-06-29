import React from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

import px2vw from '@/utils/px2vw'
import Group51 from '@/assets/imgs/Group51.png'
import Rectangle from '@/assets/imgs/Rectangle.png'

function PageMobileFour() {
  return (
    <Box bg="bg" backgroundBlendMode="NORMAL, SCREEN, NORMAL" pt={{ base: 0, lg: '80px' }}>
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        color="black"
        data-swiper-parallax-y="-300"
        data-swiper-parallax-duration="500"
        data-swiper-parallax-opacity="0"
        pt={{ base: px2vw(16), lg: '32px' }}
      >
        RoadMap
      </Center>
      <Flex>
        <Box
          backgroundImage={Group51}
          backgroundSize="100% 100%"
          position="relative"
          w={{ base: px2vw(107) }}
        >
          <Box
            className="MapText"
            p={{ base: px2vw(5) }}
            pt="0"
            w={{ base: px2vw(52) }}
            fontSize={{ base: px2vw(16), lg: '16px' }}
            color="black"
            fontWeight="500"
            textTransform="capitalize"
            textAlign="center"
            position="absolute"
            left={{ base: px2vw(25) }}
            top={{ base: px2vw(3) }}
          >
            Be-fore
          </Box>
          <Box
            className="MapText"
            p={{ base: px2vw(5) }}
            pt="0"
            w={{ base: px2vw(52) }}
            fontSize={{ base: px2vw(24), lg: '24px' }}
            color="black"
            fontWeight="600"
            textTransform="capitalize"
            textAlign="center"
            position="absolute"
            left={{ base: px2vw(25) }}
            top={{ base: px2vw(130) }}
          >
            H1
            <Text fontSize={{ base: px2vw(16), lg: '16px' }} color="black" fontWeight="400">
              2023
            </Text>
          </Box>
          <Box
            className="MapText"
            p={{ base: px2vw(5) }}
            pt="0"
            w={{ base: px2vw(52) }}
            fontSize={{ base: px2vw(24), lg: '24px' }}
            color="wh.100"
            fontWeight="600"
            textTransform="capitalize"
            textAlign="center"
            position="absolute"
            left={{ base: px2vw(25) }}
            top={{ base: px2vw(308) }}
          >
            Q3
            <Text fontSize={{ base: px2vw(16), lg: '16px' }} color="wh.100" fontWeight="400">
              2023
            </Text>
          </Box>
        </Box>

        <Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(64), lg: '64px' }}
          >
            <Text>Kickoff the project:</Text>
            <Text>1.Research the Market and Technology.</Text>
            <Text>2.Start Project Design.</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(64), lg: '64px' }}
          >
            <Text>Technical Design and Prototype Validation:</Text>
            <Text>1.Design Native Account Abstraction.</Text>
            <Text>2.Design Mutichain Rollup.</Text>
            <Text>3.Complete Prototype Validation.</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(64), lg: '64px' }}
          >
            <Text>Testnet Launch of Core Features:</Text>
            <Text>1.Rollna Super Abstract Account</Text>
            <Text>2.Rollna Mutichain Rollup Protocol</Text>
            <Text>3.Testnets supporting ETH, Polygon, Arbitrum,zkSync,Scroll</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(64), lg: '64px' }}
          >
            <Text>Continuously Iterate on Essential Features:</Text>
            <Text>1.Mainnet Launch of Core Features</Text>
            <Text>2.Launch the Web Product</Text>
            <Text>3.Achieve Integration of the BTC Ecosystem</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(64), lg: '64px' }}
          >
            <Text>Sustainable Development:</Text>
            <Text>1.Full Launch Alpha.</Text>
            <Text>2.Construct RollNA Ecosystem.</Text>
            <Text>3.More interesting work.</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default React.memo(PageMobileFour)
