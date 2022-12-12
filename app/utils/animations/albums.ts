enum Selectors {
  container = '.albumList',
  album = '.album'
}

export function animateInspiration(
  gsap: GSAP,
  container: HTMLElement,
  width: number,
  screenWidths: Record<string, boolean>,
  Draggable: any
) {
  const { offsetHeight: sectionHeight } = container
  const handleGetPosition = (value: number) => `random(-15, ${value})`

  function getAlbumSectionSize() {
    if (screenWidths.phoneOnly) {
      return {
        x: handleGetPosition(width / 2),
        y: handleGetPosition(sectionHeight - 150)
      }
    }
    if (screenWidths.bigDesktopUp) {
      return {
        x: handleGetPosition(1280 / 1.4),
        y: handleGetPosition(sectionHeight - 300)
      }
    }
    if (screenWidths.desktopUp) {
      return {
        x: handleGetPosition(width / 1.65),
        y: handleGetPosition(sectionHeight - 300)
      }
    }
    if (screenWidths.laptopUp) {
      return {
        x: handleGetPosition(width / 1.5),
        y: handleGetPosition(sectionHeight - 250)
      }
    }
    if (screenWidths.phoneUp) {
      return {
        x: handleGetPosition(width / 1.75),
        y: handleGetPosition(sectionHeight - 250)
      }
    }
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: Selectors.container
    }
  })

  gsap.to(Selectors.album, { x: '-200%' })

  tl.to(
    Selectors.album,
    {
      autoAlpha: 1,
      duration: 0.1
    },
    0
  ).staggerTo(
    Selectors.album,
    0.75,
    {
      ...getAlbumSectionSize(),
      ease: 'power4.inOut'
    },
    -0.1
  )

  Draggable.create(Selectors.album, {
    type: 'x,y',
    edgeResistance: 0.65,
    bounds: '.main',
    inertia: true
  })
}
