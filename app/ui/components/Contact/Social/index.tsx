import { Grid, Img, Flex, Box, Link, Text } from '~/ui/primitives'
import { toRem } from '~/styles'
import heading from '~/assets/img/follow-heading.svg'
import socialNetworks from './networks'

const ContactSocial = () => (
  <Grid templateColumns="12">
    <Img
      src={heading}
      alt="Follow"
      gridColumn={{ xs: '3', lg: '2' }}
      gridColumnStart={{ lg: '3' }}
      width={toRem(85)}
      height={toRem(30)}
    />
    <Flex direction="col" gridColumnStart={{ xs: '9', sm: 'unset' }}>
      {socialNetworks.map(({ name, href }) => (
        <Box key={name}>
          <Link variant="line" href={href} isExternal>
            <Text textTransform="uppercase" css={{ fontSize: toRem(20) }}>
              {name}
            </Text>
          </Link>
        </Box>
      ))}
    </Flex>
  </Grid>
)

export default ContactSocial
