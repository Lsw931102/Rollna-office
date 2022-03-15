import React from 'react'
import { Box } from '@chakra-ui/react'

import { getI18nSSRProps, GetI18nServerSideProps } from '@/utils/i18n'

import Banner from '@/components/Banner'
import NoCode from '@/components/NoCode'
import Platform from '@/components/Platform'
import Features from '@/components/Features'
function App() {
  return (
    <Box
      maxW={{
        lg: '1366px',
      }}
      minW={{
        lg: '1024px',
      }}
      margin=" 0 auto"
    >
      <Banner />
      <NoCode />
      <Platform />
      <Features />
      {/* <Box>1</Box> */}
    </Box>
  )
}

export const getServerSideProps = async (ctx: GetI18nServerSideProps) => {
  return {
    props: { ...(await getI18nSSRProps(ctx, ['home'])) },
  }
}
export default App
