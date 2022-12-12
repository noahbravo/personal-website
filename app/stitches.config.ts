import { createStitches } from '@stitches/react'

type Value = string

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        'turquoise-200': '#0098a8',
        'turquoise-400': '#005C65',
        'yellow-100': '#FFAD00',
        'red-100': '#FF0D00',
        black: '#000',
        white: '#fff'
      },
      fonts: {
        primary: 'Karla, Helvetica Neue, Helvetica, sans-serif',
        secondary: 'East Border, Helvetica Neue, Helvetica, sans-serif'
      },
      fontSizes: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.5rem', // 24px
        '2xl': '2.25rem', // 36px
        '3xl': '3rem', // 48px
        '4xl': '3.875rem', // 62px
        '5xl': '5rem' // 80px
      }
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1536px)'
    },
    utils: {
      marginX: (value: Value) => ({
        marginLeft: value,
        marginRight: value
      }),
      marginY: (value: Value) => ({
        marginTop: value,
        marginBottom: value
      }),
      paddingX: (value: Value) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      paddingY: (value: Value) => ({
        paddingTop: value,
        paddingBottom: value
      }),
      size: (value: Value) => ({
        width: value,
        height: value
      }),
      borderX: (value: Value) => ({
        borderLeft: value,
        borderRight: value
      }),
      borderY: (value: Value) => ({
        borderTop: value,
        borderBottom: value
      })
    }
  })
