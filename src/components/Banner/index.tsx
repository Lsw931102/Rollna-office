import React from 'react'
import { Flex, Text, Button, Image } from '@chakra-ui/react'

import { lgText, mdText, smText } from '@/theme/utils'

import bannerImg from '@/assets/imgs/bannerImg.png'

function Index() {
  return (
    <Flex width="100%" padding="80px 100px 80px 60px" justifyContent="space-between">
      <Flex direction="column">
        <Text {...lgText}>Automate</Text>
        <Text {...mdText}>smart contracts</Text>
        <Text {...lgText} marginTop="20px" marginBottom="5px">
          Connect
        </Text>
        <Text {...mdText}>blockchain data to the off-chain world</Text>
        <Text {...smText} marginTop="20px" marginBottom="10px">
          Set a trigger and monitor blockchain in real-time
        </Text>
        <Text {...smText}>Build automated functions of your flows</Text>
        <Button marginTop="20px" width="200px" height="60px" backgroundColor="blue.400">
          Read documents
        </Button>
      </Flex>
      <Image src={bannerImg} width="489px" ignoreFallback />
    </Flex>
  )
}
export default Index
