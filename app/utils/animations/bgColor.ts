enum Colors {
  turquoise200 = '#0098a8',
  turquoise400 = '#005C65',
  yellow100 = '#FFAD00',
  red100 = '#FF0D00'
}

export function animateBgColorOnScroll(gsap: GSAP, container: HTMLElement) {
  const { offsetHeight: containerHeight } = container
  gsap.to(container, { backgroundColor: Colors.turquoise200 })

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      end: () => `+=${containerHeight - 750}`
    }
  })

  tl.to(
    container,
    {
      duration: 1,
      backgroundColor: Colors.turquoise400,
      ease: 'none'
    },
    0
  )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: Colors.yellow100,
        ease: 'none'
      },
      1
    )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: Colors.red100,
        ease: 'none'
      },
      2
    )
}
