import { Container, Img } from '~/ui/primitives'
import { toRem } from '~/styles'
import logo from '~/assets/img/logo.svg'

const Header = () => {
  return (
    <Container
      as="header"
      position={{ xs: 'absolute', lg: 'fixed' }}
      top={{ xs: 40, lg: 86 }}
      left={{ xs: 20, lg: 40, '2xl': `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` }}
      zIndex="z40"
    >
      <Img
        src={logo}
        alt="Elena Bravo logo"
        css={{
          '@sm': {
            width: toRem(150)
          },
          width: toRem(120)
        }}
        pointerEvents="none"
      />
    </Container>
  )
}

export default Header
