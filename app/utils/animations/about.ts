enum Selectors {
  container = '.profileContainer',
  bolt = '.bolt',
  skull = '.skull'
}

export function animateAbout(gsap: GSAP, screenWidths: Record<string, boolean>) {
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: Selectors.container,
      start: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  })

  tl.to(
    Selectors.bolt,
    {
      y: screenWidths.phoneOnly ? 20 : 80,
      ease: 'power1.inOut'
    },
    0
  )

  gsap.to(Selectors.skull, {
    rotation: 360 * 2.98,
    scale: 1,
    ease: 'power1.inOut',
    duration: 1,
    scrollTrigger: Selectors.skull
  })

  tl.to(
    Selectors.skull,
    {
      y: -140,
      ease: 'power1.inOut'
    },
    0
  )
}
