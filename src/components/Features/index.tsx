import React from 'react'
import { VStack, Image, Text, HStack } from '@chakra-ui/react'
import { mdText, smText } from '@/theme/utils'

import safty from '@/assets/imgs/safty.png'
import notification from '@/assets/imgs/notification.png'

export interface CardProps {
  logo: string
  title: string
  desc: string
}
export const Card = ({ logo, title, desc }: CardProps) => {
  return (
    <VStack
      width="370px"
      height="280px"
      padding="30px"
      backgroundColor="blue.600"
      spacing="20px"
      alignItems="center"
      borderRadius="6px"
    >
      <Image src={logo} ignoreFallback />
      <Text {...mdText} color="blue.100">
        {title}
      </Text>
      <Text {...smText} lineHeight="23px">
        {desc}
      </Text>
    </VStack>
  )
}

const cardList: CardProps[] = [
  {
    logo: notification,
    title: 'Notification',
    desc: 'Deliver real-time notifications to you when relevant events or actions happen on-chain.',
  },
  {
    logo: safty,
    title: 'No-code',
    desc: 'Instantly detect risky transactions and blacklisted accounts and take the necessary actions.',
  },
  {
    logo: notification,
    title: 'Real-time',
    desc: 'Unlike historical data platforms, we process blockchain data in real-time, which allows you to build trigger-based functionalities.',
  },
]

function Index() {
  const renderItem = () => {
    return cardList.map((item) => {
      return <Card key={item.title} {...item} />
    })
  }

  return (
    <HStack spacing="68px" padding="60px">
      {renderItem()}
    </HStack>
  )
}
export default Index
