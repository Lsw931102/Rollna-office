import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import getConfig from 'next/config'
import type { AppProps } from 'next/app'

import theme from '@/theme'
import '@/styles/global.scss'
import Header from '@/components/Header'

const { publicRuntimeConfig } = getConfig()

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.rollnaConfig = publicRuntimeConfig
  }, [])
  const [swiperindex, setIndex] = useState<number>(0)

  const onClick = (val: number) => {
    setIndex(val)
  }
  const setIndexU = (val: number) => {
    setIndex(val)
  }

  return (
    <>
      <Head>
        <title>{`${pageProps?.title || publicRuntimeConfig.title}`}</title>
        <meta charSet="utf-8" />
        <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes" />
        <meta name="keywords" content="RollNA, Omnichain, Mulitchain, Trading, Protocol" />
        <meta
          name="description"
          content="RollNA is Advanced Omnichain Trading Protocol. Making Web3 more accessible for both users and developers, while improving the non-custody omnichain trading experience"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="yes" name="apple-touch-fullscreen" />
        <meta content="telephone=no,email=no" name="format-detection" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <link
          rel="shortcut icon"
          href={`${publicRuntimeConfig.cdn}/favicon.ico`}
          type="image/x-icon"
        />
        <link
          href={`${publicRuntimeConfig.cdn}/images/apple-touch-icon-48-precomposed.png`}
          rel="apple-touch-icon-precomposed"
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Header Click={onClick} />
        <Component {...(pageProps ?? {})} Index={swiperindex} setndexU={setIndexU}/>
      </ChakraProvider>
    </>
  )
}

export default App
