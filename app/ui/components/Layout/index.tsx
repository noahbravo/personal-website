import { useEffect, useRef } from 'react'
import type { Animations } from '~/types/animations'
import { Container } from '~/ui/primitives'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import grungepattern from '~/assets/img/grungepattern.png'

interface LayoutProps {
  children: React.ReactNode
  animateBgColorOnScroll: Animations['animateBgColorOnScroll']
  animateSmoothScroll: Animations['animateSmoothScroll']
  animateMobileMenu: Animations['animateMobileMenu']
}

const Layout = ({
  children,
  animateBgColorOnScroll,
  animateSmoothScroll,
  animateMobileMenu
}: LayoutProps) => {
  const containerRef = useRef<HTMLElement>(null)
  animateSmoothScroll()

  useEffect(() => {
    if (containerRef?.current) {
      animateBgColorOnScroll(containerRef.current)
    }
  }, [animateBgColorOnScroll])

  return (
    <Container position="relative" bgColor="turquoise-200">
      <Header />
      <Menu animateMobileMenu={animateMobileMenu} />
      <Container width="100vw" minHeight={{ lg: 'screen' }} overflow="auto">
        <Container ref={containerRef} as="main" className="main" width="100%" height="100%">
          <Container
            width="100%"
            height="100%"
            background={`transparent url("${grungepattern}")`}
            paddingBottom={86}
          >
            {children}
          </Container>
        </Container>
      </Container>
      <Footer />
    </Container>
  )
}

export { Layout }
