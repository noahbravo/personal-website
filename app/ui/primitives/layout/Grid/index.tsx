import React from 'react'
import type { PrimitiveProps } from '../../types'
import { getformattedProps } from '../../../../utils/primitives'
import { styleAliases, styleProps, StyledDiv } from './styles'

interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
}

const Grid = ({ children, css, ...props }: GridProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases })

  return (
    <StyledDiv css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { Grid }
