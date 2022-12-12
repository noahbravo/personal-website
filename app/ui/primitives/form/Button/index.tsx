import React from 'react'
import type { LayoutAndCSSProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { StyledButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, LayoutAndCSSProps {
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, css, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props })

    return (
      <StyledButton
        type="button"
        css={{ ...mediaStyles, ...css }}
        ref={forwardedRef}
        {...restProps}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'

export { Button }
