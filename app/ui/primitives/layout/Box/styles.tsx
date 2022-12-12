import { styled } from '~/stitches.config'
import { bgColor } from '~/styles'

export const styleAliases = {
  bgColor: 'backgroundColor',
  bgImage: 'backgroundImage',
  bgSize: 'backgroundSize',
  bgPosition: 'backgroundPosition',
  bgRepeat: 'backgroundRepeat'
}

const bgSize = {
  auto: 'auto',
  cover: 'cover',
  contain: 'contain'
}

const bgPosition = {
  bottom: 'bottom',
  center: 'center',
  left: 'left',
  leftBottom: 'left bottom',
  leftTop: 'left top',
  right: 'right',
  rightBottom: 'right bottom',
  rightTop: 'right top',
  top: 'top'
}

const bgRepeat = {
  repeat: 'repeat',
  noRepeat: 'no-repeat',
  repeatX: 'repeat-x',
  repeatY: 'repeat-y',
  repeatRound: 'round',
  repeatSpace: 'space'
}

const customStyleProps = {
  background: '',
  bgImage: '',
  borderRadius: ''
}

export const styleProps = {
  bgSize,
  bgPosition,
  bgRepeat,
  bgColor,
  ...customStyleProps
} as const

const border = '1px solid $white'
export const variants = {
  border: {
    full: {
      border
    },
    bottom: {
      borderBottom: border
    },
    x: {
      borderX: border
    },
    y: {
      borderY: border
    }
  }
}

export const StyledDiv = styled('div', {
  variants
})
