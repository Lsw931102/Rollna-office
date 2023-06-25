/*
 * @Author: Austion
 * @Date: 2023-06-23 18:33:19
 * @LastEditTime: 2023-06-25 16:49:48
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/page/pageFour.tsx
 */
import React from 'react'
import { Box, Button, Center, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, ModalOverlay, Flex, ModalFooter, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react';

import px2vw from '@/utils/px2vw'

function PageFour() {
    const [isModel, setModel] = useState(false);
    const [KdesignCompany, setKdesignCompany] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [Email, setEmail] = useState('');
    const [TelegramHandle, setTelegramHandle] = useState('');
    const [Massage, setMassage] = useState('');



    return (
        <Box h="100%" w={{ base: '100%', lg: '1280px' }} m="0 auto">
            <Center fontSize={{ base: px2vw(32), lg: '32px' }}
                fontWeight={{ base: px2vw(900), lg: '900' }}
                color="black"
                mt={{ base: px2vw(16), lg: '32px' }}>
                RoadMap
            </Center>
            <Box>
                <Center fontSize={{ base: px2vw(32), lg: '32px' }}
                    fontWeight={{ base: px2vw(900), lg: '900' }}
                    color="purple"
                    textTransform='capitalize'
                    mt={{ base: px2vw(16), lg: '32px' }}>
                    Join us to access the future of omnichain trading
                </Center>
                <Center fontSize={{ base: px2vw(32), lg: '32px' }}
                    fontWeight={{ base: px2vw(900), lg: '900' }}
                    color="purple"
                    textTransform='capitalize'
                    mt={{ base: px2vw(16), lg: '32px' }}>
                    with RollNA.
                </Center>
                <Center>
                    <Button onClick={() => setModel(true)} bg='purple' color='wh.100' mt={{ base: px2vw(10), lg: '10px' }}>Contact us</Button>

                    <Modal isOpen={isModel} size='xl' onClose={() => setModel(false)} >
                        <ModalOverlay />
                        <ModalContent >
                            <ModalHeader>
                                <Center fontSize={{ base: px2vw(24), lg: '24px' }}>Contact Us</Center>
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Box p={{ base: px2vw(24), lg: '20px' }} pt='0'>
                                    <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                                        <FormLabel>*Kdesign Company</FormLabel>

                                        <Input placeContent='Kdesign Company' value={KdesignCompany} onChange={(e) => setKdesignCompany(e.target.value)} />
                                    </FormControl>
                                    <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                                        <FormLabel>*Company name</FormLabel>
                                        <Input placeholder='Company name' value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} />
                                    </FormControl>
                                    <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                                        <FormLabel>*Email</FormLabel>
                                        <Input placeholder='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                                    </FormControl>
                                    <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                                        <FormLabel>Telegram Handle</FormLabel>
                                        <Input placeholder='Telegram Handle' value={TelegramHandle} onChange={(e) => setTelegramHandle(e.target.value)} />
                                    </FormControl>
                                    <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
                                        <FormLabel>Massage</FormLabel>
                                        <Textarea placeholder='Massage' value={Massage} onChange={(e) => setMassage(e.target.value)} />
                                    </FormControl>
                                    <Center>
                                        <Button bg='purple' w={{ base: px2vw(245), lg: '245px' }} color='wh.100' >Submit</Button>
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
