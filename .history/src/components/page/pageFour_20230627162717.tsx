import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalOverlay,
  Input,
  Textarea,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import roadMapAni from '@/assets/lotties/roadMap.json'
import rbg from '@/assets/imgs/rbg.png'
import rbgSelected from '@/assets/imgs/rbgSelected.png'

function PageFour(prop) {
  const [isModel, setModel] = useState(false)
  const [KdesignCompany, setKdesignCompany] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Email, setEmail] = useState('')
  const [TelegramHandle, setTelegramHandle] = useState('')
  const [Massage, setMassage] = useState('')
  const containerRef = useRef(null);
  const [preScrollTop, setPreScrollTop] = useState(0);
  let [isTop, setIsTop] = useState(0);

  // const indexSwiper = prop.IndexSwiper
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container && container.scrollTop !== undefined) {
        const { scrollTop } = container;
        if (preScrollTop >= scrollTop) {
          setIsTop(++isTop)
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      const container = containerRef.current;
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isTop > 0) {
      prop.IndexSwiper.mousewheel.enable()
    }

  }, [isTop]);
  return (
    <Box w={{ base: '100%', lg: '1280px' }} m="0 auto" h='100%' overflow='auto' className='fourBox' ref={containerRef}>
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        color="black"
        mt={{ base: px2vw(16), lg: '32px' }}
      >
        RoadMap
      </Center>
      <Box position="relative" h={{ base: px2vw(541), lg: '541px' }}>
        <Box position="absolute" top={{ base: px2vw(183), lg: '183px' }} left="4%">
          <Flex>
            <Box position='relative' mr={{ base: px2vw(16), lg: '16px' }}>
              <Image src={rbg} w={{ base: px2vw(54), lg: '54px' }} h={{ base: px2vw(64), lg: '64px' }} />
              <Box className='MapText'
                p={{ base: px2vw(5), lg: '5px' }}
                fontSize={{ base: px2vw(16), lg: '16px' }}
                color='black'
                fontWeight='500'
                position='absolute'
                top='0'
                textTransform='capitalize'
                textAlign='center'
                w='100%'
              >
                Be-fore
              </Box>
              <Box h={{ base: px2vw(76), lg: '76px' }} w={{base: px2vw(1), lg: '1px'}} bg='black' position='absolute' left='50%'></Box>
            </Box>
            <Box w={{ base: px2vw(180), lg: '180px' }}>
              <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight='600'>Kickoff the project:</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>1.Research the Market and Technology.</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" left="35%" top={{ base: px2vw(40), lg: '40px' }}>
          <Flex>
            <Box position='relative' mr={{ base: px2vw(16), lg: '16px' }}>
              <Image src={rbgSelected} w={{ base: px2vw(54), lg: '54px' }} h={{ base: px2vw(64), lg: '64px' }} />
              <Box className='MapText'
               w='100%'
                fontSize={{ base: px2vw(24), lg: '24px' }}
                color='wh.100'
                fontWeight='500'
                position='absolute'
                top='0'
               
                textAlign='center'
              >
                Q3
                <Center  fontSize={{ base: px2vw(16), lg: '16px' }}>2023</Center>
              </Box>
              <Box h={{ base: px2vw(132), lg: '132px' }} w={{base: px2vw(1), lg: '1px'}} bg='purple' position='absolute' left='50%'></Box>
            </Box>
            <Box w={{ base: px2vw(180), lg: '180px' }}>
              <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight='600'>Kickoff the project:</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>1.Research the Market and Technology.</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" right="10%">
          <Flex>
            <Box position='relative' mr={{ base: px2vw(16), lg: '16px' }}>
              <Image src={rbg} w={{ base: px2vw(54), lg: '54px' }} h={{ base: px2vw(64), lg: '64px' }} />
              <Box className='MapText'
                p={{ base: px2vw(5), lg: '5px' }}
                fontSize={{ base: px2vw(16), lg: '16px' }}
                color='black'
                fontWeight='500'
                position='absolute'
                top='0'
                textTransform='capitalize'
                textAlign='center'
                w='100%'
              >
                Be-fore
              </Box>
            </Box>
            <Box w={{ base: px2vw(180), lg: '180px' }}>
              <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight='600'>Kickoff the project:</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>1.Research the Market and Technology.</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box
          position="absolute"
          top={{ base: px2vw(85), lg: '85px' }}
          h={{ base: px2vw(250), lg: '250px' }}
        >
          <Lottie animationData={roadMapAni} />
        </Box>

        <Box position="absolute" left="20%" bottom={{ base: px2vw(0), lg: '0px' }}>
          <Flex>
            <Box position='relative' mr={{ base: px2vw(16), lg: '16px' }}>
              <Image src={rbg} w={{ base: px2vw(54), lg: '54px' }} h={{ base: px2vw(64), lg: '64px' }} />
              <Box className='MapText'
                p={{ base: px2vw(5), lg: '5px' }}
                fontSize={{ base: px2vw(16), lg: '16px' }}
                color='black'
                fontWeight='500'
                position='absolute'
                top='0'
                textTransform='capitalize'
                textAlign='center'
                w='100%'
              >
                Be-fore
              </Box>
            </Box>
            <Box w={{ base: px2vw(180), lg: '180px' }}>
              <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight='600'>Kickoff the project:</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>1.Research the Market and Technology.</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" bottom={{ base: px2vw(180), lg: '180px' }} right="15%">
          <Flex>
            <Box position='relative' mr={{ base: px2vw(16), lg: '16px' }}>
              <Image src={rbg} w={{ base: px2vw(54), lg: '54px' }} h={{ base: px2vw(64), lg: '64px' }} />
              <Box className='MapText'
                p={{ base: px2vw(5), lg: '5px' }}
                fontSize={{ base: px2vw(16), lg: '16px' }}
                color='black'
                fontWeight='500'
                position='absolute'
                top='0'
                textTransform='capitalize'
                textAlign='center'
                w='100%'
              >
                Be-fore
              </Box>
            </Box>
            <Box w={{ base: px2vw(180), lg: '180px' }}>
              <Text fontSize={{ base: px2vw(16), lg: '16px' }} fontWeight='600'>Kickoff the project:</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>1.Research the Market and Technology.</Text>
              <Text fontSize={{ base: px2vw(14), lg: '14px' }}>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box pb={{ base: px2vw(100), lg: '100px' }} pt={{ base: px2vw(50), lg: '50px' }}>
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          color="purple"
          textTransform="capitalize"
          mt={{ base: px2vw(16), lg: '32px' }}
        >
          Join us to access the future of omnichain trading
        </Center>
        <Center
          fontSize={{ base: px2vw(32), lg: '32px' }}
          fontWeight={{ base: px2vw(900), lg: '900' }}
          color="purple"
          textTransform="capitalize"
          mt={{ base: px2vw(16), lg: '32px' }}
        >
          with RollNA.
        </Center>
        <Center>
          <Button
            onClick={() => setModel(true)}
            bg="purple"
            color="wh.100"
            mt={{ base: px2vw(10), lg: '10px' }}
          >
            Contact us
          </Button>

          <Modal isOpen={isModel} size="xl" onClose={() => setModel(false)}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Center fontSize={{ base: px2vw(24), lg: '24px' }}>Contact Us</Center>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={{ base: px2vw(24), lg: '20px' }} pt="0">
                  <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                    <FormLabel>*Kdesign Company</FormLabel>

                    <Input
                      placeContent="Kdesign Company"
                      value={KdesignCompany}
                      onChange={(e) => setKdesignCompany(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                    <FormLabel>*Company name</FormLabel>
                    <Input
                      placeholder="Company name"
                      value={CompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                    <FormLabel>*Email</FormLabel>
                    <Input
                      placeholder="Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                    <FormLabel>Telegram Handle</FormLabel>
                    <Input
                      placeholder="Telegram Handle"
                      value={TelegramHandle}
                      onChange={(e) => setTelegramHandle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                    <FormLabel>Massage</FormLabel>
                    <Textarea
                      placeholder="Massage"
                      value={Massage}
                      onChange={(e) => setMassage(e.target.value)}
                    />
                  </FormControl>
                  <Center>
                    <Button bg="purple" w={{ base: px2vw(245), lg: '245px' }} color="wh.100">
                      Submit
                    </Button>
                  </Center>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Center>
      </Box>
    </Box>
  )
}

export default PageFour
