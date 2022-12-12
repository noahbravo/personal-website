import React from 'react'
import type { ForwardRefComponent as PolymorphicForwardRefComponent } from '~/utils/polymorphic'
import type { PrimitiveProps } from '../../types'
import type { variants } from './styles'
import { getformattedProps } from '~/utils/primitives'
import { styleProps, styleAliases, StyledDiv } from './styles'

interface ContainerProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  variant?: keyof typeof variants.variant
}

type PolymorphicContainer = PolymorphicForwardRefComponent<'div', ContainerProps>

const Container = React.forwardRef(
  ({ as = 'div', variant, css, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })

    return (
      <StyledDiv
        as={as}
        variant={variant}
        css={{ ...mediaStyles, ...css }}
        {...restProps}
        ref={forwardedRef}
      >
        {children}
      </StyledDiv>
    )
  }
) as PolymorphicContainer

Container.displayName = 'Container'

export { Container }
