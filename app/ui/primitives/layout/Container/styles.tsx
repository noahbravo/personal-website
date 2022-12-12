import { styled } from '~/stitches.config'
import { toRem, bgColor } from '~/styles'

export const styleAliases = {
  bgColor: 'backgroundColor'
}

export const styleProps = {
  bgColor,
  background: ''
} as const

export const variants = {
  variant: {
    'center-self': {
      margin: '0 auto'
    },
    'center-content': {
      display: 'flex',
      alignItems: 'center'
    },
    wrap: {
      width: '100%',
      marginX: 'auto',
      paddingX: toRem(12),
      '@md': {
        paddingX: '0',
        maxWidth: toRem(744)
      },
      '@lg': {
        maxWidth: toRem(980)
      },
      '@xl': {
        maxWidth: toRem(1200)
      },
      '@2xl': {
        maxWidth: toRem(1280)
      }
    }
  }
}

export const StyledDiv = styled('div', {
  variants
})
