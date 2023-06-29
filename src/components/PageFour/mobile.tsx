import React from 'react'
import { Box, Center, Flex, Text, Image, Button } from '@chakra-ui/react'

import px2vw from '@/utils/px2vw'
import Group51 from '@/assets/imgs/Group51.png'
import Rectangle from '@/assets/imgs/Rectangle.png'

function PageMobileFour(prop: any) {
  const getisShow = () => {
    prop.Click(true)
  }
  return (
    <Box bg="bg" backgroundBlendMode="NORMAL, SCREEN, NORMAL" pt={{ base: 0, lg: '80px' }}>
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        fontFamily="DT Getai Grotesk Display"
        color="black"
        data-swiper-parallax-y="-300"
        data-swiper-parallax-duration="500"
        data-swiper-parallax-opacity="0"
        pt={{ base: px2vw(16), lg: '32px' }}
      >
        RoadMap
      </Center>
      <Flex pr={{ base: px2vw(14) }} mt={{ base: px2vw(45) }}>
        <Box
          // backgroundImage={Group51}
          // backgroundSize="100% "
          position="relative"
          w={{ base: px2vw(107) }}
        >
          <Image src={Group51} position="relative" w="100%"></Image>
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
            left={{ base: px2vw(35) }}
            top={{ base: px2vw(10) }}
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
            left={{ base: px2vw(35) }}
            top={{ base: px2vw(169) }}
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
            left={{ base: px2vw(35) }}
            bottom="53%"
          >
            Q3
            <Text fontSize={{ base: px2vw(16), lg: '16px' }} color="wh.100" fontWeight="400">
              2023
            </Text>
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
            left={{ base: px2vw(35) }}
            bottom={{ base: px2vw(305) }}
          >
            Q4
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
            color="black"
            fontWeight="600"
            textTransform="capitalize"
            textAlign="center"
            position="absolute"
            left={{ base: px2vw(35) }}
            bottom={{ base: px2vw(75) }}
          >
            H1
            <Text fontSize={{ base: px2vw(16), lg: '16px' }} color="black" fontWeight="400">
              2024
            </Text>
          </Box>
        </Box>

        <Box flex="1">
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(35), lg: '35px' }}
          >
            <Text
              fontSize={{ base: px2vw(16), lg: '16px' }}
              pb={{ base: px2vw(20), lg: '20px' }}
              fontWeight="600"
              lineHeight={{ base: px2vw(20), lg: '20px' }}
            >
              Kickoff the project:
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              1.Research the Market and Technology.
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(35), lg: '35px' }}
          >
            <Text
              fontSize={{ base: px2vw(16), lg: '16px' }}
              pb={{ base: px2vw(20), lg: '20px' }}
              fontWeight="600"
            >
              Technical Design and Prototype Validation:
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              1.Design Native Account Abstraction.
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              2.Design Mutichain Rollup.
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }}>3.Complete Prototype Validation.</Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(35), lg: '35px' }}
          >
            <Text
              fontSize={{ base: px2vw(16), lg: '16px' }}
              pb={{ base: px2vw(20), lg: '20px' }}
              fontWeight="600"
            >
              Testnet Launch of Core Features:
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              1.Rollna Super Abstract Account
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              2.Rollna Mutichain Rollup Protocol
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
              3.Testnets supporting ETH, Polygon, Arbitrum,zkSync,Scroll
            </Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
            mb={{ base: px2vw(35), lg: '35px' }}
          >
            <Text
              fontSize={{ base: px2vw(16), lg: '16px' }}
              pb={{ base: px2vw(20), lg: '20px' }}
              fontWeight="600"
            >
              Continuously Iterate on Essential Features:
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              1.Mainnet Launch of Core Features
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              2.Launch the Web Product
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }}>
              3.Achieve Integration of the BTC Ecosystem
            </Text>
          </Box>
          <Box
            backgroundImage={Rectangle}
            backgroundSize="100% 100%"
            p={{ base: px2vw(12), lg: '12px' }}
          >
            <Text
              fontSize={{ base: px2vw(16), lg: '16px' }}
              pb={{ base: px2vw(20), lg: '20px' }}
              fontWeight="600"
            >
              Sustainable Development:
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              1.Full Launch Alpha.
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              2.Construct RollNA Ecosystem.
            </Text>
            <Text fontSize={{ base: px2vw(14), lg: '14px' }} pb={{ base: px2vw(4), lg: '4px' }}>
              3.More interesting work.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box pb={{ base: px2vw(77), lg: '77px' }} pt={{ base: px2vw(50), lg: '55px' }}>
        <Center
          fontSize={{ base: px2vw(28), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          fontFamily="DT Getai Grotesk Display"
          color="purple"
          textTransform="capitalize"
          mt={{ base: px2vw(16), lg: '32px' }}
          textAlign="center"
        >
          Join us to access the future of omnichain trading
        </Center>
        <Center
          fontSize={{ base: px2vw(28), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          fontFamily="DT Getai Grotesk Display"
          color="purple"
          textTransform="capitalize"
          mt={{ base: px2vw(16), lg: '32px' }}
          textAlign="center"
        >
          with RollNA.
        </Center>
        <Center>
          <Button
            onClick={() => {
              getisShow()
            }}
            bg="purple"
            color="wh.100"
            mt={{ base: px2vw(10), lg: '10px' }}
            pt={{ base: px2vw(12) }}
            pb={{ base: px2vw(12) }}
            pl={{ base: px2vw(24) }}
            pr={{ base: px2vw(24) }}
            colorScheme="purple"
          >
            Contact us
          </Button>
        </Center>
      </Box>
    </Box>
  )
}

export default React.memo(PageMobileFour)
