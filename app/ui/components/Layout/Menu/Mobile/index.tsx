import type { Animations } from '~/types/animations'
import type { MenuProps } from '../types'
import { Container, Flex, Img, List, ListItem, Link, Text } from '~/ui/primitives'
import Buttons from './Buttons'
import logo from '~/assets/img/logo.svg'
import grungepattern from '~/assets/img/grungepattern.png'

interface Network {
  name: string
  href: string
}

interface MobileMenuProps extends MenuProps {
  networks: Network[]
  animateMobileMenu: Animations['animateMobileMenu']
}

const MobileMenu = ({ menuItems, networks, animateMobileMenu }: MobileMenuProps) => {
  const { openMenu, closeMenu } = animateMobileMenu() || {}

  return (
    <Container
      position="fixed"
      display={{ xs: 'flex', lg: 'hidden' }}
      width="100vw"
      height="100vh"
      top="0"
      left="0"
      zIndex="z50"
      pointerEvents="none"
      overflow="hidden"
    >
      <Container
        className="mobileMenu"
        position="absolute"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        opacity={'0'}
        pointerEvents="none"
        transform="translateX(100%)"
        visibility="invisible"
        background={`$turquoise-400 url("${grungepattern}")`}
      >
        <Flex direction="col" justify="between" align="center" width="100%" height="100%">
          <Container variant="wrap" transform="translateY(108%)">
            <Img
              src={logo}
              alt="Noah Bravo logo"
              imgWidth={{ xs: 120, sm: 150 }}
              pointerEvents="none"
            />
          </Container>
          <Container as="nav">
            <List>
              {menuItems.map((item) => (
                <ListItem key={item} textAlign="center">
                  <Link href={`#${item}`} data-type="mobile">
                    <Text textTransform="uppercase" fontSize="3xl" lineHeight="tight">
                      {item}
                    </Text>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Container>
          <Container variant="wrap" width="100%">
            <Flex justify="center" gap={16} paddingBottom={40}>
              {networks.map(({ name, href }) => (
                <Link key={name} href={href} isExternal>
                  <Text>{name}</Text>
                </Link>
              ))}
            </Flex>
          </Container>
        </Flex>
      </Container>
      <Buttons openMenu={openMenu} closeMenu={closeMenu} />
    </Container>
  )
}

export default MobileMenu
