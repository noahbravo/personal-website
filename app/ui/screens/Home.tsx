import type { Data } from '~/types/albums'
import type { Animations } from '~/types/animations'
import { Layout, Intro, About, Stack, Inspiration, Contact } from '~/ui/components'

type HomeProps = Data & Animations

const Home = ({
  albums,
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
  )
}

export { Home }
