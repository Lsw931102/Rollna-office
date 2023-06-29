import React from 'react'
import { Flex, Image, Link, Tooltip, Box, Button, Spacer } from '@chakra-ui/react'
import Twitter from '@/assets/imgs/Twitter.png'
import Medium from '@/assets/imgs/Medium.png'
import Discord from '@/assets/imgs/Discord.png'
import Telegram from '@/assets/imgs/Telegram.png'

import px2vw from '@/utils/px2vw'

export const Madies = () => (
  <Flex mt={{ base: px2vw(56), lg: 0 }}>
    <Box mr={{ base: px2vw(40), lg: '40px' }}>
      <Link href="https://twitter.com/rollna_protocol" isExternal>
        <Image src={Twitter} />
      </Link>
    </Box>
    <Box mr={{ base: px2vw(40), lg: '40px' }}>
      <Link href="https://medium.com/@rollna_team" isExternal>
        <Image src={Medium} />
      </Link>
    </Box>
    <Box mr={{ base: px2vw(40), lg: '40px' }}>
      <Tooltip label="coming soon">
        <Image src={Discord} />
      </Tooltip>
    </Box>
    <Box>
      <Tooltip label="coming soon">
        <Image src={Telegram} />
      </Tooltip>
    </Box>
  </Flex>
)
function Footer(prop: any) {
  const getisShow = () => {
    prop.Click(true)
  }
  return (
    <Flex
      bgColor="wh.12"
      w="100%"
      position="fixed"
      bottom="0"
      padding={{ base: px2vw(27), lg: '27px' }}
      alignItems="center"
    >
      <Madies />
      <Spacer />
      <Box>
        <Button
          onClick={() => {
            getisShow()
          }}
          borderRadius={{ base: px2vw(16), lg: '16px' }}
          colorScheme="black"
          variant="outline"
          color="black"
          w={{ lg: '134px' }}
          h={{ lg: '42px' }}
        >
          Contact us
        </Button>
      </Box>
    </Flex>
  )
}

export default React.memo(Footer)
