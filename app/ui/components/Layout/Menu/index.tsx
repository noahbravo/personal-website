import type { Animations } from '~/types/animations'
import MobileMenu from './Mobile'
import DesktopMenu from './Desktop'
import networks from '~/ui/components/Contact/Social/networks'

type MenuProps = Pick<Animations, 'animateMobileMenu'>

const menuItems = ['about', 'stack', 'inspiration', 'contact']

const Menu = ({ animateMobileMenu }: MenuProps) => (
  <>
    <MobileMenu menuItems={menuItems} networks={networks} animateMobileMenu={animateMobileMenu} />
    <DesktopMenu menuItems={menuItems} />
  </>
)

export default Menu
