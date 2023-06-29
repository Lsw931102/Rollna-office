import React, { useEffect, useRef, useState } from 'react'
import { Box, Center, Flex, Text, Image } from '@chakra-ui/react'

import px2vw from '@/utils/px2vw'
import Group51 from '@/assets/imgs/Group51.png'

function PageMobileFour(prop: any) {
    const containerRef = useRef(null)
    const [preScrollTop] = useState(0)
    const [isTop, setIsTop] = useState(0)
    let number = 0
    // const indexSwiper = prop.IndexSwiper
    useEffect(() => {
        const handleScroll = () => {
            const container: any = containerRef.current
            if (container && container.scrollTop !== undefined) {
                const { scrollTop } = container
                if (preScrollTop >= scrollTop) {
                    setIsTop(++number)
                }
            }
        }
        const container: any = containerRef.current
        container?.addEventListener('scroll', handleScroll)
        return () => {
            const container: any = containerRef.current
            container?.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (isTop > 0) {
            prop.IndexSwiper.mousewheel.enable()
        }
    }, [isTop])
    return (
        <Box

            bg="bg"
            backgroundBlendMode="NORMAL, SCREEN, NORMAL"
            pt={{ base: 0, lg: '80px' }}
        >
            <Center
                fontSize={{ base: px2vw(32), lg: '32px' }}
                fontWeight={{ base: px2vw(900), lg: '900' }}
                color="black"
                data-swiper-parallax-y="-300"
                data-swiper-parallax-duration="500"
                data-swiper-parallax-opacity="0"
                mt={{ base: px2vw(16), lg: '32px' }}
            >
                RoadMap
            </Center>
            <Flex>
                <Box h={{ base: px2vw(823), lg: '823px' }} >
                    <Image src={Group51}/>
                </Box>

                <Box>
                    <Box>
                        <Text>Kickoff the project:</Text>
                        <Text>1.Research the Market and Technology.</Text>
                        <Text>2.Start Project Design.</Text>
                    </Box>
                    <Box>
                        <Text>Technical Design and Prototype Validation:</Text>
                        <Text>1.Design Native Account Abstraction.</Text>
                        <Text>2.Design Mutichain Rollup.</Text>
                        <Text>3.Complete Prototype Validation.</Text>
                    </Box>
                    <Box>
                        <Text>Testnet Launch of Core Features:</Text>
                        <Text>1.Rollna Super Abstract Account</Text>
                        <Text>2.Rollna Mutichain Rollup Protocol</Text>
                        <Text>3.Testnets supporting ETH, Polygon, Arbitrum,zkSync,Scroll</Text>
                    </Box>
                    <Box>
                        <Text>Continuously Iterate on Essential Features:</Text>
                        <Text>1.Mainnet Launch of Core Features</Text>
                        <Text>2.Launch the Web Product</Text>
                        <Text>3.Achieve Integration of the BTC Ecosystem</Text>
                    </Box>
                    <Box>
                        <Text>Sustainable Development:</Text>
                        <Text>1.Full Launch Alpha.</Text>
                        <Text>2.Construct RollNA Ecosystem.</Text>
                        <Text>3.More interesting work.</Text>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default React.memo(PageMobileFour)
