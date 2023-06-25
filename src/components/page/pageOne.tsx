/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 14:05:57
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/page/pageOne.tsx
 */
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'


function PageOne() {
    return (
        <Flex h="100%" w={{ base: '100%', lg: '1280px' }} m="0 auto" >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                ml={{ lg: '40px' }}
            >
                <Text
                    fontSize={{ base: px2vw(50), lg: '90px' }}
                    lineHeight={{ base: px2vw(75), lg: '112px' }}
                    color="black"
                >
                    Make decentralized
      </Text>
                <Text
                    fontSize={{ base: px2vw(50), lg: '90px' }}
                    lineHeight={{ base: px2vw(75), lg: '112px' }}
                    color="black"
                >
                    trading easier
      </Text>
                <Text
                    fontSize={{ base: px2vw(20), lg: '24px' }}
                    lineHeight={{ base: px2vw(30), lg: '28px' }}
                    color="black"
                    mt={{ base: px2vw(16), lg: '40px' }}
                >
                    Revolutionizing Crypto with one-stop multi-chain trading Protocol
      </Text>
            </Flex>
        </Flex>
    )
}

export default PageOne
