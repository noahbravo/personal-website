import { Container, Flex, Grid } from '~/ui/primitives'
import CTA from './CTA'
import Heading from './Heading'
import ScrollDown from './ScrollDown'

const Intro = () => {
  return (
    <Container width="100%" height="100vh" as="section">
      <Container height="100%" variant="wrap">
        <Flex height="100%" direction="col" justify="center" position="relative">
          <Grid align="center" templateColumns="12" height="100%" paddingTop={20} maxHeight={500}>
            <Heading />
            <CTA />
          </Grid>
          <ScrollDown />
        </Flex>
      </Container>
    </Container>
  )
}

export { Intro }
