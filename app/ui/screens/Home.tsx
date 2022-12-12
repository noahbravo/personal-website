import type { Data } from '~/types/albums'
import type { Animations } from '~/types/animations'
import { Preloader, Layout, Intro, About, Stack, Inspiration, Contact } from '~/ui/components'

interface HomeProps extends Data, Animations {
  loaded: boolean
}

const Home = ({
  albums,
  loaded,
  animateBgColorOnScroll,
  animateAbout,
  animateStack,
  animateInspiration,
  animateContact,
  animateSmoothScroll,
  animateMobileMenu,
  createImageInteraction
}: HomeProps) => {
  return (
    <>
      <Preloader loaded={loaded} />
      <Layout
        animateBgColorOnScroll={animateBgColorOnScroll}
        animateSmoothScroll={animateSmoothScroll}
        animateMobileMenu={animateMobileMenu}
      >
        <Intro />
        <About animateAbout={animateAbout} createImageInteraction={createImageInteraction} />
        <Stack animateStack={animateStack} />
        <Inspiration albums={albums} animateInspiration={animateInspiration} />
        <Contact animateContact={animateContact} />
      </Layout>
    </>
  )
}

export { Home }
