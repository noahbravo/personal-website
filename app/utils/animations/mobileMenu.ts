enum Selectors {
  menu = '.mobileMenu',
  openBtn = '.openMenuBtn',
  closeBtn = '.closeMenuBtn'
}

const duration = 0.1
const ease = 'Sine.easeInOut'

const visible = { duration, autoAlpha: 1, ease }
const invisible = { duration, autoAlpha: 0, ease }

export function animateMobileMenu(gsap: GSAP) {
  function openMenu() {
    gsap.to(Selectors.menu, {
      ...visible,
      duration: 0.25,
      pointerEvents: 'auto',
      x: '0%'
    })
    gsap.to(Selectors.openBtn, invisible)
    gsap.to(Selectors.closeBtn, visible)
  }

  function closeMenu() {
    gsap.to(Selectors.menu, {
      ...invisible,
      duration: 0.25,
      pointerEvents: 'none',
      x: '100%'
    })
    gsap.to(Selectors.openBtn, visible)
    gsap.to(Selectors.closeBtn, invisible)
  }

  return { openMenu, closeMenu }
}
