import React from 'react'
import type { LayoutAndCSSProps } from '~/ui/primitives/types'
import { getformattedProps } from '~/utils/primitives'
import type { variants } from './styles'
import { StyledLink } from './styles'

const externalLinkProps = {
  rel: 'noopener noreferrer nofollow',
  target: '_blank'
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, LayoutAndCSSProps {
  children?: React.ReactNode
  isExternal?: boolean
  variant?: keyof typeof variants.variant
}

const Link = ({ children, css, isExternal = false, variant, ...props }: LinkProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props })

  return (
    <StyledLink
      css={{ ...mediaStyles, ...css }}
      variant={variant}
      {...(isExternal && externalLinkProps)}
      {...restProps}
    >
      {children}
    </StyledLink>
  )
}

export { Link }
