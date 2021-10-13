import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import styles from './styles'
import borders from './foundations/borders'
import components from './components'

const config: ThemeConfig = {}

const breakpoints = createBreakpoints({
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1080px',
})

const colors = {
  ...baseTheme.colors,
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    '600': '#042646',
    '700': '#072738',
    '800': '#062130',
  },
  green: {
    '200': '#9DDB59',
  },
  yellow: { '200': '#EDAB06' },
}

const textStyles = {
  '12': {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '14': {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '16': {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '18': {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1,
  },
  '24': {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 1,
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
