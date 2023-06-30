import React, { useState, useEffect } from 'react'
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

function ContractModel(prop: any) {
  const [isModel, setModel] = useState(false)
  const [KdesignCompany, setKdesignCompany] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Email, setEmail] = useState('')
  const [TelegramHandle, setTelegramHandle] = useState('')
  const [Massage, setMassage] = useState('')
  useEffect(() => {
    console.log(prop)
    if (prop.isShow) {
      setModel(true)
    }
  }, [prop.isShow])
  const isModelFlase = () => {
    setModel(false)
    prop.Click(false)
  }
  return (
    <Modal isOpen={isModel} onClose={isModelFlase}>
      <ModalOverlay />
      <ModalContent
        maxW={{ base: '90%', lg: '640px' }}
        top="14%"
        borderRadius={{ base: px2vw(16), lg: '24px' }}
        pt={{ base: px2vw(10), lg: '14px' }}
      >
        <ModalHeader>
          <Center fontSize={{ base: px2vw(24), lg: '24px' }}>Contact Us</Center>
        </ModalHeader>
        <ModalCloseButton
          right={{ base: px2vw(16), lg: '24px' }}
          top={{ base: px2vw(16), lg: '24px' }}
        />
        <ModalBody>
          <Box p={{ base: px2vw(24), lg: '20px' }} pt="0">
            <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
              <FormLabel>*Kdesign Company</FormLabel>

              <Input
                placeContent="Kdesign Company"
                value={KdesignCompany}
                onChange={(e) => setKdesignCompany(e.target.value)}
                h={{ base: px2vw(40), lg: '40px' }}
                borderRadius={{ base: px2vw(4), lg: '4px' }}
                pl={{ base: px2vw(12), lg: '12px' }}
                borderColor="rgba(0, 0, 0, 0.24)"
                mt={{ base: px2vw(5), lg: '10px' }}
              />
            </FormControl>
            <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
              <FormLabel>*Company name</FormLabel>
              <Input
                placeholder="Company name"
                value={CompanyName}
                h={{ base: px2vw(40), lg: '40px' }}
                borderRadius={{ base: px2vw(4), lg: '4px' }}
                borderColor="rgba(0, 0, 0, 0.24)"
                mt={{ base: px2vw(5), lg: '10px' }}
                pl={{ base: px2vw(12), lg: '12px' }}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
            <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
              <FormLabel>*Email</FormLabel>
              <Input
                placeholder="Email"
                value={Email}
                h={{ base: px2vw(40), lg: '40px' }}
                borderRadius={{ base: px2vw(4), lg: '4px' }}
                borderColor="rgba(0, 0, 0, 0.24)"
                mt={{ base: px2vw(5), lg: '10px' }}
                pl={{ base: px2vw(12), lg: '12px' }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
              <FormLabel>Telegram Handle</FormLabel>
              <Input
                placeholder="Telegram Handle"
                value={TelegramHandle}
                onChange={(e) => setTelegramHandle(e.target.value)}
                h={{ base: px2vw(40), lg: '40px' }}
                borderRadius={{ base: px2vw(4), lg: '4px' }}
                borderColor="rgba(0, 0, 0, 0.24)"
                pl={{ base: px2vw(12), lg: '12px' }}
                mt={{ base: px2vw(5), lg: '10px' }}
              />
            </FormControl>
            <FormControl mb={{ base: px2vw(16), lg: '16px' }}>
              <FormLabel>Massage</FormLabel>
              <Textarea
                placeholder="Massage"
                value={Massage}
                onChange={(e) => setMassage(e.target.value)}
                h={{ base: px2vw(72), lg: '72px' }}
                borderRadius={{ base: px2vw(4), lg: '4px' }}
                borderColor="rgba(0, 0, 0, 0.24)"
                mt={{ base: px2vw(5), lg: '10px' }}
                pl={{ base: px2vw(12), lg: '12px' }}
              />
            </FormControl>
            <Center>
              <Button
                w={{ base: '100%', lg: '245px' }}
                h={{ base: px2vw(48), lg: '48px' }}
                bg="purple"
                colorScheme="purple"
                color="wh.100"
              >
                Submit
              </Button>
            </Center>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default React.memo(ContractModel)
