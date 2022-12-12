import { toRem } from '~/styles'
import { Container, Grid, Img, Link, Text, Box } from '~/ui/primitives'
import heading from '~/assets/img/contact-heading.svg'
import smLine from '~/assets/img/hover-line-sm.svg'
import xlLine from '~/assets/img/hover-line-xl.svg'
import ghost from '~/assets/img/ghost.svg'

const ContactEmail = () => (
  <>
    <Grid templateColumns="12">
      <Img
        src={heading}
        alt="Get in touch"
        gridColumn="2"
        gridColumnStart={{ lg: '3' }}
        width={toRem(128)}
        css={{
          maxWidth: toRem(128)
        }}
      />
    </Grid>
    <Grid templateColumns="12">
      <Container
        position="relative"
        gridColumn={{ xs: '12', lg: '7' }}
        gridColumnStart={{ lg: '3' }}
        marginTop={20}
        marginBottom={{ xs: 40, lg: 60 }}
      >
        <Link
          href="mailto:mailto:hey@elenabravo.com"
          position="relative"
          css={{ '&:hover .linkLine': { width: '100%' } }}
        >
          <Container>
            <Box
              display={{ xs: 'hidden', lg: 'flex' }}
              position="absolute"
              top={-5}
              left="0"
              height={108}
              width={244}
              transform="translateX(-6%)"
            >
              <Box
                className="linkLine"
                display="flex"
                width="0"
                transition="width .5s cubic-bezier(.16,1,.3,1)"
              >
                <Img src={smLine} alt="link underline" pointerEvents="none" />
              </Box>
            </Box>
            <Text fontSize={{ xs: '3xl', sm: '5xl' }} lineHeight="none">
              hey@
            </Text>
          </Container>
          <Container>
            <Box
              display={{ xs: 'hidden', lg: 'flex' }}
              position="absolute"
              top={76}
              left="0"
              height={106}
              width={628}
              transform="translateX(-2.5%)"
            >
              <Box
                className="linkLine"
                display="flex"
                width="0"
                transition="width .5s cubic-bezier(.16,1,.3,1)"
              >
                <Img src={xlLine} alt="link underline" pointerEvents="none" />
              </Box>
            </Box>
            <Text fontSize={{ xs: '3xl', sm: '5xl' }} lineHeight="none">
              elenabravo.com
            </Text>
          </Container>
        </Link>
      </Container>
      <Img
        src={ghost}
        alt="ghost"
        className="ghost"
        display={{ xs: 'hidden', lg: 'flex' }}
        width={120}
        transform={`translateY(-${toRem(80)})`}
        pointerEvents="none"
      />
    </Grid>
  </>
)

export default ContactEmail
