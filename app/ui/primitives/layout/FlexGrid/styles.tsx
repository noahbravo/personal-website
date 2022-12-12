import { styled } from '../../../../stitches.config'
import { styleProps as flexStyleProps, styleAliases as flexStyleAliases } from '../Flex/styles'
import { styleProps as gridStyleProps, styleAliases as gridStyleAliases } from '../Grid/styles'

export const styleAliases = {
  ...flexStyleAliases,
  ...gridStyleAliases
}

const display = {
  flex: 'flex',
  'inline-flex': 'inline-flex',
  grid: 'grid',
  'inline-grid': 'inline-grid'
}

export const styleProps = {
  display,
  ...flexStyleProps,
  ...gridStyleProps
} as const

export const StyledDiv = styled('div', {
  display: 'flex'
})
