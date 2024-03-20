import { toRem } from '~/styles'
import { Container, Flex, Text, Link, Img } from '~/ui/primitives'
import spotifyLogo from '~/assets/img/spotify.svg'

const year = new Date().getFullYear()

const Footer = () => (
  <Container
    as="footer"
    position="absolute"
    bottom="0"
    width="100vw"
    paddingY={28}
    paddingBottom={{ sm: 40 }}
    paddingX={{ xs: 0, sm: 20 }}
  >
    <Container variant="wrap">
      <Flex
        display={{ xs: 'hidden', sm: 'flex' }}
        direction={{ xs: 'col', sm: 'row' }}
        align={{ xs: 'start', sm: 'center' }}
        justify={{ sm: 'center' }}
      >
        <Container>
          <Text variant="withSeparator">© {year}</Text>
          <Text>Designed & coded with 🔥 by Noah Bravo while listening to</Text>
          <Link href="https://spoti.fi/3JVSAsH" isExternal display="inline-flex" marginLeft={6}>
            <Img
              src={spotifyLogo}
              alt="Spotify's logo"
              size={16}
              transform={`translateY(${toRem(2)}) scale(1)`}
              transition="transform 0.2s ease-in"
              css={{
                '&:hover': {
                  transform: `translateY(${toRem(2)}) scale(1.15)`,
                  transition: 'transform 0.2s ease-in-out'
                }
              }}
            />
          </Link>
        </Container>
      </Flex>
    </Container>
  </Container>
)

export default Footer
