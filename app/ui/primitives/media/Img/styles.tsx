import { styled } from '~/stitches.config'

export const styleAliases = {
  align: 'objectPosition',
  fit: 'objectFit',
  imgWidth: 'width',
  imgHeight: 'height'
}

const fit = {
  contain: 'contain',
  cover: 'cover',
  fill: 'fill',
  none: 'none',
  scaleSown: 'scale-down'
}

const align = {
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

const customStyleProps = {
  borderRadius: '',
  maxWidth: '',
  imgHeight: '',
  imgWidth: ''
}

export const styleProps = {
  align,
  fit,
  ...customStyleProps
} as const

export const StyledImg = styled('img')
