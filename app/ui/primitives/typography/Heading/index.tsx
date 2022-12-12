import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleProps, StyledH1 } from './styles'

interface HeadingProps extends PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading = ({ as = 'h1', css, children, ...props }: HeadingProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps })

  return (
    <StyledH1 as={as} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledH1>
  )
}

export { Heading }
