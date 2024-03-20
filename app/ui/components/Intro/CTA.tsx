import { toRem } from '~/styles'
import { Flex, Img, Link, Box } from '~/ui/primitives'
import ctaText from '~/assets/img/intro-cta.svg'

const CTA = () => (
  <Link
    href="mailto:hola@noahbravo.dev"
    position={{ xs: 'fixed', lg: 'relative' }}
    gridColumnStart={{ lg: '11' }}
    alignSelf={{ lg: 'start' }}
    width={{ xs: 100, lg: 120 }}
    height={{ xs: 100, lg: 120 }}
    bottom={{ xs: 32, sm: 40 }}
    right={20}
    transform={{ xl: `translateY(-${toRem(20)})` }}
    css={{ '&:hover .ctaInner': { transform: 'scale(1.2)' } }}
    zIndex="z40"
  >
    <Flex position="relative" justify="center" align="center" width="100%" height="100%">
      <Box
        className="ctaInner"
        position="absolute"
        width="100%"
        height="100%"
        bgColor="white"
        borderRadius="50%"
        transform="scale(1)"
        transition="transform 1.2s cubic-bezier(.16,1,.3,1)"
      />
      <Img
        src={ctaText}
        alt="Get in touch"
        position="absolute"
        top="50%"
        size="50%"
        transform="translateY(-50%) rotate(10deg)"
      />
    </Flex>
  </Link>
)

export default CTA
