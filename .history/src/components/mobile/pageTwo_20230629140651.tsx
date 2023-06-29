import React from 'react'
import { Flex, Text, Box, Image, List, ListItem, Center } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'

import tlm from '@/assets/imgs/tlm.png'
import convenient from '@/assets/imgs/convenient.png'
import interoperability from '@/assets/imgs/interoperability.png'
import lowcost from '@/assets/imgs/lowcost.png'
import supremesecurity from '@/assets/imgs/supremesecurity.png'

function PageMobileTwo() {
  return (
    <Box h="100%" w="100%" m="0 auto">
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        color="black"
        mt={{ base: px2vw(16), lg: '32px' }}
        textAlign="center"
      >
        Token Liquidity Merge
      </Center>
      <Box>
        <Image src={tlm} ignoreFallback w="100%" />
      </Box>
      <Box ml={{ base: px2vw(20), lg: '20px' }}>
        <List spacing={3}>
          <ListItem

          >
            <Flex alignItems="center" >
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

          >
            <Flex alignItems="center">
              <Image src={supremesecurity} ignoreFallback width={{ base: px2vw(32), lg: '32px' }} />
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
    </Box>
  )
}

export default PageMobileTwo
