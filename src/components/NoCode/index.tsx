import React from 'react'
import { Box, Flex, Image, Text, HStack } from '@chakra-ui/react'
import noCode from '@/assets/imgs/noCode.png'
import dot from '@/assets/imgs/dot.png'
import { lgText, mdText, smText } from '@/theme/utils'

const infos = [
  'Choose a smart trigger of blockchain events to monitor',
  'Combine controls for specific functions',
  'Fill the required variables',
]

export const DotIndex = ({ index }: { index: number }) => {
  return (
    <Box
      textStyle="12"
      width="18px"
      height="18px"
      borderRadius="50%"
      color="white.100"
      lineHeight="18px"
      backgroundColor="blue.300"
      textAlign="center"
    >
      {index}
    </Box>
  )
}
function Index() {
  const renderItem = () => {
    return infos.map((item, index) => {
      return (
        <HStack key={item} marginBottom="10px">
          <DotIndex index={index + 1} />
          <Text {...smText}>{item}</Text>
        </HStack>
      )
    })
  }

  return (
    <Flex
      width="100%"
      padding="60px"
      backgroundImage={dot}
      backgroundRepeat="repeat"
      justifyContent="space-between"
    >
      <Image src={noCode} ignoreFallback />
      <Flex direction="column" alignItems="end" marginTop="74px">
        <Text {...lgText}>Simply</Text>
        <Text {...mdText} marginBottom="20px">
          start the “If-this-then-that” flows
        </Text>
        {renderItem()}
      </Flex>
    </Flex>
  )
}
export default Index
