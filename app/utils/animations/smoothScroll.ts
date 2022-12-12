import { animateMobileMenu } from './mobileMenu'

export function animateSmoothScroll(gsap: GSAP) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const section = link.getAttribute('href') as string
      const isMobile = link.getAttribute('data-type') === 'mobile'

      if (isMobile) {
        const { closeMenu } = animateMobileMenu(gsap)
        closeMenu()
      }
      gsap.to(window, { duration: 1, scrollTo: { y: section, offsetY: -70 } })
    })
  })
}
