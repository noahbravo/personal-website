import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import type { variants } from './styles'
import { styleAliases, styleProps, StyledDiv } from './styles'

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  variant?: keyof typeof variants.variant
}

const Flex = ({ children, variant, css, ...props }: FlexProps) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps,
    styleAliases
  })

  return (
    <StyledDiv variant={variant} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { Flex }
