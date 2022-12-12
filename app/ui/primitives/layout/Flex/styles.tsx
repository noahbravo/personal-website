import { styled } from '../../../../stitches.config'

export const styleAliases = {
  direction: 'flexDirection',
  justify: 'justifyContent',
  align: 'alignItems',
  wrap: 'flexWrap'
}

const direction = {
  row: 'row',
  rowReverse: 'row-reverse',
  col: 'column',
  colReverse: 'column-reverse'
}

const justify = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly'
}

const align = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
}

const wrap = {
  wrap: 'wrap',
  reverse: 'wrap-reverse',
  noWrap: 'nowrap'
}

const customStyleProps = {
  gap: ''
}

export const styleProps = {
  direction,
  justify,
  align,
  wrap,
  ...customStyleProps
} as const

export const StyledDiv = styled('div', {
  display: 'flex'
})
