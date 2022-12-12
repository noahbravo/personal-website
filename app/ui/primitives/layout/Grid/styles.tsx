import { styled } from '../../../../stitches.config'

export const styleAliases = {
  align: 'alignItems',
  autoColumns: 'gridAutoColumns',
  autoFlow: 'gridAutoFlow',
  autoRows: 'gridAutoRows',
  templateColumns: 'gridTemplateColumns',
  templateRows: 'gridTemplateRows'
}

const align = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch'
}

const autoColumns = {
  auto: 'auto',
  min: 'min-content',
  max: 'max-content',
  fr: 'minmax(0, 1fr)'
}

const autoFlow = {
  row: 'row',
  col: 'column',
  dense: 'dense',
  rowDense: 'row dense',
  colDense: 'col dense'
}

const autoRows = autoColumns

const templateRows = {
  '1': 'repeat(1, minmax(0, 1fr))',
  '2': 'repeat(2, minmax(0, 1fr))',
  '3': 'repeat(3, minmax(0, 1fr))',
  '4': 'repeat(4, minmax(0, 1fr))',
  '5': 'repeat(5, minmax(0, 1fr))',
  '6': 'repeat(6, minmax(0, 1fr))',
  none: 'none'
}

const templateColumns = {
  ...templateRows,
  '7': 'repeat(7, minmax(0, 1fr))',
  '8': 'repeat(8, minmax(0, 1fr))',
  '9': 'repeat(9, minmax(0, 1fr))',
  '10': 'repeat(10, minmax(0, 1fr))',
  '11': 'repeat(11, minmax(0, 1fr))',
  '12': 'repeat(12, minmax(0, 1fr))'
}

const customStyleProps = {
  gap: ''
}

export const styleProps = {
  align,
  autoColumns,
  autoFlow,
  autoRows,
  templateColumns,
  templateRows,
  ...customStyleProps
} as const

export const StyledDiv = styled('div', {
  display: 'grid'
})
