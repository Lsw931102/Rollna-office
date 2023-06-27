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
} from '@chakra-ui/react'
import Lottie from 'lottie-react'

import px2vw from '@/utils/px2vw'
import roadMapAni from '@/assets/lotties/roadMap.json'
function PageFour(prop) {
  const [isModel, setModel] = useState(false)
  const [KdesignCompany, setKdesignCompany] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Email, setEmail] = useState('')
  const [TelegramHandle, setTelegramHandle] = useState('')
  const [Massage, setMassage] = useState('')
  const containerRef = useRef(null);
  const [preScrollTop, setPreScrollTop] = useState();
  const [isTop, setIsTop] = useState();
  const indexSwiper = prop.IndexSwiper
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      if (container && container.scrollTop !== undefined) {
        const { scrollTop } = container;
        setPreScrollTop(scrollTop)
        
        if (scrollTop <= 10) {
         
          if (preScrollTop >= scrollTop) {
            setIsTop(1)
            indexSwiper.mousewheel.enable()
          }
        }
        // console.log(scrollTop)
        // const atTop = scrollTop === 0;
        // setIsAtTop(atTop);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);

    return () => {
      const container = containerRef.current;
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {}, []);
  const handleOnScroll = (e) => {
    // const { scrollTop, clientHeight, scrollHeight } = targetRef.current;
    console.log(e)

  }
  return (
    <Box w={{ base: '100%', lg: '1280px' }} m="0 auto" h='100%' overflow='auto' ref={containerRef}>
      <Center
        fontSize={{ base: px2vw(32), lg: '32px' }}
        fontWeight={{ base: px2vw(900), lg: '900' }}
        color="black"
        mt={{ base: px2vw(16), lg: '32px' }}
      >
        RoadMap
      </Center>
      <Box position="relative" h={{ base: px2vw(420), lg: '420px' }}>
        <Box position="absolute" top={{ base: px2vw(180), lg: '180px' }} left="5%">
          <Flex>
            <Box>
              <Text>Kickoff the project:</Text>
              <Text>1.Research the Market and Technology.</Text>
              <Text>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" left="35%" top={{ base: px2vw(90), lg: '90px' }}>
          <Flex>
            <Box>
              <Text>Kickoff the project:</Text>
              <Text>1.Research the Market and Technology.</Text>
              <Text>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" right="10%">
          <Flex>
            <Box>
              <Text>Kickoff the project:</Text>
              <Text>1.Research the Market and Technology.</Text>
              <Text>2.Start Project Design.</Text>
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
            <Box>
              <Text>Kickoff the project:</Text>
              <Text>1.Research the Market and Technology.</Text>
              <Text>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" bottom={{ base: px2vw(180), lg: '180px' }} right="15%">
          <Flex>
            <Box>
              <Text>Kickoff the project:</Text>
              <Text>1.Research the Market and Technology.</Text>
              <Text>2.Start Project Design.</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box >
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
