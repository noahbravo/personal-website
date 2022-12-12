import React from 'react'
import type { PrimitiveProps } from '~/ui/primitives/types'
import { getformattedProps } from '~/utils/primitives'
import type { variants } from './styles'
import { styleAliases, styleProps, StyledDiv } from './styles'

type Variants = { [k in keyof typeof variants]?: keyof typeof variants[k] }

interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PrimitiveProps<typeof styleProps>,
    Variants {
  children: React.ReactNode
  variant: keyof typeof variants.variant
}

const Center = ({ children, css, border, variant = 'center-content', ...props }: CenterProps) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps,
    styleAliases
  })

  return (
    <StyledDiv border={border} variant={variant} css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledDiv>
  )
}

export { Center }
