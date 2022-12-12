export type StringObject = Record<string, string>
export type StringNumberObject = Record<string, string | number>
export type PropsType = Record<string, any>
export type StyleProps = Record<string, StringObject | string>
export type StyleAliases = StringObject
export type StyleAccType = Record<string, StringNumberObject | string | number>

export interface GetFormattedPropsOptions {
  props: PropsType
  styleProps?: StyleProps
  styleAliases?: StyleAliases
  customStyleProps?: StringObject
}

export interface FormatStylesOptions {
  styleKey: string
  styleValue: string | number | StringNumberObject | Array<string | number>
  index: number
  mediaKey: string
  defaultValue?: string | number
  acc: StyleAccType
}
