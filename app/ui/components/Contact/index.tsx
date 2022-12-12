import type { Animations } from '~/types/animations'
import { useEffect } from 'react'
import { Container } from '~/ui/primitives'
import Email from './Email'
import Social from './Social'

type ContactProps = Pick<Animations, 'animateContact'>

const Contact = ({ animateContact }: ContactProps) => {
  useEffect(() => {
    animateContact()
  }, [animateContact])

  return (
    <Container
      as="section"
      id="contact"
      paddingTop={{ xs: 26, lg: 0 }}
      paddingBottom={{ xs: 80, sm: 40, lg: 100 }}
    >
      <Container variant="wrap" maxHeight={708}>
        <Email />
        <Social />
      </Container>
    </Container>
  )
}

export { Contact }
