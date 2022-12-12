import { Grid, Text, Link } from '~/ui/primitives'

const ThirdRow = () => (
    <Grid templateColumns="12">
      <Text
        as="p"
        gridColumn={{ xs: '12', lg: '6' }}
        gridColumnStart={{ lg: '5' }}
        marginY={18}
        fontSize="lg"
        lineHeight="relaxed"
      >
        I'm currently working as a lead senior front-end developer at
        <Link
          href="https://samy.com/"
          variant="line"
          display="inline-flex"
          position="relative"
          marginX={6}
        >
          <Text>Samy</Text>
        </Link>
        and developing smaller projects for friends from time to time. I'm always available for fun
        and interesting side projects, so feel free to get in touch if you'd like to work together.
      </Text>
    </Grid>
  )

export default ThirdRow
