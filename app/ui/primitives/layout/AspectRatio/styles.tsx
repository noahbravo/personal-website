import { styled } from '../../../../stitches.config'

export const styleAliases = {
  ratio: 'aspectRatio'
}

const ratio = {
  auto: 'auto',
  square: '1 / 1',
  video: '16 / 9'
}

const customStyleProps = {
  maxWidth: ''
}

export const styleProps = {
  ratio,
  ...customStyleProps
} as const

export const StyledDiv = styled('div')
