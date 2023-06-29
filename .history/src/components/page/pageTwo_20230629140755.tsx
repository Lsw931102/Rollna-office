import React from 'react'
import { Flex, Text, Box, Image, List, ListItem, Center } from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import convenient from '@/assets/imgs/convenient.png'
import interoperability from '@/assets/imgs/interoperability.png'
import lowcost from '@/assets/imgs/lowcost.png'
import supremesecurity from '@/assets/imgs/supremesecurity.png'
import leftAni from '@/assets/lotties/page2.json'

function PageTwo() {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="bg"
      backgroundBlendMode="NORMAL, SCREEN, NORMAL"
      pt={{ base: 0, lg: '90px' }}
    >
      <Flex direction="column" h="100%" w={{ base: '100%', lg: '1286px' }} m="0 auto">
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          color="black"
          mt={{ base: px2vw(16), lg: '32px' }}
          data-swiper-parallax-y="300"
           data-swiper-parallax-duration="500"
           data-swiper-parallax-opacity="0"
        >
          Token Liquidity Merge
        </Center>
        <Flex alignItems="center" p={{ base: px2vw(10), lg: '10px' }}>
          <Lottie animationData={leftAni} loop={false}  
          data-swiper-parallax-y="-300"
           data-swiper-parallax-duration="1000"
           data-swiper-parallax-opacity="0"/>
          <Box ml={{ base: px2vw(20), lg: '20px' }}>
            <List spacing={3}>
              <ListItem
                data-swiper-parallax-y="-400"
                data-swiper-parallax-duration="500"
                data-swiper-parallax-opacity="0"
              >
                <Flex alignItems="center">
                  <Image src={convenient} ignoreFallback width={{ base: px2vw(32), lg: '32px' }} />
                  <Box color="black" p="10px">
                    <Text
                      fontSize={{ base: px2vw(16), lg: '16px' }}
                      fontWeight={{ base: px2vw(700), lg: '700' }}
                    >
                      Convenient
                    </Text>
                    <Text
                      fontSize={{ base: px2vw(14), lg: '14px' }}
                      lineHeight={{ base: px2vw(24), lg: '24px' }}
                      noOfLines={[3]}
                    >
                      Assets(Crypto)flow seamlessly across multi-chains,making development and use
                      easier.Make it as easy for users to use decentralized transactions as it is on
                      CEX.
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem
                data-swiper-parallax-y="-400"
                data-swiper-parallax-duration="500"
                data-swiper-parallax-opacity="0"
              >
                <Flex alignItems="center">
                  <Image
                    src={interoperability}
                    ignoreFallback
                    width={{ base: px2vw(32), lg: '32px' }}
                  />
                  <Box color="black" p="10px">
                    <Text
                      fontSize={{ base: px2vw(16), lg: '16px' }}
                      fontWeight={{ base: px2vw(700), lg: '700' }}
                    >
                      Convenient
                    </Text>
                    <Text
                      fontSize={{ base: px2vw(14), lg: '14px' }}
                      lineHeight={{ base: px2vw(24), lg: '24px' }}
                      noOfLines={[3]}
                    >
                      Assets(Crypto)flow seamlessly across multi-chains,making development and use
                      easier.Make it as easy for users to use decentralized transactions as it is on
                      CEX.
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem
                data-swiper-parallax-y="-400"
                data-swiper-parallax-duration="500"
                data-swiper-parallax-opacity="0"
              >
                <Flex alignItems="center">
                  <Image src={lowcost} ignoreFallback width={{ base: px2vw(32), lg: '32px' }} />
                  <Box color="black" p="10px">
                    <Text
                      fontSize={{ base: px2vw(16), lg: '16px' }}
                      fontWeight={{ base: px2vw(700), lg: '700' }}
                    >
                      Convenient
                    </Text>
                    <Text
                      fontSize={{ base: px2vw(14), lg: '14px' }}
                      lineHeight={{ base: px2vw(24), lg: '24px' }}
                      noOfLines={[3]}
                    >
                      Assets(Crypto)flow seamlessly across multi-chains,making development and use
                      easier.Make it as easy for users to use decentralized transactions as it is on
                      CEX.
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem
                data-swiper-parallax-y="-400"
                data-swiper-parallax-duration="500"
                data-swiper-parallax-opacity="0"
              >
                <Flex alignItems="center">
                  <Image
                    src={supremesecurity}
                    ignoreFallback
                    width={{ base: px2vw(32), lg: '32px' }}
                  />
                  <Box color="black" p="10px">
                    <Text
                      fontSize={{ base: px2vw(16), lg: '16px' }}
                      fontWeight={{ base: px2vw(700), lg: '700' }}
                    >
                      Convenient
                    </Text>
                    <Text
                      fontSize={{ base: px2vw(14), lg: '14px' }}
                      lineHeight={{ base: px2vw(24), lg: '24px' }}
                      noOfLines={[3]}
                    >
                      Assets(Crypto)flow seamlessly across multi-chains,making development and use
                      easier.Make it as easy for users to use decentralized transactions as it is on
                      CEX.
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
            </List>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PageTwo
