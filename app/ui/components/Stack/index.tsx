import type { Animations } from '~/types/animations'
import { useEffect } from 'react'
import { Container, Grid, Img, Text } from '~/ui/primitives'
import { toRem } from '~/styles'
import heading from '~/assets/img/stack-heading.svg'
import skelly from '~/assets/img/skelly.svg'

type StackProps = Pick<Animations, 'animateStack'>

const Stack = ({ animateStack }: StackProps) => {
  useEffect(() => {
    animateStack()
  }, [animateStack])

  return (
    <Container as="section" className="section" id="stack" paddingY={{ xs: 0, lg: 86 }}>
      <Container variant="wrap" maxHeight={{ xl: 708 }}>
        <Grid templateColumns="12" marginBottom={18}>
          <Img
            src={heading}
            alt="Stack/Technologies"
            gridColumn={{ xs: '3', lg: '2' }}
            gridColumnStart={{ lg: '3' }}
            width={200}
            css={{
              maxWidth: toRem(200)
            }}
          />
        </Grid>
        <Grid templateColumns="12">
          <Text
            as="p"
            gridColumn={{ xs: '12', lg: '7' }}
            gridColumnStart={{ lg: '3' }}
            marginTop={{ xs: 20 }}
            fontFamily="secondary"
            lineHeight={{ xs: 'tight', sm: 'none' }}
            fontSize={{ xs: '2xl', sm: '3xl', md: '4xl' }}
          >
            JAVASCRIPT, TYPESCRIPT, REACT, NEXT, REMIX, GRAPHQL, APOLLO, REDUX, WEBPACK, JEST, REACT
            TESTING LIBRARY, CYPRESS, NODE, EXPRESS, SASS, CSS IN JS, TAILWINDCSS, GSAP, PUG, GIT,
            GITLAB, STORYBOOK, FIREBASE, NETLIFY, GATSBY, FIGMA, ILLUSTRATOR
          </Text>
          <Img
            src={skelly}
            alt="skelleton illustration with a hat"
            className="skelly"
            display={{ xs: 'hidden', lg: 'block' }}
            alignSelf="end"
            transform={{
              lg: `translateY(${toRem(80)}) translateX(${toRem(40)})`,
              xl: `translateY(${toRem(80)}) translateX(${toRem(0)})`
            }}
            pointerEvents="none"
          />
        </Grid>
      </Container>
    </Container>
  )
}

export { Stack }
