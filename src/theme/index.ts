import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'

import px2vw from '../utils/px2vw'
import styles from './styles'
import borders from './foundations/borders'
import components from './components'

const config: ThemeConfig = {}

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1290px',
}

const colors = {
  ...baseTheme.colors,
  wh: {
    '100': '#FFFFFF',
    '12': 'rgba(255, 255, 255, 0.12)',
  },
  black: '#000000',
  font: {
    100: '#2F2F2F',
  },
  bg: 'radial-gradient(50% 50.00% at 50% 50.00%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(147deg, #FFAAF6 0%, #48A5FC 67.71%, #0009FF 99.99%, #2137FF 100%), url(@/assets/imgs/bg.png), lightgray 50% / cover no-repeat',
  purple: '#8337ED',
}

const textStyles = {
  '12': {
    fontSize: {
      base: px2vw(12),
      md: '12px',
    },
    lineHeight: {
      base: px2vw(12),
      md: '12px',
    },
  },
  '13': {
    fontSize: {
      base: px2vw(13),
      md: '13px',
    },
    lineHeight: {
      base: px2vw(13),
      md: '13px',
    },
  },
  '14': {
    fontSize: {
      base: px2vw(14),
      md: '14px',
    },
    lineHeight: {
      base: px2vw(14),
      md: '14px',
    },
  },
  '16': {
    fontSize: {
      base: px2vw(16),
      md: '16px',
    },
    lineHeight: {
      base: px2vw(16),
      md: '16px',
    },
  },
  '18': {
    fontSize: {
      base: px2vw(18),
      md: '18px',
    },
    lineHeight: {
      base: px2vw(18),
      md: '18px',
    },
  },
  '20': {
    fontSize: {
      base: px2vw(20),
      md: '20px',
    },
    lineHeight: {
      base: px2vw(20),
      md: '20px',
    },
  },
  '22': {
    fontSize: {
      base: px2vw(22),
      md: '22px',
    },
    lineHeight: {
      base: px2vw(22),
      md: '22px',
    },
  },
  '24': {
    fontSize: {
      base: px2vw(24),
      md: '24px',
    },
    lineHeight: {
      base: px2vw(24),
      md: '24px',
    },
  },
  '30': {
    fontSize: {
      base: px2vw(30),
      md: '30px',
    },
    lineHeight: {
      base: px2vw(30),
      md: '30px',
    },
  },
  '36': {
    fontSize: {
      base: px2vw(36),
      md: '36px',
    },
    lineHeight: {
      base: px2vw(36),
      md: '36px',
    },
  },
  '48': {
    fontSize: {
      base: px2vw(48),
      md: '48px',
    },
    lineHeight: {
      base: px2vw(48),
      md: '48px',
    },
  },
  '72': {
    fontSize: {
      base: px2vw(72),
      md: '72px',
    },
    lineHeight: {
      base: px2vw(72),
      md: '72px',
    },
  },
}

const layerStyles = {}

// https://chakra-ui.com/docs/theming/theme
const theme = extendTheme({
  config,
  colors,
  fonts: {
    body: '"Bai Jamjuree Regular", "SF Pro Display", "PingFang SC", "Source Han Sans CN", "Microsoft Yahei"',
  },
  sizes: {
    xl: '1080px',
  },
  fontSizes: {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '24': '24px',
  },
  styles,
  borders,
  components,
  breakpoints,
  layerStyles,
  textStyles,
})

export default theme
