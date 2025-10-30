import { ChakraProvider, ColorModeProvider, createStandaloneToast, ToastId, UseToastOptions } from '@chakra-ui/react'
import theme from '../theme'
import { GlobalDebug } from '../utils/remove-consoles'
import 'pretendard/dist/web/static/pretendard.css'
import Head from 'next/head'
import { ToastMessageContext } from 'utils/toastMessage'

export type SetToastMessage = (options: UseToastOptions) => ToastId

function MyApp({ Component, pageProps }: any) {
  const toast = createStandaloneToast({ theme })

  const setToastMessage = (options: UseToastOptions) => {
    const { title, description, status, duration, isClosable } = options

    return toast.toast({
      title,
      description,
      status: status ?? 'success',
      duration: duration ?? 9000,
      isClosable: isClosable ?? true,
      position: 'top-right'
    })
  }

  process.env.NODE_ENV === 'production' && GlobalDebug(false, true)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/changwoolab/mypublic/main/favicon.ico" />
        <title>KWEB</title>
        <meta property="og:title" content="KWEB" />
        <meta property="og:description" content="고려대학교 최고의 웹동아리, KWEB입니다." />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false
          }}
        >
          <ToastMessageContext.Provider value={setToastMessage}>
            <Component {...pageProps} />
          </ToastMessageContext.Provider>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
