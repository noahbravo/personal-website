import { Container, Link, Img } from '~/ui/primitives'
import arrow from '~/assets/img/arrow.svg'

const ScrollDown = () => (
  <Container
    position="absolute"
    bottom={{ xs: 0, lg: 50 }}
    width="100%"
    paddingBottom={86}
    zIndex="z40"
  >
    <Container height={1} variant="wrap">
      <Link href="#about" variant="scrollDown" display="flex" width={40}>
        <Img src={arrow} alt="down arrow" position="relative" width="100%" />
      </Link>
    </Container>
  </Container>
)

export default ScrollDown
