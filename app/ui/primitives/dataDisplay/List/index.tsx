import React from 'react'
import type { LayoutAndCSSProps } from '~/ui/primitives/types'
import { getformattedProps } from '~/utils/primitives'
import { StyledList, StyledListItem } from './styles'

interface ListProps extends React.HTMLAttributes<HTMLUListElement>, LayoutAndCSSProps {
  children: React.ReactNode
}

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement>, LayoutAndCSSProps {
  children: React.ReactNode
}

const List = ({ children, css, ...props }: ListProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props })
  return (
    <StyledList css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledList>
  )
}

const ListItem = ({ children, css, ...props }: ListItemProps) => {
  const { mediaStyles, restProps } = getformattedProps({ props })
  return (
    <StyledListItem css={{ ...mediaStyles, ...css }} {...restProps}>
      {children}
    </StyledListItem>
  )
}

export { List, ListItem }
