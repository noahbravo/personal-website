import { globalCss } from '../stitches.config'
import fonts from './fonts'

const boxSizing = { boxSizing: 'border-box' }
const height = { height: '100%' }
const mediaStyles = { display: 'block', maxWidth: '100%' }
const overflowWrap = { overflowWrap: 'break-word' }

export const globalStyles = globalCss({
  '@font-face': fonts,
  '*': { ...boxSizing, margin: 0 },
  '*:after': boxSizing,
  '*:before': boxSizing,
  html: height,
  img: mediaStyles,
  picture: mediaStyles,
  video: mediaStyles,
  canvas: mediaStyles,
  svg: mediaStyles,
  button: { font: 'inherit' },
  p: overflowWrap,
  h1: { ...overflowWrap, margin: 0 },
  h2: overflowWrap,
  h3: overflowWrap,
  h4: overflowWrap,
  '#root': { isolation: 'isolate' },
  body: {
    ...height,
    lineHeight: 1.5,
    backgroundColor: '$black',
    color: '$white',
    fontFamily: '$primary',
    overflowX: 'hidden',
    overflowY: 'hidden'
  }
})
