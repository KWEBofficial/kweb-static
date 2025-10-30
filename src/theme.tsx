import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    main: '#000000',
    text: '#FFFFFF'
  },
  secondary: {
    main: '#F6F6F6',
    text: '#000000'
  },
  surface: {
    main: '#FFFFFF',
    text: '#000000'
  },
  background: {
    main: '#F1F1F1',
    text: '#FFFFFF'
  },
  success: {
    main: '#E5F5EF',
    text: '#161F21',
    icon: '#34CD9C'
  },
  info: {
    main: '#E1F6F7',
    text: '#161F21',
    icon: '#03CCE2'
  },
  warning: {
    main: '#FBF5E6',
    text: '#161F21',
    icon: '#FBBE3D'
  },
  error: {
    main: '#FDECED',
    text: '#161F21',
    icon: '#EF4D60'
  }
}

const fonts = {
  heading: `'Pretendard', sans-serif`,
  body: `'Pretendard', sans-serif`
}

const theme = extendTheme({
  colors,
  fonts
})

export default theme
