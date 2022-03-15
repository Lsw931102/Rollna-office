import React from 'react'
import { Flex, HStack, Text, Image, Button } from '@chakra-ui/react'

import { lgText, mdText, smText } from '@/theme/utils'

import buildDapp from '@/assets/imgs/buildDapp.png'
function Index() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding="60px"
    >
      <HStack spacing={90}>
        <Flex direction="column">
          <Text {...lgText}>Platform</Text>
          <Text {...mdText} marginTop="5px" marginBottom="20px">
            to build your own “DAPP”
          </Text>
          <Text {...smText} marginBottom="10px">
            Create and save frequently used functions
          </Text>
          <Text {...smText}>Complete blockchain operations in one place</Text>
        </Flex>
        <Image src={buildDapp} ignoreFallback />
      </HStack>
      <Button width="200px" height="40px" marginTop="50px" bgColor="blue.100" color="white.100">
        Start your flows
      </Button>
    </Flex>
  )
}
export default Index
