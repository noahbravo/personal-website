import React from 'react'
import type { PrimitiveProps } from '~/ui/primitives/types'
import { getformattedProps } from '~/utils/primitives'
import { styleAliases, styleProps, StyledDiv } from './styles'

interface AspectRatioProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps> {
  children: React.ReactNode
}

const AspectRatio = ({ children, css, ...props }: AspectRatioProps) => {
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

export { AspectRatio }
