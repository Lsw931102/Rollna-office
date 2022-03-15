import React from 'react'
import { Text, Flex, HStack, Image, Button, Box } from '@chakra-ui/react'

import eva from '@/assets/imgs/eva.png'

const buttonHover = {
  cursor: 'pointer',
  color: 'blue.100',
}

export const buttonStyle = {
  fontSize: '18px',
  borderRadius: '6px',
  padding: '0 10px',
}
function Index() {
  return (
    <Flex padding="30px 60px" bgColor="white.100" justify="space-between">
      <HStack spacing="10px">
        <Image src={eva} ignoreFallback />
        <Text
          textStyle="18"
          backgroundClip="text"
          color="transparent"
          backgroundImage="linear-gradient(180deg, #5E81FF 0%, #3A68E7 100%)"
        >
          EVA BASE
        </Text>
      </HStack>
      <HStack spacing="30px" color="blue.400" textStyle="14">
        <Box as="a" _hover={buttonHover}>
          Docs
        </Box>
        <Box as="a" _hover={buttonHover}>
          Solutions
        </Box>
        <Box as="a" _hover={buttonHover}>
          Scripts
        </Box>
        <Button bgColor="blue.100" color="white.100">
          Start your flows
        </Button>
      </HStack>
    </Flex>
  )
}

export default React.memo(Index)
