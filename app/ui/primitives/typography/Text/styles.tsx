import { styled, config } from '~/stitches.config'
import { toRem, getStylePropsFromToken } from '~/styles'

const {
  theme: { colors, fontSizes, fonts }
} = config

type Colors = typeof colors
type FontFamilies = typeof fonts
type FontSizes = typeof fontSizes

const color = getStylePropsFromToken<Colors>(colors)
const fontFamily = getStylePropsFromToken<FontFamilies>(fonts)
export const fontSize = getStylePropsFromToken<FontSizes>(fontSizes)

const fontWeight = {
  normal: '400',
  bold: '700'
}

const textTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  normalCase: 'none'
}

const lineHeight = {
  '3': '.75rem' /* 12px */,
  '4': '1rem' /* 16px */,
  '5': '1.25rem' /* 20px */,
  '6': '1.5rem' /* 24px */,
  '7': '1.75rem' /* 28px */,
  '8': '2rem' /* 32px */,
  '9': '2.25rem' /* 36px */,
  '10': '2.5rem' /* 40px */,
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2'
}

export const styleProps = {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textTransform,
  lineHeight
} as const

export const variants = {
  variant: {
    withSeparator: {
      '&::after': {
        content: '|',
        display: 'none',
        padding: `0 ${toRem(4)}`,
        '@sm': {
          display: 'inline-flex'
        }
      }
    }
  }
}

export const StyledSpan = styled('span', {
  variants
})
