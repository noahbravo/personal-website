import { toRem } from '~/styles'
import { Container, Img } from '~/ui/primitives'
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
      <Img src={logo} alt="Elena Bravo logo" imgWidth={{ xs: 120, sm: 150 }} pointerEvents="none" />
    </Container>
  )
}

export default Header
