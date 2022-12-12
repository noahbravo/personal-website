import type { Animations } from '~/types/animations'
import { useEffect } from 'react'
import { Container } from '~/ui/primitives'
import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'

type AboutProps = Pick<Animations, 'animateAbout' | 'createImageInteraction'>

const About = ({ animateAbout, createImageInteraction }: AboutProps) => {
  useEffect(() => {
    animateAbout()
    createImageInteraction()
  }, [animateAbout, createImageInteraction])

  return (
    <Container as="section" id="about" paddingTop={{ xs: 46, lg: 86 }} paddingBottom={86}>
      <Container variant="wrap" height="100%">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </Container>
    </Container>
  )
}

export { About }
