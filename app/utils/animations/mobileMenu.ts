enum Selectors {
  menu = '.mobileMenu',
  openBtn = '.openMenuBtn',
  closeBtn = '.closeMenuBtn'
}

const duration = 0.1
const ease = 'Sine.easeInOut'

const visible = { duration, autoAlpha: 1, ease }
const invisible = { duration, autoAlpha: 0, ease }

function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

function enableScroll() {
  window.onscroll = function () {}
}

export function animateMobileMenu(gsap: GSAP) {
  function openMenu() {
    disableScroll()
    gsap.to('body', { duration, overflow: 'hidden' })
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
    enableScroll()
    gsap.to('body', { overflow: 'auto' })
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
