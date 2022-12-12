import { Img, Text, Button } from '~/ui/primitives'
import { toRem } from '~/styles/helpers'
import openMenuBtn from '~/assets/img/open-btn.svg'
import closeMenuBtn from '~/assets/img/close-btn.svg'

interface ButtonProps {
  openMenu: (() => void) | undefined
  closeMenu: (() => void) | undefined
}

const MenuButton = ({ openMenu, closeMenu }: ButtonProps) => (
  <>
    <Button
      type="button"
      aria-label="open menu"
      className="openMenuBtn"
      onClick={openMenu}
      position="absolute"
      top="0"
      right="0"
      width={107}
      height={96}
      padding={48}
      opacity="100"
      visibility="visible"
      pointerEvents="auto"
    >
      <Img
        src={openMenuBtn}
        alt="open menu button"
        position="absolute"
        top={37}
        left="50%"
        width={toRem(48)}
        height={toRem(24)}
        transform="translateX(-50%)"
      />
      <Text
        as="strong"
        position="absolute"
        left="0"
        bottom={3}
        width="100%"
        marginBottom={16}
        textTransform="uppercase"
        fontSize="xs"
        color="white"
        textAlign="center"
        transform="translateY(20%)"
      >
        Menu
      </Text>
    </Button>
    <Button
      type="button"
      aria-label="close menu"
      className="closeMenuBtn"
      onClick={closeMenu}
      position="absolute"
      top="0"
      right="0"
      width={107}
      height={96}
      padding={48}
      opacity="0"
      visibility="invisible"
      pointerEvents="auto"
    >
      <Img
        src={closeMenuBtn}
        alt="close menu button"
        position="absolute"
        top={37}
        left="50%"
        width={toRem(40)}
        height={toRem(40)}
        transform="translateY(-30%) translateX(-50%)"
      />
      <Text
        as="strong"
        position="absolute"
        left="0"
        bottom={3}
        width="100%"
        marginBottom={16}
        textTransform="uppercase"
        fontSize="xs"
        color="white"
        textAlign="center"
        transform="translateY(20%)"
      >
        Close
      </Text>
    </Button>
  </>
)

export default MenuButton
