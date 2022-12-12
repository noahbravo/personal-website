export function getStylePropsFromToken<T>(token: Record<string, string>) {
  type TokenTPropsType = Record<keyof T, string>

  return Object.keys(token).reduce<TokenTPropsType>((acc, key) => {
    const tokenKey = key as keyof T
    acc[tokenKey] = `$${key}`
    return acc
  }, {} as TokenTPropsType)
}

export function toRem(px: number, rootFontSize = 16) {
  return `${px / rootFontSize}rem`
}
