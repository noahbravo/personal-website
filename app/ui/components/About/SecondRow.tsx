import { Container, Grid, Img, Text } from '~/ui/primitives'
import { toRem } from '~/styles'
import skull from '~/assets/img/skull.svg'

const SecondRow = () => (
  <Grid templateColumns="12">
    <Container
      gridColumn={{ xs: '12', lg: '4' }}
      gridColumnStart={{ lg: '3' }}
      paddingTop={{ xs: 60, lg: 0 }}
      transform={{ xl: `translateY(-${toRem(100)})` }}
      position="relative"
    >
      <Img
        src={skull}
        alt="skull logo"
        className="skull"
        display={{ xs: 'hidden', lg: 'flex' }}
        position="absolute"
        left="0"
        top={300}
        width={120}
        transform={{ lg: `scale(0) translateX(-${toRem(50)})` }}
        pointerEvents="none"
      />
      <Text as="p" marginY={18} fontSize="lg" lineHeight="relaxed">
        My main focus as a developer is building accessible, high performance and inclusive digital
        experiences without sacrificing creativity. Basically, I like creating cool sh*t.
      </Text>
    </Container>
  </Grid>
)

export default SecondRow
