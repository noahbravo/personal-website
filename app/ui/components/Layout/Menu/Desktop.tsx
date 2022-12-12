import type { MenuProps } from './types'
import { Container, Flex, Link, Text } from '~/ui/primitives'
import { toRem } from '~/styles'

const DesktopMenu = ({ menuItems }: MenuProps) => (
    <Container
      as="nav"
      display={{ xs: 'hidden', lg: 'flex' }}
      position="fixed"
      bottom={86}
      right={{ xs: '0', lg: 40, xl: `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` }}
      paddingTop={{ lg: 86 }}
      zIndex="z50"
    >
      <Flex direction="col" align="end">
        {menuItems.map((item) => (
          <Link key={item} href={`#${item}`} variant="line" position="relative" paddingY={5}>
            <Text fontSize="lg" textTransform="uppercase">
              {item}
            </Text>
          </Link>
        ))}
      </Flex>
    </Container>
)

export default DesktopMenu
