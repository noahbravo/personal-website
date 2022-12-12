enum Selectors {
  container = '#stack',
  skelly = '.skelly'
}

export function animateStack(gsap: GSAP) {
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: Selectors.container,
      start: 'top 70%'
    }
  })

  tl.to(
    Selectors.skelly,
    {
      y: -180,
      ease: 'power1.inOut'
    },
    0
  )
}
