import type {
  StringObject,
  StringNumberObject,
  PropsType,
  StyleProps,
  StyleAliases,
  StyleAccType,
  GetFormattedPropsOptions,
  FormatStylesOptions
} from './types'
import { breakpoints, toRem, commonStyleProps } from '../../styles'

const breakpointKeys = Object.keys(breakpoints)

const remStyleProps = [
  'margin',
  'padding',
  'width',
  'height',
  'gap',
  'top',
  'left',
  'bottom',
  'right'
]

export function splitProps(props: PropsType, stylePropsKeys: string[]) {
  const styleProps = {} as StringObject
  const restProps = {} as PropsType

  Object.entries(props).forEach(([key, value]) => {
    if (stylePropsKeys.includes(key)) styleProps[key] = value
    else restProps[key] = value
  })

  return [styleProps, restProps]
}

export function getMediaStyles(
  stylesWithBreakpointsProps: StringObject,
  stylesWithBreakpoints?: StyleProps,
  styleAliases?: StyleAliases
) {
  function getValue({
    styleValue,
    index,
    mediaKey,
    defaultValue
  }: Omit<FormatStylesOptions, 'styleKey' | 'acc'>) {
    let value = defaultValue
    if (Array.isArray(styleValue)) {
      value = styleValue[index]
    } else if (typeof styleValue === 'object') {
      value = styleValue[mediaKey]
    }
    return value
  }

  function formatStyles({ styleKey, styleValue, acc, ...options }: FormatStylesOptions) {
    const value = getValue({ styleValue, ...options })
    const key = styleAliases ? styleAliases[styleKey] || styleKey : styleKey

    if (value != null) {
      const styleProp = stylesWithBreakpoints && stylesWithBreakpoints[styleKey]
      const stylePropsValue = styleProp && typeof styleProp === 'object' ? styleProp[value] : value
      const formatToRem = remStyleProps.some((remStyleProp) => styleKey.includes(remStyleProp))
      const formattedValue =
        typeof stylePropsValue === 'number' && formatToRem
          ? toRem(stylePropsValue)
          : stylePropsValue

      acc[key] = formattedValue
    }
  }

  return breakpointKeys.reduce<StyleAccType>((acc, mediaKey, index) => {
    if (index === 0) {
      // initial breakpoint
      Object.entries(stylesWithBreakpointsProps).forEach(([styleKey, styleValue]) => {
        formatStyles({
          styleKey,
          styleValue,
          index,
          mediaKey,
          defaultValue: styleValue,
          acc
        })
      })
    } else {
      // from first declared breakpoint up
      const accMedia = `@${mediaKey}`
      acc[accMedia] = Object.entries(stylesWithBreakpointsProps).reduce<StringNumberObject>(
        (styleAcc, [styleKey, styleValue]) => {
          formatStyles({
            styleKey,
            styleValue,
            index,
            mediaKey,
            acc: styleAcc
          })
          return styleAcc
        },
        {}
      )
    }
    return acc
  }, {})
}

export function getformattedProps({ props, styleProps, styleAliases }: GetFormattedPropsOptions) {
  const stylePropsKeys = [
    ...(styleProps ? Object.keys(styleProps) : []),
    ...Object.keys(commonStyleProps)
  ]
  const [componentStyleProps, restProps] = splitProps(props, stylePropsKeys)
  const mediaStyles = getMediaStyles(
    componentStyleProps,
    { ...styleProps, ...commonStyleProps },
    styleAliases
  )

  return { mediaStyles, restProps }
}
