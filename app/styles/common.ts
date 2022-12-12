import { getStylePropsFromToken } from './helpers'
import { config } from '../stitches.config'

const {
  theme: { colors }
} = config

type Colors = typeof colors

export const bgColor = getStylePropsFromToken<Colors>(colors)

const display = {
  block: 'block',
  'inline-block': 'inline-block',
  inline: 'inline',
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  'inline-grid': 'inline-grid',
  hidden: 'none'
}

const position = {
  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky'
}

const positionOptions = {
  top: '',
  right: '',
  left: '',
  bottom: ''
}

const zIndex = {
  z0: '0',
  z10: '10',
  z20: '20',
  z30: '30',
  z40: '40',
  z50: '50',
  zAuto: 'auto'
}

const maxWidth = {
  '0': '0rem',
  none: 'none',
  xs: '20rem' /* 320px */,
  sm: '24rem' /* 384px */,
  md: '28rem' /* 448px */,
  lg: '32rem' /* 512px */,
  xl: '36rem' /* 576px */,
  '2xl': '42rem' /* 672px */,
  '3xl': '48rem' /* 768px */,
  '4xl': '56rem' /* 896px */,
  '5xl': '64rem' /* 1024px */,
  '6xl': '72rem' /* 1152px */,
  '7xl': '80rem' /* 1280px */,
  full: '100%',
  wMin: 'min-content',
  wMax: 'max-content',
  wFit: 'fit-content'
}

const minHeight = {
  '0': '0',
  none: 'none',
  full: '100%',
  screen: '100vh',
  hMin: 'min-content',
  hMax: 'max-content',
  hFit: 'fit-content'
}

const opacity = {
  '0': '0',
  '5': '0.05',
  '10': '0.1',
  '20': '0.2',
  '25': '0.25',
  '30': '0.3',
  '40': '0.4',
  '50': '0.5',
  '60': '0.6',
  '70': '0.7',
  '75': '0.75',
  '80': '0.8',
  '90': '0.9',
  '95': '0.95',
  '100': '1'
}

const pointerEvents = {
  auto: 'auto',
  none: 'none'
}

const textAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
  justify: 'justify',
  start: 'start',
  end: 'end'
}

const overflow = {
  auto: 'auto',
  hidden: 'hidden',
  clip: 'clip',
  visible: 'visible',
  scroll: 'scroll'
}

const overflowX = overflow
const overflowY = overflow

const visibility = {
  visible: 'visible',
  invisible: 'hidden',
  collapse: 'collapse'
}

const gridRow = {
  auto: 'auto',
  full: '1 / -1',
  unset: 'unset',
  '1': 'span 1 / span 1',
  '2': 'span 2 / span 2',
  '3': 'span 3 / span 3',
  '4': 'span 4 / span 4',
  '5': 'span 5 / span 5',
  '6': 'span 6 / span 6'
}

const gridColumn = {
  ...gridRow,
  '7': 'span 7 / span 7',
  '8': 'span 8 / span 8',
  '9': 'span 9 / span 9',
  '10': 'span 10 / span 10',
  '11': 'span 11 / span 11',
  '12': 'span 12 / span 12'
}

const gridRowEnd = {
  auto: 'auto',
  unset: 'unset',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7'
}

const gridColumnEnd = {
  ...gridRowEnd,
  '8': '8',
  '9': '9',
  '10': '10',
  '11': '11',
  '12': '12',
  '13': '13'
}

const justifySelf = {
  auto: 'auto',
  start: 'start',
  end: 'end',
  center: 'center',
  stretch: 'stretch'
}

const alignSelf = {
  auto: 'auto',
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline'
}

const grid = {
  gridColumn,
  gridColumnEnd,
  gridColumnStart: gridColumnEnd,
  gridRow,
  gridRowEnd,
  gridRowStart: gridRowEnd,
  justifySelf,
  alignSelf
}

const flexGrow = {
  '0': '0',
  '1': '1'
}

const flex = {
  flexBasis: '',
  flexGrow,
  flexShrink: flexGrow
}

const size = {
  width: '',
  height: '',
  size: '',
  maxHeight: ''
}

const padding = {
  padding: '',
  paddingTop: '',
  paddingRight: '',
  paddingBottom: '',
  paddingLeft: '',
  paddingX: '',
  paddingY: ''
}

const margin = {
  margin: '',
  marginTop: '',
  marginRight: '',
  marginBottom: '',
  marginLeft: '',
  marginX: '',
  marginY: ''
}

export const commonStyleProps = {
  display,
  ...grid,
  ...flex,
  ...size,
  maxWidth,
  minHeight,
  position,
  ...positionOptions,
  zIndex,
  ...margin,
  ...padding,
  opacity,
  textAlign,
  overflow,
  overflowX,
  overflowY,
  visibility,
  transform: '',
  transition: '',
  pointerEvents
}
