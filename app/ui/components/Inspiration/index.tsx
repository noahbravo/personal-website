import type { Data } from '~/types/albums'
import type { Animations } from '~/types/animations'
import { useRef, useEffect } from 'react'
import { toRem } from '~/styles'
import { Container, Flex, Img } from '~/ui/primitives'
import Album from './album'
import heading from '~/assets/img/inspiration-heading.svg'

interface InspirationProps extends Data {
  animateInspiration: Animations['animateInspiration']
}

const Inspiration = ({ albums, animateInspiration }: InspirationProps) => {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (containerRef?.current) {
      animateInspiration(containerRef?.current)
    }
  }, [animateInspiration])

  return (
    <Container
      as="section"
      id="inspiration"
      ref={containerRef}
      height={{ xs: 708, xl: 800 }}
      marginY={86}
    >
      <Container variant="wrap">
        <Container position="relative" width="100%" height="100%" zIndex="z10">
          <Flex align="center" justify="center" position="absolute" width="100%">
            <Img
              src={heading}
              alt="Music is my drug"
              width="100%"
              maxWidth="lg"
              transform={`translateY(${toRem(286)})`}
            />
          </Flex>
          <Flex className="albumList" position="relative">
            {albums.map((data) => (
              <Album key={data.id} {...data} />
            ))}
          </Flex>
        </Container>
      </Container>
    </Container>
  )
}

export { Inspiration }
