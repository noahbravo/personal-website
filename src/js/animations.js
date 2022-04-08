import Scrollbar from 'smooth-scrollbar'
import gsap, { TweenLite } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'

// GSAP plugins
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(Draggable)

const { width } = screen
const screenWidths = {
  phoneOnly: width < 480,
  phoneUp: width >= 480,
  laptopUp: width >= 1024,
  desktopUp: width >= 1280,
  bigDesktopUp: width >= 1536
}

export function smoothScroll() {
  // smooth scroll
  const scrollerSelector = '.scroller'
  const scroller = document.querySelector(scrollerSelector)

  const smoothScrollOptions = {
    damping: 0.06,
    delegateTo: document,
    alwaysShowTracks: false,
    continuousScrolling: false
  }

  const bodyScrollBar = Scrollbar.init(scroller, smoothScrollOptions)

  ScrollTrigger.scrollerProxy(scrollerSelector, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value
      }
      return bodyScrollBar.scrollTop
    }
  })

  bodyScrollBar.addListener(ScrollTrigger.update)
  ScrollTrigger.defaults({ scroller: scroller })

  // handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const scrollToHere = document.querySelector(
        this.getAttribute('href')
      ).offsetTop
      bodyScrollBar.scrollTo(0, scrollToHere, 1000)
    })
  })

  // toggle menu active class name
  const menuItemsSelector = '.menu__item__link'
  const sections = document.querySelectorAll('.section')

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      end: 'bottom 50%',
      toggleClass: {
        targets: document.querySelector(
          `${menuItemsSelector}[href^="#${section.id}"]`
        ),
        className: 'active'
      }
    })
  })
}

export function animatePreloader() {
  const preloaderSelector = '.preloader'
  gsap
    .timeline({
      defaults: { duration: 0.2 }
    })
    .to(preloaderSelector, { opacity: 0, y: '-100%' })
    .to(preloaderSelector, { width: 0, height: 0, visibility: 'hidden' })
}

export function animateBgColorOnScroll() {
  const container = document.querySelector('.main')
  const colors = {
    turquoise400: '#005C65',
    yellow100: '#FFAD00',
    red100: '#FF0D00'
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      end: () => `+=${container.offsetHeight - 750}`
    }
  })

  tl.to(
    container,
    {
      duration: 1,
      backgroundColor: colors.turquoise400,
      ease: 'none'
    },
    0
  )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: colors.yellow100,
        ease: 'none'
      },
      1
    )
    .to(
      container,
      {
        duration: 1,
        backgroundColor: colors.red100,
        ease: 'none'
      },
      2
    )
}

export function scrollTriggerAnimations() {
  const selectors = {
    about: {
      container: '.about__profile__container',
      bolt: '.about--bolt',
      skull: '.about--skull'
    },
    stack: {
      container: '#stack',
      skelly: '.stack--skelly'
    }
  }

  const aboutTl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: selectors.about.container,
      start: 'top 50%',
      toggleActions: 'play none none reverse'
    }
  })
  aboutTl.to(
    selectors.about.bolt,
    {
      y: screenWidths.phoneOnly ? 20 : 80,
      ease: 'power1.inOut'
    },
    0
  )

  gsap.to(selectors.about.skull, {
    rotation: 360 * 2.98,
    scale: 1,
    ease: 'power1.inOut',
    duration: 1,
    scrollTrigger: selectors.about.skull
  })

  aboutTl.to(
    selectors.about.skull,
    {
      y: -140,
      ease: 'power1.inOut'
    },
    0
  )

  const stackTl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: selectors.stack.container,
      start: 'top 70%'
    }
  })
  stackTl.to(
    selectors.stack.skelly,
    {
      y: -180,
      ease: 'power1.inOut'
    },
    0
  )
}

export function albumAnimations() {
  const sectionHeight = document.getElementById('inspiration').offsetHeight
  const handleGetPosition = (value) => `random(-15, ${value})`

  const getAlbumSectionSize = () => {
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

  const selectors = {
    container: '.inspiration__album__list',
    album: '.inspiration__album'
  }

  gsap.to(selectors.album, {
    ...getAlbumSectionSize(),
    ease: 'power1.inOut',
    duration: 1,
    // start: 'top 50%',
    repeatRefresh: true,
    scrollTrigger: selectors.container
  })

  Draggable.create(selectors.album, {
    type: 'x,y',
    edgeResistance: 0.65,
    bounds: '.main',
    inertia: true
  })
}

export function ghostAnimation() {
  const ghost = document.querySelector('.contact__img')

  const randomX = random(10, 40)
  const randomY = random(20, 60)
  // const randomDelay = random(0, 1)
  const randomTime = random(1, 3)
  const randomTime2 = random(3, 5)
  const randomAngle = random(5, 8)

  TweenLite.set(ghost, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  })

  moveX(ghost, 1)
  moveY(ghost, -1)
  rotate(ghost, 1)

  function rotate(target, direction) {
    TweenLite.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: 'Sine.easeInOut',
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveX(target, direction) {
    TweenLite.to(target, randomTime(), {
      x: randomX(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    })
  }

  function moveY(target, direction) {
    TweenLite.to(target, randomTime(), {
      y: randomY(direction),
      ease: 'Sine.easeInOut',
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    })
  }

  function random(min, max) {
    const delta = max - min
    return (direction = 1) => (min + delta * Math.random()) * direction
  }
}
