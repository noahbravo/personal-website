export interface Animations {
  animateSmoothScroll: () => void
  animateMobileMenu: () => { openMenu: () => void; closeMenu: () => void } | undefined
  animateBgColorOnScroll: (container: HTMLElement) => void
  animateAbout: () => void
  animateStack: () => void
  animateInspiration: (Container: HTMLElement) => void
  animateContact: () => void
  createImageInteraction: () => void
}
