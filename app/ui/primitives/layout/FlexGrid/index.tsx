import React from 'react'
import type { PrimitiveProps } from '~/ui/primitives/types'
import { getformattedProps } from '~/utils/primitives'
import { styleAliases, styleProps, StyledDiv } from './styles'

interface FlexGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
}

const FlexGrid = ({ children, css, ...props }: FlexGridProps) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps,
    styleAliases
  })

  return (
    <StyledDiv css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { FlexGrid }
