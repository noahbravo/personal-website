import { styled } from '~/stitches.config'
import { styleProps as textStyleProps } from '~/ui/primitives/typography/Text/styles'

export const styleProps = {
  ...textStyleProps
} as const

export const StyledH1 = styled('h1', {
  fontFamily: '$primary',
  fontWeight: 700
})
