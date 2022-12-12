import { styled, keyframes } from '~/stitches.config'

const moveUpDown = keyframes({
  '0%, to': { transform: 'translateY(-15%)' },
  '50%': { transform: 'translateY(15%)' }
})

export const variants = {
  variant: {
    line: {
      position: 'relative',
      '&::before': {
        width: '0',
        height: '.12rem',
        position: 'absolute',
        bottom: '45%',
        content: '',
        left: '-9%',
        backgroundColor: '$white',
        visibility: 'hidden',
        transition: 'all .25s ease-in-out'
      },
      '&:hover': {
        '&::before': {
          width: '115%',
          visibility: 'visible'
        }
      }
    },
    scrollDown: {
      animation: `${moveUpDown} 1.1s linear infinite`
    }
  }
}

export const StyledLink = styled('a', {
  color: '$white',
  textDecoration: 'none',
  transition: '0.15s color ease-in-out',
  cursor: 'pointer',
  outline: '1px solid transparent',
  variants
})
