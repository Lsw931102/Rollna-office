import React from 'react'
import { Flex, Text, Box, Image, List, ListItem, Center } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import convenient from '@/assets/imgs/page21.png'
import interoperability from '@/assets/imgs/page22.png'
import lowcost from '@/assets/imgs/page23.png'
import supremesecurity from '@/assets/imgs/page24.png'
import leftAni from '@/assets/lotties/page2.json'

interface ArrItem {
  icon: string
  title: string
  desc: string
}
const arr: ArrItem[] = [
  {
    icon: convenient,
    title: 'Convenient',
    desc: 'Elevated smart contract accounts and seamless asset movement across omnichains enable more convenient development and usage.',
  },
  {
    icon: interoperability,
    title: 'Interoperability',
    desc: 'A unified liquidity pool maximizes the efficient use of funds. Once deployed, omnichains are interoperable.',
  },
  {
    icon: lowcost,
    title: 'Low Cost',
    desc: 'Gas-Efficient Multi-Chain Rollup enables affordable Omnichain trading.',
  },
  {
    icon: supremesecurity,
    title: 'Supreme Security',
    desc: 'Ultra-Secure trustless cross-chain solution with L1-level security.',
  },
]
function PageTwo() {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: px2vw(80), lg: '90px' }}
      pb={{ base: px2vw(40), lg: 0 }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        h="100%"
        w={{ base: '100%', lg: '1286px' }}
        m="0 auto"
      >
        <Center
          fontSize={{ base: px2vw(28), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          fontFamily="DT Getai Grotesk Display"
          color="black"
          mt={{ base: 0, lg: '-45px' }}
          textAlign="center"
          data-swiper-parallax-y="-500"
          data-swiper-parallax-duration="500"
          data-swiper-parallax-opacity="0"
        >
          Advanced Omnichain Trading Protocol
        </Center>
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'flex-start', lg: 'space-between' }}
          mt={{ base: px2vw(40), lg: '64px' }}
        >
          <Lottie
            animationData={leftAni}
            loop={false}
            style={{
              width: '623px',
            }}
            data-swiper-parallax-y="-1000"
            data-swiper-parallax-duration="1000"
            data-swiper-parallax-opacity="0"
          />
          <Box
            ml={{ base: 0, lg: '20px' }}
            mx={{ base: px2vw(16), lg: 0 }}
            w={{ base: '100%', lg: '536px' }}
          >
            <List mt={{ base: px2vw(26), lg: 0 }}>
              {arr.map((item: ArrItem) => (
                <ListItem
                  key={item.title}
                  mt={{ base: px2vw(48), lg: '48px' }}
                  _first={{
                    marginTop: 0,
                  }}
                  data-swiper-parallax-y="-1000"
                  data-swiper-parallax-duration="1500"
                  data-swiper-parallax-opacity="0"
                >
                  <Flex alignItems="center">
                    <Image
                      src={item?.icon}
                      ignoreFallback
                      width={{ base: px2vw(48), lg: '48px' }}
                    />
                    <Box color="black" ml={{ base: px2vw(16), lg: '16px' }}>
                      <Text
                        fontSize={{ base: px2vw(16), lg: '16px' }}
                        fontWeight={{ base: px2vw(700), lg: '700' }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        mt={{ base: px2vw(12), lg: 0 }}
                        fontSize={{ base: px2vw(14), lg: '14px' }}
                        lineHeight={{ base: px2vw(24), lg: '24px' }}
                        noOfLines={[3]}
                        opacity={0.64}
                      >
                        {item.desc}
                      </Text>
                    </Box>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageTwo
