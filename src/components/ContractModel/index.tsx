/*
 * @Author: Austion
 * @Date: 2023-06-29 14:29:06
 * @LastEditTime: 2023-06-29 14:33:05
 * @LastEditors: Austion
 * @FilePath: /Rollna-office/src/components/model/index.tsx
 */
import React, { useState } from 'react'
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
} from '@chakra-ui/react'
import px2vw from '@/utils/px2vw'

function Model() {
  const [isModel, setModel] = useState(false)
  const [KdesignCompany, setKdesignCompany] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Email, setEmail] = useState('')
  const [TelegramHandle, setTelegramHandle] = useState('')
  const [Massage, setMassage] = useState('')
  return (
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
              <Input placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
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
  )
}

export default React.memo(Model)
